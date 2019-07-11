package com.storageapp.controllers;


import com.storageapp.domain.BusinessOwner;
import com.storageapp.domain.Business;
import com.storageapp.repository.BusinessRepository;
import com.storageapp.repository.BusinessOwnerRepository;
import com.storageapp.security.JwtValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
public class BusinessController {


    @Autowired
    private BusinessOwnerRepository businessOwnerRepository;

    @Autowired
    private BusinessRepository businessRepository;

    @Autowired
    private JwtValidator jwtValidator;

    @RequestMapping("/api/business")
    public BusinessOwner getBusiness() {
        return null;
    }


    @PostMapping("/api/business")
    public ResponseEntity<Map<String, String>> addBusiness(@RequestBody Business business, @RequestHeader(value = "Accept") String acceptHeader,
                                                           @RequestHeader(value = "Authorization") String authorizationHeader) {

        String token = authorizationHeader.substring(6, authorizationHeader.length());
        Map<String, String> returnValue = new HashMap<>();
        System.out.println(token);
        BusinessOwner businessOwner = jwtValidator.validate(token);
        System.out.println("id for user " + businessOwner.getId() + " user name " + businessOwner.getUserName());
//        business.setBusinessOwnerId(user.getId());
//        businessRepository.saveBusiness(business);
        return ResponseEntity.status(HttpStatus.OK).body(returnValue);
    }

}
