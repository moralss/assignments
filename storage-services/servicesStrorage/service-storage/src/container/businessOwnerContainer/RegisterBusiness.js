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
    await this.props.saveBusinessDetails(details, this.props.history);
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props;

    return (
      <div>
        <Header> Register Business</Header>
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
            label="email"
            component={renderInput}
            type="text"
          />
          <ErrorSpan> {this.props.errors.email}</ErrorSpan>

          <ButtonMedium disabled={pristine || submitting} type="submit">
            Submit
          </ButtonMedium>
        </Form>
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

function mapStateToProps(state) {
  return { errors: state.errors };
}

const currretForm = reduxForm({
  form: "registerBusiness",
  validate
})(registerBusiness);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(currretForm);
