import React, { Component } from "react";
// import "../../App.css";
import { Field, reduxForm } from "redux-form";
import * as actions from "../../actions/businessOwner/public";
import { connect } from "react-redux";
import renderInput from "../component/Input";
import { Header ,Form, ButtonMedium } from "../../styles/register";

class LoginFormOwner extends Component {
  constructor() {
    super();
  }

  async handleFormSubmit(details) {
    await this.props.loginBusinessOwner(details, this.props.history);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <Header> Login in </Header>
        <Form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <Field
            name="email"
            label="email"
            component={renderInput}
            type="text"
          />
          <Field
            name="password"
            label="password"
            component={renderInput}
            type="text"
          />
          <ButtonMedium disabled={this.props.invalid}> submit </ButtonMedium>
        </Form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loginBusinessOwner: (details, history) =>
      dispatch(actions.loginBusinessOwner(details, history))
  };
}

const currretForm = reduxForm({
  form: "loginBusinessOwner"
})(LoginFormOwner);

export default connect(
  null,
  mapDispatchToProps
)(currretForm);
