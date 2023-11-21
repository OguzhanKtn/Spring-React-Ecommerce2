package com.works.services;

import com.works.entities.Role;
import com.works.entities.User;
import com.works.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class UserService implements UserDetailsService {

    final UserRepository userRepository;
    final PasswordEncoder passwordEncoder;

    public User register(User user){
        Optional<User> optionalUser = userRepository.findByEmailEqualsIgnoreCase(user.getEmail());
        List<Role> roles = new ArrayList<>();
        Role role = new Role();
        role.setRid(2l);
        roles.add(role);
        if(optionalUser.isPresent()){
            return null;
        }else{
            String newPassword = passwordEncoder.encode(user.getPassword());
            user.setPassword(newPassword);
            user.setRoles(roles);
            userRepository.save(user);
            return user;
        }
    }

    public User login(String username){
        Optional<User> user = userRepository.findByEmailEqualsIgnoreCase(username);
        if(user.isPresent()){
            return user.get();
        }
        return null;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
       Optional<User> optionalUser = userRepository.findByEmailEqualsIgnoreCase(username);
       if(optionalUser.isPresent()){
           User user = optionalUser.get();
           return new org.springframework.security.core.userdetails.User(user.getEmail(),user.getPassword(),parseRole(user.getRoles()));
       }
        throw new UsernameNotFoundException("Not Found");
    }

    private Collection<? extends GrantedAuthority> parseRole(List<Role> roles) {
        List<GrantedAuthority> ls = new ArrayList<>();
        for( Role item : roles ) {
            ls.add( new SimpleGrantedAuthority(item.getRole()));
        }
        return ls;
    }
}
