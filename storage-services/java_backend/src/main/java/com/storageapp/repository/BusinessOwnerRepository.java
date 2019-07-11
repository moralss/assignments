package com.storageapp.repository;


import com.storageapp.config.Database;
import com.storageapp.domain.BusinessOwner;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Repository;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

@Repository
public class BusinessOwnerRepository {

    @Autowired
    private Database db;

    public BusinessOwner saveUser(BusinessOwner businessOwner) {
        String SQL = "INSERT INTO business_owners(email ,hashed_password, user_name ) "
                + "VALUES(? , ? , ?)";

        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
        businessOwner.setPassword(bCryptPasswordEncoder.encode(businessOwner.getPassword()));
        try {
            PreparedStatement pstmt = db.connect().prepareStatement(SQL,
                    Statement.RETURN_GENERATED_KEYS);
            pstmt.setString(1, businessOwner.getEmail());
            pstmt.setString(2, businessOwner.getPassword());
            pstmt.setString(3, businessOwner.getUserName());
            pstmt.executeUpdate();
        } catch (Exception ex) {
            System.out.println(ex.getMessage());
        }
        return this.findUserByUserName(businessOwner.getUserName());
    }


    public BusinessOwner findUserByUserName(String name) {
        String sql = "SELECT * FROM business_owners WHERE user_name=(?);";
        BusinessOwner newBusinessOwner = new BusinessOwner();
        try {
            PreparedStatement st = db.connect().prepareStatement(sql);
            st.setString(1, name);
            ResultSet rs = st.executeQuery();
            while (rs.next()) {
                newBusinessOwner.setId(rs.getInt(1));
                newBusinessOwner.setEmail(rs.getString(2));
                newBusinessOwner.setPassword(rs.getString(3));
                newBusinessOwner.setUserName(rs.getString(4));
            }
        } catch (Exception ex) {
            System.out.println(ex.getMessage());
        }
        return newBusinessOwner;
    }
}







