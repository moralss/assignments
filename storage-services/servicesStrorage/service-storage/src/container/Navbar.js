import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { connect } from "react-redux";
import { NavBar, ButtonPrimary } from "../styles/register";
import * as actions from "../actions/businessOwner/public";

class Navbar extends Component {
  LogOut() {
    this.props.logOut();
  }

  businessOwnerNav() {
    
    return (
      <NavBar>
        <ul>
          <li>
            <a href="">
              <Link to="/registerbusiness">Register business</Link>
            </a>
          </li>
          <li>
            <a href="">
              <Link to="/dashboard">Dashboard</Link>
            </a>
          </li>
          <li>
            <a href="">
              <Link to="/businessreservedunits">Reserved units</Link>
            </a>
          </li>

          <ButtonPrimary onClick={() => this.LogOut()}>Log out</ButtonPrimary>
        </ul>
      </NavBar>
    );
  }

  customerNav() {
    return (
      <NavBar>
        <ul>
          <li>
            <a href="">
              <Link to="/businessunites">Business units</Link>
            </a>
          </li>
          <li>
            <a href="">
              <Link to="/customerreservedunits">Reserved Units</Link>
            </a>
          </li>
          <ButtonPrimary onClick={() => this.LogOut()}>Log out</ButtonPrimary>
        </ul>
      </NavBar>
    );
  }

  render() {
    return (
      <div className="navbar">
        {this.props.ownerAuth ? this.businessOwnerNav() : null}
        {this.props.customerAuth ? this.customerNav() : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ownerAuth: state.businessOwnerAuth.authenticated,
    customerAuth: state.customerAuth.authenticated
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logOut: () => dispatch(actions.logOut())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
