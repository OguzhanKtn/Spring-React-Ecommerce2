package com.works.restcontrollers;

import com.works.entities.User;
import com.works.models.JwtLogin;
import com.works.services.JwtService;
import com.works.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
@CrossOrigin
public class UserController {

    final UserService userService;
    final JwtService jwtService;

    @PostMapping("/register")
    public User register(@Valid @RequestBody User user){
        return userService.register(user);
    }

    @PostMapping("/login")
    public ResponseEntity login(@Valid @RequestBody JwtLogin jwtLogin){
        return jwtService.auth(jwtLogin);
    }

}
