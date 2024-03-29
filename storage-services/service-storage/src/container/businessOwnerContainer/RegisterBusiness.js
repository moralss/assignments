import React, { Component } from "react";
import "../../App.css";
import { Field, reduxForm } from "redux-form";
import * as actions from "../../actions/businessOwner/index";
import { connect } from "react-redux";
import { ErrorSpan, Form, ButtonMedium, Header } from "../../styles/register";
import renderInput from "../../component/Input";
import validate from "../../validations/registerBusiness";

class registerBusiness extends Component {
  constructor() {
    super();
  }

  async handleFormSubmit(details) {
    await this.props.saveBusinessDetails(details);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <Header> Register a Business</Header>
        <Form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <Field
            name="businessName"
            label="Business name"
            component={renderInput}
            type="text"
          />
          <ErrorSpan> {this.props.errors.businessName}</ErrorSpan>

          <Field
            name="phoneNumbers"
            label="Phone number"
            component={renderInput}
            type="text"
          />
          <ErrorSpan> {this.props.errors.phoneNumbers}</ErrorSpan>

          <Field
            name="email"
            label="Email"
            component={renderInput}
            type="text"
          />
          <ErrorSpan> {this.props.errors.email}</ErrorSpan>

          <ButtonMedium action="submit"> submit </ButtonMedium>
        </Form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    saveBusinessDetails: (details) =>
      dispatch(actions.saveBusinessDetails(details))
  };
}

function mapStateToProps(state) {
  return { errors: state.errors.businessRegister };
}

const currretForm = reduxForm({
  form: "registerBusiness",
  validate
})(registerBusiness);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(currretForm);
