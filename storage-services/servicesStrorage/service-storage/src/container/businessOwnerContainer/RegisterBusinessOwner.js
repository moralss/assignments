import React, { Component } from "react";
import "../../App.css";
import { Field, reduxForm } from "redux-form";
import * as actions from "../../actions/businessOwner/public";
import { connect } from "react-redux";
import renderInput from "../../component/Input";
import { ButtonMedium, Form, Header } from "../../styles/register";
import validate from "../../validations/registerCustomer";

class RegisterBusinessOwner extends Component {
  constructor() {
    super();
  }

  async handleFormSubmit(details) {
    await this.props.registerBusinessOwner(details, this.props.history);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <Header> Sign up </Header>
        <Form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <Field
            name="email"
            label="Email"
            component={renderInput}
            type="text"
          />

          <Field
            label="User Name"
            name="userName"
            component={renderInput}
            type="text"
          />

          <Field
            name="password"
            label="Password"
            component={renderInput}
            type="password"
          />

          <Field
            name="confirmPassword"
            label="Confirm Password"
            component={renderInput}
            type="password"
          />

          <ButtonMedium action="submit"> submit </ButtonMedium>
        </Form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    registerBusinessOwner: (details, history) =>
      dispatch(actions.registerBusinessOwner(details, history))
  };
}

const currretForm = reduxForm({
  form: "registerBusinessOwner",
  validate
})(RegisterBusinessOwner);

export default connect(
  null,
  mapDispatchToProps
)(currretForm);
