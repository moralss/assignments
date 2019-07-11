package com.storageapp.repository;

import com.storageapp.config.Database;
import com.storageapp.domain.Business;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.sql.PreparedStatement;
import java.sql.Statement;

@Component
public class BusinessRepository {

    @Autowired
    private Database db;

    public void saveBusiness(Business business) {
        String SQL = "INSERT INTO businesses(business_name ,contact_number," +
                " contact_email , business_owner_id) "
                + "VALUES(? , ? , ? , ?) ";
        try {
            PreparedStatement pstmt = db.connect().prepareStatement(SQL,
                    Statement.RETURN_GENERATED_KEYS);
            pstmt.setString(1, business.getBusinessName());
            pstmt.setString(2, business.getContactNumber());
            pstmt.setString(3, business.getContactEmail());
            pstmt.setLong(4 , business.getBusinessOwnerId());
            pstmt.executeUpdate();
        } catch (Exception ex) {
            System.out.println(ex.getMessage());
        }
    }

    public void getBusiness(Business business){

    }
}
