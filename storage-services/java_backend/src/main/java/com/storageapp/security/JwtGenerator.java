package com.storageapp.security;

import com.storageapp.domain.BusinessOwner;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Component;

@Component
public class JwtGenerator {


    public String generate(BusinessOwner businessOwner) {


        Claims claims = Jwts.claims()
                .setSubject(businessOwner.getUserName());
        claims.put("userId", businessOwner.getId());
        claims.put("email", businessOwner.getEmail());


        return Jwts.builder()
                .setClaims(claims)
                .signWith(SignatureAlgorithm.HS512, "youtube")
                .compact();
    }
}