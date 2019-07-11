package com.storageapp.security;


import com.storageapp.domain.BusinessOwner;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.springframework.stereotype.Component;

@Component
public class JwtValidator {


    private String secret = "youtube";


    public BusinessOwner validate(String token) {

        BusinessOwner jwtBusinessOwner = null;
        try {
            Claims body = Jwts.parser()
                    .setSigningKey(secret)
                    .parseClaimsJws(token)
                    .getBody();

            System.out.println("user id " + body.get("userId"));
            jwtBusinessOwner = new BusinessOwner();
            jwtBusinessOwner.setUserName(body.getSubject());
            jwtBusinessOwner.setId(Long.parseLong((String) body.get("userId")));
            jwtBusinessOwner.setEmail((String) body.get("email"));
        }
        catch (Exception e) {
            System.out.println(e);
        }

        return jwtBusinessOwner;
    }
}