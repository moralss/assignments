package com.storageapp.domain;

import java.io.Serializable;

public class JwtRequest implements Serializable {
    private static final long serialVersionUID = 5926468583005150707L;
    private String userName;
    private String password;
    //need default constructor for JSON Parsing
    public JwtRequest() {

    }

    public JwtRequest(String userName , String password ) {
        this.setPassword(password);
        this.setUserName(userName);
    }


    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
