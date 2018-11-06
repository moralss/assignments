import React, { Component } from "react";
import "../App.css";
import { Field, reduxForm } from "redux-form";
import * as actions from "../actions";
import { connect } from "react-redux";

class RegisterLocation extends Component {
  constructor() {
    super();
  }

  async handleFormSubmit(details) {
    const id = Number(this.props.match.params.id);
    let locationInfo = { ...details, id };
    await this.props.saveLocationToServer(locationInfo);
    this.props.history.push(`/dashboard`);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <form
          className="form"
          onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
        >
          <label>city</label>
          <Field name="city" component="input" type="text" placeholder="city" />

          <label>state</label>
          <Field
            name="state"
            component="input"
            type="text"
            placeholder="state"
          />

          <label>street </label>
          <Field
            name="street"
            component="input"
            type="text"
            placeholder="street"
          />

          <button action="submit"> submit location </button>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    saveLocationToServer: details => dispatch(actions.saveLocationToServer(details))
  };
}

const registerLocation = reduxForm({
  form: "registerLocation"
})(RegisterLocation);

export default connect(null , mapDispatchToProps)(registerLocation);
