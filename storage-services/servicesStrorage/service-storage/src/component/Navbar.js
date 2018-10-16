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
          rigister business
        </NavLink>

        <NavLink to="/darshboard" class="link-tag" activeStyle={activeStyles}>
          darshboard
        </NavLink>
      </div>
    );
  }
}

export default Navbar;
