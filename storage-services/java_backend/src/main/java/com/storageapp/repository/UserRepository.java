package com.storageapp.repository;


import com.storageapp.config.Database;
import com.storageapp.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

//    @Repository
    public class UserRepository  {

        private Database db;

        public UserRepository(Database db){
            this.db = db;
        }


        public void saveUser(User user){
            String SQL = "INSERT INTO business_owners(email ,hashed_password, user_name ) "
                    + "VALUES(? , ? , ?)";
            try{
                PreparedStatement pstmt = db.connect().prepareStatement(SQL,
                        Statement.RETURN_GENERATED_KEYS);
                pstmt.setString(1, user.getEmail());
                pstmt.setString(2, user.getPassword());
                pstmt.setString(3, user.getName());
                pstmt.executeUpdate();

            }catch (Exception ex){
                System.out.println(ex.getMessage());
            }
        }
    }

