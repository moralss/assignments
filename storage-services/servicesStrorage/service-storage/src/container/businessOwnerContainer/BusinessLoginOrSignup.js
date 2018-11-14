import React, { Component } from "react";
import "../../App.css";
import { NavLink } from "react-router-dom";

class BusinessLoginOrSignup extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1> Business owner </h1>
        <NavLink to="/registerowner" class="link-tag">
          sign up
        </NavLink>
        <NavLink to="/loginowner" class="link-tag">
          login
        </NavLink>
      </div>
    );
  }
}

export default BusinessLoginOrSignup;
