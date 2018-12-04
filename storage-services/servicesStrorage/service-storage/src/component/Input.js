import React from "react";
import { Input, ErrorSpan } from ".././styles/register";

const renderInput = ({ type, input, meta, label }) => {
  return (
    <div>
      <Input {...input} type={type} placeholder={label} />
      {meta.error && meta.touched ? (
        <ErrorSpan> {meta.error}</ErrorSpan>
      ) : (
        <span> </span>
      )}
    </div>
  );
};

export default renderInput;
