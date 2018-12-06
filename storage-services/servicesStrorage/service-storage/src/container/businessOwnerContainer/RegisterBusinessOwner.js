import React, { Component } from "react";
import "../../App.css";
import { Field, reduxForm } from "redux-form";
import * as actions from "../../actions/businessOwner/public";
import { connect } from "react-redux";
import renderInput from "../../component/Input";
import { ErrorSpan ,ButtonMedium, Form, Header } from "../../styles/register";
import validate from "../../validations/registerCustomer";
import { checkIsAuthNav } from "../../utils/checkAuth";

class RegisterBusinessOwner extends Component {
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
    await this.props.registerBusinessOwner(details, this.props.history);
  }

  render() {
    const { handleSubmit } = this.props;
    const { errors } = this.state;
    console.log(this.props.errors);
    return (
      <div>
        <Header> Sign up as a Customer </Header>
        <Form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <Field
            name="email"
            label="Email"
            component={renderInput}
            type="text"
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
            name="password"
            label="Password"
            component={renderInput}
            type="password"
          />
          <ErrorSpan> {errors.password}</ErrorSpan>

          <Field
            name="confirmPassword"
            label="Confirm Password"
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
    registerBusinessOwner: (details, history) =>
      dispatch(actions.registerBusinessOwner(details, history))
  };
}

function mapStateToProps(state) {
  return {
    errors: state.businessOwnerAuth.errors
  };
}

const currretForm = reduxForm({
  form: "registerBusinessOwner",
  validate
})(RegisterBusinessOwner);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(currretForm);
