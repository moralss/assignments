package com.storageapp.security;

import com.storageapp.domain.BusinessOwner;
import com.storageapp.domain.JwtAuthenticationToken;
import com.storageapp.domain.JwtUserDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.authentication.dao.AbstractUserDetailsAuthenticationProvider;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
    public class JwtAuthenticationProvider extends AbstractUserDetailsAuthenticationProvider {

        @Autowired
        private JwtValidator validator;

        @Override
        protected void additionalAuthenticationChecks(UserDetails userDetails, UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken) throws AuthenticationException {

        }

        @Override
        protected UserDetails retrieveUser(String username, UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken) throws AuthenticationException {

            JwtAuthenticationToken jwtAuthenticationToken = (JwtAuthenticationToken) usernamePasswordAuthenticationToken;
            String token = jwtAuthenticationToken.getToken();

            BusinessOwner jwtBusinessOwner = validator.validate(token);

            if (jwtBusinessOwner == null) {
                throw new RuntimeException("JWT Token is incorrect");
            }

            List<GrantedAuthority> grantedAuthorities = AuthorityUtils
                    .commaSeparatedStringToAuthorityList(jwtBusinessOwner.getEmail());
            return new JwtUserDetails(jwtBusinessOwner.getUserName(), jwtBusinessOwner.getId(),
                    token,
                    grantedAuthorities);
        }



    @Override
        public boolean supports(Class<?> aClass) {
            return (JwtAuthenticationToken.class.isAssignableFrom(aClass));
        }
    }

