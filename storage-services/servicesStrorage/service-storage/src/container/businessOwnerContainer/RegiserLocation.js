import React, { Component } from "react";
import "../../App.css";
import { Field, reduxForm } from "redux-form";
import * as actions from "../../actions/businessOwner";
import { connect } from "react-redux";
import { Header, Form, ButtonMedium } from "../../styles/register";
import renderInput from "../component/Input";

class RegisterLocation extends Component {
  constructor() {
    super();
  }

  async handleFormSubmit(details) {
    const id = Number(this.props.match.params.id);
    let locationInfo = { ...details, id };
    await this.props.saveLocationToServer(locationInfo, this.props.history);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <Header> Register a location </Header>
        <Form
          className="form"
          onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
        >
          <Field
            name="city"
            component={renderInput}
            type="text"
            label="city"
            placeholder="city"
          />

          <Field
            name="state"
            component={renderInput}
            label="state"
            type="text"
            placeholder="state"
          />

          <Field
            name="street"
            label="street"
            component={renderInput}
            type="text"
            placeholder="street"
          />

          <ButtonMedium disabled={this.props.invalid} type="submit">
            submit
          </ButtonMedium>
        </Form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    saveLocationToServer: (details, history) =>
      dispatch(actions.saveLocationToServer(details, history))
  };
}

function validate(value) {
  let error = {};

  if (!value.city) {
    error.city = "city is required";
  }

  if (!value.state) {
    error.state = "state is required";
  }

  if (!value.street) {
    error.street = "street is required";
  }

  return error;
}

const registerLocation = reduxForm({
  form: "registerLocation",
  validate
})(RegisterLocation);

export default connect(
  null,
  mapDispatchToProps
)(registerLocation);
