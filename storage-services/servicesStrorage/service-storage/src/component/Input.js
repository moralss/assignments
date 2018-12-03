import React, { Component } from "react";
import { Input } from ".././styles/register";

const renderInput = ({ input, meta, label }) => {
  return (
    <div>
        
      <Input {...input} placeholder={label} />
      {meta.error && meta.touched ? (
        <span style={{ display: "block", color: "red" , fontSize:"10px" }}> {meta.error}</span>
      ) : (
        <span> </span>
      )}
    </div>
  );
};

export default renderInput;
