package com.storageapp.controllers;


import com.storageapp.domain.User;
import org.springframework.web.bind.annotation.*;

@RestController
public class BusinessController {

    @RequestMapping("/api/business")
    public User getBusiness(@RequestParam  String id){
        return new User(1 ,"name" , "pddb44db" , "email@gmail.com");
    }

}
