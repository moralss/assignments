import React, { Component } from "react";
import "../App.css";
import { Field, reduxForm } from "redux-form";
import * as actions from "../actions";
import { connect } from "react-redux";

class Form extends Component {
  constructor() {
    super();
  }

  async handleFormSubmit(details) {
    await this.props.saveBusinessDetails(details, this.props.history);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
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
    saveBusinessDetails: (details, history) =>
      dispatch(actions.saveBusinessDetails(details, history))
  };
}

const currretForm = reduxForm({
  form: "registerBusiness"
})(Form);

export default connect(
  null,
  mapDispatchToProps
)(currretForm);
