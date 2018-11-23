import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import { AppWrapper } from "../styles/homePage";

class Homepage extends Component {
  constructor() {
    super();
  }

  registerCustomer() {
    this.props.history.push("/customerloginorsignup");
  }

  registerOwner() {
    this.props.history.push("/businessloginorsignup");
  }

  render() {
    return (
      <AppWrapper>
          <h1> Welcome to the home page </h1>
          <button onClick={() => this.registerCustomer()}>
            Register or login as a Customer
          </button>
          <button onClick={() => this.registerOwner()}>
            Register or login as a business owner
          </button>
        </AppWrapper>
    );
  }
}

export default connect(
  null,
  null
)(Homepage);
