import React, { Component } from "react";
import "../App.css";
import { Field, reduxForm } from "redux-form";
import * as actions from "../actions";
import { connect } from "react-redux";

class RegisterUnitType extends Component {
  constructor() {
    super();
  }

  async handleFormSubmit(details) {}

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <form
          className="form"
          onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
        >
          <label>name</label>
          <Field name="name" component="input" type="text" placeholder="name" />

          <label>length</label>
          <Field
            name="length"
            component="input"
            type="text"
            placeholder="length"
          />

          <label>width</label>
          <Field
            name="width"
            component="input"
            type="text"
            placeholder="width"
          />

          <label>height</label>
          <Field
            name="height"
            component="input"
            type="text"
            placeholder="height"
          />

          <button action="submit"> submit unit type </button>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    saveLocationToServer: details =>
      dispatch(actions.saveLocationToServer(details))
  };
}

const registerUnitType = reduxForm({
  form: "registerUnitType"
})(RegisterUnitType);

export default connect(
  null,
  mapDispatchToProps
)(registerUnitType);
