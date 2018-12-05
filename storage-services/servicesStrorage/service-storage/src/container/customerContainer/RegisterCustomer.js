import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import * as actions from "../../actions/customerActions/public";
import { connect } from "react-redux";
import { Form, Header, ButtonMedium } from "../../styles/register";
import renderInput from "../../component/Input";
import validate from "../../validations/registerCustomer";
import { checkIsAuthNav } from "../../utils/checkAuth";

class RegisterCustomer extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    checkIsAuthNav();
  }

  async handleFormSubmit(details) {
    await this.props.registerCustomer(details, this.props.history);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <Header> Register for account. </Header>
        <Form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <Field
            label="Email"
            name="email"
            component={renderInput}
            type="text"
            placeholder="email"
          />

          <Field
            label="User Name"
            name="userName"
            component={renderInput}
            type="text"
          />

          <Field
            label="Password"
            name="password"
            component={renderInput}
            type="password"
          />

          <Field
            label="Confirm Password"
            name="confirmPassword"
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
    registerCustomer: (details, history) =>
      dispatch(actions.registerCustomer(details, history))
  };
}

const currretForm = reduxForm({
  form: "registerCustomer",
  validate
})(RegisterCustomer);

export default connect(
  null,
  mapDispatchToProps
)(currretForm);
