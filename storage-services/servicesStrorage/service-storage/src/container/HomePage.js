import React, { Component } from "react";
import "../App.css";
import { Header, Header2 } from "../styles/register";
import { Container, ButtonSmall, ButtonContainer } from "../styles/register";
import { checkIsAuthNav } from "../utils/checkAuth";

class Homepage extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    checkIsAuthNav()
  }

  registerCustomer() {
    this.props.history.push("/customerloginorsignup");
  }

  registerOwner() {
    this.props.history.push("/businessloginorsignup");
  }

  render() {
    return (
      <Container>
        <Header> Welcome to the home page </Header>
        <Header2 style={{ textAlign: "center" }}> Register or login </Header2>
        <ButtonContainer>
          <ButtonSmall onClick={() => this.registerCustomer()}>
            As a Customer
          </ButtonSmall>
          <ButtonSmall onClick={() => this.registerOwner()}>
            As a Business Owner
          </ButtonSmall>
        </ButtonContainer>
      </Container>
    );
  }
}


export default Homepage;
