package com.works.services;

import com.works.entities.User;
import com.works.models.JwtLogin;
import com.works.utils.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.LinkedHashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
@Transactional
public class JwtService {

    final AuthenticationManager authenticationManager;
    final JwtUtil jwtUtil;
    final UserService userService;

    public ResponseEntity auth(JwtLogin jwtLogin) {
        Map<String, Object> hm = new LinkedHashMap<>();
        try {
            authenticationManager.authenticate( new UsernamePasswordAuthenticationToken(
                    jwtLogin.getEmail(), jwtLogin.getPassword()
            ) );
            UserDetails userDetails = userService.loadUserByUsername(jwtLogin.getEmail());
            User user = userService.login(jwtLogin.getEmail());
            String jwt = jwtUtil.generateToken(userDetails);
            hm.put("status", true);
            hm.put( "jwt", jwt );
            hm.put("result", user);
            return new ResponseEntity(hm, HttpStatus.OK);
        }catch (Exception ex) {
            hm.put( "status", false);
            hm.put( "error", ex.getMessage() );
            return new ResponseEntity(hm, HttpStatus.NOT_ACCEPTABLE);
        }
    }

}
