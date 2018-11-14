import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import * as actions from "../../actions/customerActions/";
import { connect } from "react-redux";

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
        <h1> Register an account. </h1>
        <form
          className="form"
          onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
        >

          <label>email </label>
          <Field
            name="email"
            component="input"
            type="text"
            placeholder="email"
          />

          <label> password </label>
          <Field
            name="password"
            component="input"
            type="text"
            placeholder="email"
          />

          <button action="submit"> submit </button>
        </form>
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
