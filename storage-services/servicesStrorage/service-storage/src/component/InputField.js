import React, { Component } from "react";

const RenderInput = ({ input, meta, label }) => {
  return (
    <div>
      <input />
    </div>
  );
};

export default RenderInput;




// <label>{label}</label>
// <input {...input} />
// {meta.error && meta.touched ? (
//   <span style={{ color: "red" }}> {meta.error}</span>
// ) : (
//   <span> </span>
// )}