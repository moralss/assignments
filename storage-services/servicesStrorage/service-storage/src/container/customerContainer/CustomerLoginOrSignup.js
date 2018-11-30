import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NavBar, Header } from "../../styles/register";

class CustomerLoginOrSignup extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <NavBar>
          <ul>
            <li>
              <a href="">
                <Link to="/registercustomer" class="link-tag">
                  sign up
                </Link>
              </a>
            </li>
            <li>
              <a href="">
                <Link to="/customerlogin" class="link-tag">
                  login
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
