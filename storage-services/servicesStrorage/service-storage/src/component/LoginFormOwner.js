import React, { Component } from "react";
import "../App.css";
import { Field, reduxForm } from "redux-form";
import * as actions from "../actions";
import { connect } from "react-redux";

class LoginFormOwner extends Component {
  constructor() {
    super();
  }

  async handleFormSubmit(details) {
    await this.props.loginBusinessOwner(details, this.props.history);
  }

  renderInput = ({ input, meta, label }) => {
    return (
      <div>
        <label>{label}</label>
        <input {...input} placeholder={label} />
        {meta.error && meta.touched ? (
          <span style={{ color: "red" }}> {meta.error}</span>
        ) : (
          <span> </span>
        )}
      </div>
    );
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
          <h1> Login in </h1>
        <form
          className="form"
          onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
        >

          <Field
            name="email"
            label="email"
            component={this.renderInput}
            type="text"
          />

          <Field
            name="password"
            label="password"
            component={this.renderInput}
            type="text"
          />

          <input disabled={this.props.invalid} type="submit" />
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loginBusinessOwner: (details, history) =>
      dispatch(actions.loginBusinessOwner(details, history))
  };
}


const currretForm = reduxForm({
  form: "registerBusinessOwner"
})(LoginFormOwner);

export default connect(
  null,
  mapDispatchToProps
)(currretForm);
