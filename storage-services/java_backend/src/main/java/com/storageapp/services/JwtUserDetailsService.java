//package com.storageapp.services;
//
//import com.storageapp.domain.User;
//import com.storageapp.repository.UserRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Component;
//
//import java.util.ArrayList;
//
//@Component
//public class JwtUserDetailsService implements UserDetailsService {
//
//    @Autowired
//    private UserRepository userRepository;
//
//
//    private PasswordEncoder bcryptEncoder;
//
//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        User user = userRepository.findUserByUserName(username);
////        System.out.println("" + user);
//        if (user.getName().equals(username)) {
//            return (UserDetails) user;
//        } else {
//            throw new UsernameNotFoundException("User not found with username: " + username);
//        }
//
//    }
//}
