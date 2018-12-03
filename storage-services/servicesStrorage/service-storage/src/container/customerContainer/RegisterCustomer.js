import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import * as actions from "../../actions/customerActions/public";
import { connect } from "react-redux";
import { Form, Header, ButtonMedium } from "../../styles/register";
import renderInput from "../../component/Input";

class RegisterCustomer extends Component {
  constructor() {
    super();
  }

  async handleFormSubmit(details) {
    await this.props.registerCustomer(details, this.props.history);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <Header> Register an account. </Header>
        <Form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <Field
            label="Email"
            name="email"
            component={renderInput}
            type="text"
            placeholder="email"
          />

          <Field
            label="Password"
            name="password"
            component={renderInput}
            type="text"
            placeholder="email"
          />

          <ButtonMedium action="submit"> submit </ButtonMedium>
        </Form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    registerCustomer: (details, history) =>
      dispatch(actions.registerCustomer(details, history))
  };
}

const currretForm = reduxForm({
  form: "registerCustomer"
})(RegisterCustomer);

export default connect(
  null,
  mapDispatchToProps
)(currretForm);
