package com.storageapp.controllers;


//import com.storageapp.config.JwtResponse;
//import com.storageapp.config.JwtTokenUtil;
import com.storageapp.domain.*;

import com.storageapp.repository.UserRepository;
//import com.storageapp.services.JwtUserDetailsService;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.logging.Logger;


@RestController
public class LoginController {

    @Autowired
    private UserRepository services;

//    @Autowired
//    private JwtTokenUtil jwtTokenUtil;

//
//    @Autowired
//    private JwtUserDetailsService userDetailsService;
//
//
//    @PostMapping("/api/businessownersign")
//    public Map<String, String> registerUser(@RequestBody User user){
//        user.getName();
//        services.saveUser(user);
//        Map<String , String > tokens = new HashMap<String , String>();
//        String token = Jwts.builder().setSubject(user.getName()).claim("roles", "user").setIssuedAt(new Date())
//                .signWith(SignatureAlgorithm.HS256, "secretkey").compact();
//        tokens.put("token" , token);
//        return tokens;
//
//
//    }

    @RequestMapping("/cars")
    public User getBusiness(@RequestParam  String name){
        User user = services.findUserByUserName(name);
        System.out.println(user);
        return user;
    }


    @PostMapping("/authenticate")
    public Map<String , String> createAuthenticationToken(@RequestBody User user)  {
        Map<String ,String > giveToken = new HashMap<String , String>();

//        try{
//            System.out.println(user.getName());
//            final UserDetails userDetails = userDetailsService.loadUserByUsername(user.getName());
//            System.out.println("userDetails" + user);
////            final String token = jwtTokenUtil.generateToken(user);
//            System.out.println(" token >>>>>>" +  token);
//            Logger.getLogger("token >>>>>>>>>" + token);
//
//            giveToken.put("token" , token);
//
//        }catch (Exception ex){
//            System.out.println(ex);
//        }

        return giveToken;
    }
}

