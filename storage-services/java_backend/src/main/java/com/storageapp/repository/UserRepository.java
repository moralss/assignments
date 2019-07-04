package com.storageapp.repository;


import com.storageapp.config.Database;
import com.storageapp.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Repository;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.List;

    @Repository
    public class UserRepository {

        @Autowired
        private Database db;


        public void saveUser(User user) {
            String SQL = "INSERT INTO business_owners(email ,hashed_password, user_name ) "
                    + "VALUES(? , ? , ?)";
            try {
                PreparedStatement pstmt = db.connect().prepareStatement(SQL,
                        Statement.RETURN_GENERATED_KEYS);
                pstmt.setString(1, user.getEmail());
                pstmt.setString(2, user.getPassword());
                pstmt.setString(3, user.getName());
                pstmt.executeUpdate();

            } catch (Exception ex) {
                System.out.println(ex.getMessage());
            }
        }


        public User findUserByUserName(String name) {
            String sql = "SELECT * FROM business_owners WHERE user_name=(?);";
            User user = null;
            try {
                PreparedStatement st = db.connect().prepareStatement(sql);
                st.setString(1, name);
                ResultSet rs = st.executeQuery();
                while (rs.next()) {
                 System.out.println("result " + rs.getInt(1) +  " "+rs.getString(2) +" "  +rs.getString(4)+
                         rs.getString(3));
                    user.setId(rs.getInt(1));
                    user.setEmail(rs.getString(2));
                    user.setPassword(rs.getString(3));
                    user.setName( rs.getString(4));
                }

            } catch (Exception ex) {
                System.out.println(ex.getMessage());
            }

            return user;
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




