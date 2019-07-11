package com.storageapp.config;

import org.springframework.stereotype.Component;

import java.sql.Connection;
import java.sql.DriverManager;


    @Component
    public class Database  {

        private final String url = "jdbc:postgresql://localhost/storage_services";
        private final String user = "postgres";
        private final String password = "Moral007";

        public Connection connect() {
            Connection conn = null;

            try{
                Class.forName("org.postgresql.Driver");
                conn =  DriverManager.getConnection(url, user, password);

            }catch (Exception ex){
                System.out.println(ex.getMessage());
            }
            return conn;

        }


    }


