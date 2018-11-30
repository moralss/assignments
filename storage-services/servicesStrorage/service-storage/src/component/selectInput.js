import React, { Component } from "react";

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
  <div className="field">
    <label className="label">{label}</label>
    <div className="control">
      <div
        className={
          "select " + (touched ? (error ? "is-danger" : "is-success") : "")
        }
      >
        <select {...input}>{children}</select>
        {touched && (error && <p className="help is-danger">{error}</p>)}
      </div>
    </div>
  </div>
);
