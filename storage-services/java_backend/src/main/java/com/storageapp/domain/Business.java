package com.storageapp.domain;

public class Business {
    private String businessName;
    private String contactNumber;
    private String contactEmail;
    private long businessOwnerId;


    public Business(String businessName, String contactNumber, String contactEmail, long businessOwnerId) {
        this.businessName = businessName;
        this.contactNumber = contactNumber;
        this.contactEmail = contactEmail;
        this.businessOwnerId = businessOwnerId;
    }

    public long getBusinessOwnerId() {
        return businessOwnerId;
    }

    public void setBusinessOwnerId(long businessOwnerId) {
        this.businessOwnerId = businessOwnerId;
    }

    public String getContactEmail() {
        return contactEmail;
    }

    public void setContactEmail(String contactEmail) {
        this.contactEmail = contactEmail;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }

    public String getBusinessName() {
        return businessName;
    }

    public void setBusinessName(String businessName) {
        this.businessName = businessName;
    }
}
