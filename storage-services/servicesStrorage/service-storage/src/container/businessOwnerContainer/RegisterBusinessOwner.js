import React, { Component } from "react";
import "../../App.css";
import { Field, reduxForm } from "redux-form";
import * as actions from "../../actions/businessOwner/public";
import { connect } from "react-redux";
import renderInput from "../component/Input";
import { Button, Form } from "../../styles/register";

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
        <h1> sign up </h1>
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

          <Button
            disabled={this.props.invalid}
            onClick={this.handleFormSubmit.bind(this)}
          >
            submit
          </Button>
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
  form: "registerBusinessOwner"
})(RegisterBusinessOwner);

export default connect(
  null,
  mapDispatchToProps
)(currretForm);
