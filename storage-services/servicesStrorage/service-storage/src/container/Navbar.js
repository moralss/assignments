import React, { Component } from "react";
import { NavLink } from "react-router-dom";
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
              <NavLink to="/registerbusiness">Register business</NavLink>
            </a>
          </li>
          <li>
            <a href="">
              <NavLink to="/dashboard">Dashboard</NavLink>
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
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { ownerAuth: state.businessOwnerAuth.authenticated };
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
