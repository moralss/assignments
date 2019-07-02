package com.storageapp.controllers;


import com.storageapp.config.Database;
import com.storageapp.domain.*;

import com.storageapp.repository.UserRepository;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class LoginController {

//
//    @Autowired
//    private UserRepository services;
//


    @PostMapping("/api/businessownersign")
    public Map<String, String> registerUser(@RequestBody User user){
        Database database = new Database();
        UserRepository services = new UserRepository(database);

        user.getName();
        services.saveUser(user);


        Map<String , String > tokens = new HashMap<String , String>();
        String token = Jwts.builder().setSubject(user.getName()).claim("roles", "user").setIssuedAt(new Date())
                .signWith(SignatureAlgorithm.HS256, "secretkey").compact();
        tokens.put("token" , token);
        return tokens;


    }
}
