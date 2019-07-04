package com.storageapp.security;

import com.storageapp.domain.User;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.omg.PortableInterceptor.USER_EXCEPTION;
import org.springframework.stereotype.Component;

@Component
public class JwtGenerator {


    public String generate(User user) {


        Claims claims = Jwts.claims()
                .setSubject(user.getUserName());
        claims.put("userId", user.getId());
        claims.put("email", user.getEmail());


        return Jwts.builder()
                .setClaims(claims)
                .signWith(SignatureAlgorithm.HS512, "youtube")
                .compact();
    }
}