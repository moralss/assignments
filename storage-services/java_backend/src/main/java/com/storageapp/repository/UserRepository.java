package com.storageapp.repository;


import com.storageapp.config.Database;
import com.storageapp.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Repository;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.List;

    @Repository
    public class UserRepository {

        @Autowired
        private Database db;



        public User saveUser(User user) {
            String SQL = "INSERT INTO business_owners(email ,hashed_password, user_name ) "
                    + "VALUES(? , ? , ?)";


             BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();

            System.out.println("password" + user.getPassword());

            user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));

            try {
                PreparedStatement pstmt = db.connect().prepareStatement(SQL,
                        Statement.RETURN_GENERATED_KEYS);
                pstmt.setString(1, user.getEmail());
                pstmt.setString(2, user.getPassword());
                pstmt.setString(3, user.getUserName());
                pstmt.executeUpdate();

            } catch (Exception ex) {
                System.out.println(ex.getMessage());
            }

            return this.findUserByUserName(user.getUserName());
        }


        public User findUserByUserName(String name) {
            String sql = "SELECT * FROM business_owners WHERE user_name=(?);";
            User newUser = new User();

            try {
                PreparedStatement st = db.connect().prepareStatement(sql);
                st.setString(1, name);
                ResultSet rs = st.executeQuery();
                while (rs.next()) {
                 System.out.println("result " + rs.getInt(1) +  " "+rs.getString(2) +" "  +rs.getString(3)+ "" + rs.getString(4));

                    newUser.setId(rs.getInt(1));
                    newUser.setEmail(rs.getString(2));
                    newUser.setPassword(rs.getString(3));
                    newUser.setUserName(rs.getString(4));

                }

            } catch (Exception ex) {
                System.out.println(ex.getMessage());
            }

            return newUser;
        }
    }



//
//        public User findAll(){
//            String sql = "SELECT * FROM users";
//
//            try{
//                PreparedStatement st = db.connect().prepareStatement(sql);
//                ResultSet rs = st.executeQuery();
//                while (rs.next())
//                {
//                    System.out.println("result " + rs.getInt(1) + " " + rs.getString(2) + " " + rs.getString(3));
//                }
//            }catch (Exception ex){
//                System.out.println(ex.getMessage());
//            }
//        }




