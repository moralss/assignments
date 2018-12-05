import React, { Component } from "react";
import "../../App.css";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import * as actions from "../../actions/customerActions/public";
import renderInput from "../../component/Input";
import { Form, ButtonMedium, Header } from "../../styles/register";
import { checkIsAuthNav } from "../../utils/checkAuth";


class CustomerLogin extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    checkIsAuthNav();
  }


  async handleFormSubmit(details) {
    await this.props.loginCustomer(details, this.props.history);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <Header> Login in </Header>
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
    loginCustomer: (details, history) =>
      dispatch(actions.loginCustomer(details, history))
  };
}

const currretForm = reduxForm({
  form: "loginCustomer"
})(CustomerLogin);

export default connect(
  null,
  mapDispatchToProps
)(currretForm);
