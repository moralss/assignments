import React, { Component } from "react";
import "../../App.css";
import { NavLink } from "react-router-dom";
import { NavBar, Header } from "../../styles/register";
import { checkIsAuthNav } from "../../utils/checkAuth";

class BusinessLoginOrSignup extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    checkIsAuthNav();
  }

  render() {
    return (
      <div>
        <NavBar>
          <ul>
            <li>
              <a href="">
                <NavLink to="/registerowner">sign up</NavLink>
              </a>
            </li>
            <li>
              <a href="">
                <NavLink to="/loginowner">login</NavLink>
              </a>
            </li>
          </ul>
        </NavBar>

        <Header> Business owner </Header>
      </div>
    );
  }
}

export default BusinessLoginOrSignup;
