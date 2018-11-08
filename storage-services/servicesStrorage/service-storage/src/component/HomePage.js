import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import * as actions from "../actions";

class Homepage extends Component {
  constructor() {
    super();
  }

  registerCustomer() {

}

  registerOwner() {

  }

  render() {
    return (
      <div>
        <h1> Welcome to the home page </h1>
        <button onClick={this.registerCustomer()}>
          Register as a Customer
        </button>
        <button onClick={this.registerOwner()}>
          Register as a business owner
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    registerCustomer: userType => dispatch(actions.registerCustomer(userType)),
    registerOwner: userType => dispatch(actions.registerOwner(userType))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Homepage);
