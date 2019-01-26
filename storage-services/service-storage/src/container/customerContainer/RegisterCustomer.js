import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import * as actions from "../../actions/customerActions/public";
import { connect } from "react-redux";
import { Form, Header, ButtonMedium, ErrorSpan } from "../../styles/register";
import renderInput from "../../component/Input";
import validate from "../../validations/registerCustomer";
import { checkIsAuthNav } from "../../utils/checkAuth";

class RegisterCustomer extends Component {
  constructor() {
    super();
    this.state = {
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  componentDidMount() {
    checkIsAuthNav();
  }

  async handleFormSubmit(details) {
    await this.props.registerCustomer(details, this.props.history);
  }

  render() {
    const { handleSubmit } = this.props;
    const { errors } = this.state;
    return (
      <div>
        <Header> Sign up as a Customer </Header>
        <Form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <Field
            label="Email"
            name="email"
            component={renderInput}
            type="text"
            placeholder="email"
          />
          <ErrorSpan> {errors.email}</ErrorSpan>

          <Field
            label="User Name"
            name="userName"
            component={renderInput}
            type="text"
          />
          <ErrorSpan> {errors.userName}</ErrorSpan>

          <Field
            label="Password"
            name="password"
            component={renderInput}
            type="password"
          />
          <ErrorSpan> {errors.password}</ErrorSpan>

          <Field
            label="Confirm Password"
            name="confirmPassword"
            component={renderInput}
            type="password"
          />
          <ErrorSpan> {errors.confirmPassword}</ErrorSpan>

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

function mapStateToProps(state) {
  return {
    errors: state.customerAuth.errors
  };
}

const currretForm = reduxForm({
  form: "registerCustomer",
  validate
})(RegisterCustomer);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(currretForm);
