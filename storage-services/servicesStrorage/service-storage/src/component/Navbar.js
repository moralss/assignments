import React, { Component } from "react";
import { NavLink } from "react-router-dom";


class Navbar extends Component {
  render() {
    let activeStyles = {
      color: "blue",
      textDecoration: "none"
    };

    return (
      <div className="navbar">
        <NavLink to="/registerbusiness" class="link-tag" activeStyle={activeStyles}>
          register business
        </NavLink>

        <NavLink to="/dashboard" class="link-tag" activeStyle={activeStyles}>
          dashboard
        </NavLink>
      </div>
    );
  }
}

export default Navbar;
