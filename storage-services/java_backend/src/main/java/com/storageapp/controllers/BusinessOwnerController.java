package com.storageapp.controllers;


//import com.storageapp.config.JwtResponse;
//import com.storageapp.config.JwtTokenUtil;

import com.storageapp.domain.*;

import com.storageapp.repository.BusinessOwnerRepository;
import com.storageapp.security.JwtGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;


@RestController
public class BusinessOwnerController {

    @Autowired
    private BusinessOwnerRepository businessOwnerRepository;

    @Autowired
    private JwtGenerator jwtGenerator;


    @PostMapping("/api/businessownersign")
    public Map<String , String> registorUser(@RequestBody BusinessOwner registorDetails) {
        Map<String, String> token = new HashMap<>();
        BusinessOwner businessOwner = businessOwnerRepository.saveUser(registorDetails);
        String generatoredToken = jwtGenerator.generate(businessOwner);
        token.put("token" , generatoredToken);
        return token;
    }


    @PostMapping("/api/businessownerlogin")
    public Map<String , String> createAuthenticationToken(@RequestBody JwtRequest user) {
        Map<String , String> token = new HashMap<>();
        try {
            BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
            BusinessOwner foundBusinessOwner = businessOwnerRepository.findUserByUserName(user.getUserName());
            if(foundBusinessOwner == null){
                throw new UsernameNotFoundException("user not found");
            }
            boolean isAuthorization = bCryptPasswordEncoder.matches(user.getPassword(), foundBusinessOwner.getPassword());
            if (!isAuthorization) {
                System.out.println("password is incorrect !");
            } else {
                String generatedToken = jwtGenerator.generate(foundBusinessOwner);
                token.put("token" , generatedToken);
            }
        } catch (Exception ex) {
            System.out.println(ex);
        }
        return token;
    }
}

