import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import * as actions from "../actions";

class Homepage extends Component {
  constructor() {
    super();
  }

  registerCustomer() {}

  registerOwner() {
    this.props.history.push("/businessloginorsignup");
  }

  render() {
    return (
      <div>
        <h1> Welcome to the home page </h1>
        <button onClick={this.registerCustomer()}>
          Register or login as a Customer
        </button>
        <button onClick={() => this.registerOwner()}>
          Register or login as a business owner
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  null
)(Homepage);
