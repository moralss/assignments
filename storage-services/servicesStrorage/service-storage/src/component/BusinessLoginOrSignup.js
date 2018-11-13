import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import * as actions from "../actions";
import RegisterOwner from "./RegisterBusinessOwner";
import LoginFormOwner from "./LoginFormOwner";
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

export default connect(
  null,
  null
)(BusinessLoginOrSignup);
