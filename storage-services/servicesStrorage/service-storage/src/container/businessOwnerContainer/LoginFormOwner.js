import React, { Component } from "react";
// import "../../App.css";
import { Field, reduxForm } from "redux-form";
import * as actions from "../../actions/businessOwner/public";
import { connect } from "react-redux";
import renderInput from "../../component/Input";
import { ErrorSpan, Header, Form, ButtonMedium } from "../../styles/register";
import { checkIsAuthNav } from "../../utils/checkAuth";
import validate from "../../validations/loginForm";

class LoginFormOwner extends Component {
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
    await this.props.loginBusinessOwner(details);
  }

  render() {
    const { handleSubmit } = this.props;
    const { errors } = this.state;

    return (
      <div>
        <Header> Login as a Business Owner </Header>
        <Form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <Field
            name="email"
            label="Email"
            component={renderInput}
            type="text"
          />
          <ErrorSpan>{errors.email} </ErrorSpan>

          <Field
            name="password"
            label="Password"
            component={renderInput}
            type="password"
          />

          <ErrorSpan>{errors.password} </ErrorSpan>

          <ButtonMedium type="action"> submit </ButtonMedium>
        </Form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    errors: state.businessOwnerAuth.errors
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loginBusinessOwner: details => dispatch(actions.loginBusinessOwner(details))
  };
}

const currretForm = reduxForm({
  form: "loginBusinessOwner"
})(LoginFormOwner);
validate;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(currretForm);
