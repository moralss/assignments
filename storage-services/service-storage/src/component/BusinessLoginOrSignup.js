import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { NavBar, Header } from "../styles/register";
import { checkIsAuthNav } from "../utils/checkAuth";

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
                <NavLink to="/registerowner">Sign up</NavLink>
              </a>
            </li>
            <li>
              <a href="">
                <NavLink to="/loginowner">Login</NavLink>
              </a>
            </li>
          </ul>
        </NavBar>

        <Header> Business Owner </Header>
      </div>
    );
  }
}

export default BusinessLoginOrSignup;
