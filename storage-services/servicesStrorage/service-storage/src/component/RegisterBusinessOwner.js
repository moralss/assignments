import React, { Component } from "react";
import "../App.css";
import { Field, reduxForm } from "redux-form";
import * as actions from "../actions";
import { connect } from "react-redux";

class RegisterBusinessOwner extends Component {
  constructor() {
    super();
  }

  async handleFormSubmit(details) {
    // console.log("sign up details" , details);
    await this.props.registerBusinessOwner(details, this.props.history);
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
    console.log("login form", this.props.history);
    return (
      <div>
        <h1> sign up </h1>
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
    registerBusinessOwner: (details, history) =>
      dispatch(actions.registerBusinessOwner(details, history))
  };
}

const currretForm = reduxForm({
  form: "registerBusinessOwner"
})(RegisterBusinessOwner);

export default connect(
  null,
  mapDispatchToProps
)(currretForm);
