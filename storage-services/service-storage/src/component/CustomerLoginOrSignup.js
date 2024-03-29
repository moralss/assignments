import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NavBar, Header } from "../styles/register";
import { checkIsAuthNav } from "../utils/checkAuth";

class CustomerLoginOrSignup extends Component {
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
                <Link to="/registercustomer" class="link-tag">
                  Sign up
                </Link>
              </a>
            </li>
            <li>
              <a href="">
                <Link to="/customerlogin" class="link-tag">
                  Login
                </Link>
              </a>
            </li>
          </ul>
        </NavBar>

        <Header> Customer </Header>
      </div>
    );
  }
}

export default CustomerLoginOrSignup;
