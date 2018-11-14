import React, { Component } from "react";
import "../../App.css";
import { Field, reduxForm } from "redux-form";
import * as actions from "../../actions";
import { connect } from "react-redux";


class Form extends Component {
  constructor() {
    super();
  }

  async handleFormSubmit(details) {
    await this.props.saveBusinessDetails(details, this.props.history);
  }

  renderInput = ({ input, meta, label }) => {
    return (
      <div>
        <label>{label}</label>
        <input {...input} placeholder={label} />
        {meta.error && meta.touched ? (
          <span style={{ color: "red" }}> {meta.error}</span>
        ) : (
          <span> </span>
        )}
      </div>
    );
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <form
          className="form"
          onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
        >
          <Field
            name="businessName"
            label="business name"
            component={this.renderInput}
            type="text"
          />

          <Field
            name="phoneNumbers"
            label="Phone number"
            component={this.renderInput}
            type="text"
          />

          <Field
            name="email"
            label="email"
            component={this.renderInput}
            type="text"
          />

          <input disabled={this.props.invalid} type="submit" />
        </form>
      </div>
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
})(Form);

export default connect(
  null,
  mapDispatchToProps
)(currretForm);
