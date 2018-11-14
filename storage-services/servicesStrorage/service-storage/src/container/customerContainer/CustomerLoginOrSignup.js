import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class CustomerLoginOrSignup extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1> Customer </h1>
        <NavLink to="/registercustomer" class="link-tag">
          sign up
        </NavLink>
        <NavLink to="/customerlogin" class="link-tag">
          login
        </NavLink>
      </div>
    );
  }
}

export default CustomerLoginOrSignup;
