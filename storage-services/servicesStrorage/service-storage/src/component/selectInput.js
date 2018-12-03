import React from "react";

export const listOfUnits = ["garage", "office"];

export const listOfProvinces = [
  "Eastern Cape",
  "Free State",
  "Gauteng",
  "KwaZulu-Natal",
  "Limpopo",
  "Mpumalanga",
  "North West",
  "Northen Cape ",
  "Western Cape"
];

export const SelectField = ({
  input,
  label,
  meta: { touched, error },
  children
}) => (
  <div>
    <label>{label}</label>
      <select {...input}>{children}</select>
      {error && touched ? (
        <span style={{ display: "block", color: "red", fontSize: "10px" }}>
          {error}
        </span>
      ) : (
        <span> </span>
      )}
  </div>
);
