import React, { Component } from "react";
import "../../App.css";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import * as actions from "../../actions/customerActions/public";
import renderInput from "../../component/Input";
import { Form, ButtonMedium, Header, ErrorSpan } from "../../styles/register";
import { checkIsAuthNav } from "../../utils/checkAuth";

class CustomerLogin extends Component {
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
    await this.props.loginCustomer(details);
  }

  render() {
    const { handleSubmit } = this.props;
    const { errors } = this.state;
    return (
      <div>
        <Header> Login as a Customer </Header>
        <Form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <Field
            name="email"
            label="Email"
            component={renderInput}
            type="text"
          />
          <ErrorSpan> {errors.email}</ErrorSpan>

          <Field
            name="password"
            label="Password"
            component={renderInput}
            type="password"
          />
          <ErrorSpan> {errors.password}</ErrorSpan>

          <ButtonMedium type="submit">submit</ButtonMedium>
        </Form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loginCustomer: details => dispatch(actions.loginCustomer(details))
  };
}

function mapStateToProps(state) {
  return {
    errors: state.customerAuth.errors
  };
}

const currretForm = reduxForm({
  form: "loginCustomer"
})(CustomerLogin);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(currretForm);
