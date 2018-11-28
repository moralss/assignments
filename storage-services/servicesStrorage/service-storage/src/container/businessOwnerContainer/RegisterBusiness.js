import React, { Component } from "react";
import "../../App.css";
import { Field, reduxForm } from "redux-form";
import * as actions from "../../actions/businessOwner/index";
import { connect } from "react-redux";
import { Button, Form, ButtonMedium } from "../../styles/register";
import renderInput from "../component/Input";

class registerBusiness extends Component {
  constructor() {
    super();
  }

  async handleFormSubmit(details) {
    await this.props.saveBusinessDetails(details, this.props.history);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <Form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <Field
          name="businessName"
          label="Business name"
          component={renderInput}
          type="text"
        />

        <Field
          name="phoneNumbers"
          label="Phone number"
          component={renderInput}
          type="text"
        />

        <Field name="email" label="email" component={renderInput} type="text" />

        <ButtonMedium disabled={this.props.invalid} type="submit">
          Submit
        </ButtonMedium>
      </Form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    saveBusinessDetails: (details, history) =>
      dispatch(actions.saveBusinessDetails(details, history))
  };
}

function validate(value) {
  let error = {};

  if (!value.businessName) {
    error.businessName = "business name required";
  }

  if (!value.phoneNumbers) {
    error.phoneNumbers = "phone number required";
  }

  if (!value.email) {
    error.email = "email required";
  }

  if (!validateEmail(value.email) && value.email) {
    error.email = "invalid email required";
  }

  return error;
}

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const currretForm = reduxForm({
  form: "registerBusiness",
  validate
})(registerBusiness);

export default connect(
  null,
  mapDispatchToProps
)(currretForm);
