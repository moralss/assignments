import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import { connect } from "react-redux";
import { NavBar } from "../styles/register";

class Navbar extends Component {
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

export default connect(
  mapStateToProps,
  null
)(Navbar);
