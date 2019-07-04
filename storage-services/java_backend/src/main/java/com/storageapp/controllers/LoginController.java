package com.storageapp.controllers;


//import com.storageapp.config.JwtResponse;
//import com.storageapp.config.JwtTokenUtil;

import com.storageapp.domain.*;

import com.storageapp.repository.UserRepository;
import com.storageapp.security.JwtGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.net.PasswordAuthentication;
import java.util.HashMap;
import java.util.Map;
import java.util.logging.Logger;


@RestController
public class LoginController {


    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtGenerator jwtGenerator;

    @PostMapping("/registor")
    public Map<String , String> registorUser(@RequestBody User registorDetails) {
        Map<String, String> token = new HashMap<>();
        User user = userRepository.saveUser(registorDetails);
        String generatoredToken = jwtGenerator.generate(registorDetails);
        token.put("token" , generatoredToken);
        return token;
    }


    @RequestMapping("/cars")
    public User getBusiness(@RequestParam String name) {
        User user = userRepository.findUserByUserName(name);
        System.out.println("user " + user);
        return user;
    }


    @PostMapping("/authenticate")
    public Map<String , String> createAuthenticationToken(@RequestBody JwtRequest user) {
        Map<String , String> token = new HashMap<>();
        try {
            BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
            User foundUser = userRepository.findUserByUserName(user.getUserName());
            if(foundUser == null){
                throw new UsernameNotFoundException("user not found");
            }
            boolean isAuthorization = bCryptPasswordEncoder.matches(user.getPassword(), foundUser.getPassword());
            if (!isAuthorization) {
                System.out.println("password is incorrect !");
            } else {
                String generatedToken = jwtGenerator.generate(foundUser);
                token.put("token" , generatedToken);
            }

        } catch (Exception ex) {
            System.out.println(ex);
        }
        return token;
    }
}

