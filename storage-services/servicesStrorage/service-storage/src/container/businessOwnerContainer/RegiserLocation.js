import React, { Component } from "react";
import "../../App.css";
import { Field, reduxForm } from "redux-form";
import * as actions from "../../actions";
import { connect } from "react-redux";

class RegisterLocation extends Component {
  constructor() {
    super();
  }


  renderInput = ({ input, meta, label }) => {
    return (
      <div>
        <label>{label}</label>
        <input {...input} />
        {meta.error && meta.touched ? (
          <span style={{color:"red"}}> {meta.error}</span>
        ) : (
          <span> </span>
        )}
      </div>
    );
  };


  async handleFormSubmit(details) {
    const id = Number(this.props.match.params.id);
    let locationInfo = { ...details, id };
    await this.props.saveLocationToServer(locationInfo, this.props.history);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <form
          className="form"
          onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
        >
          <Field name="city"
           component={this.renderInput}
           type="text"
           label="city"
           placeholder="city" />

          <Field
            name="state"
            component={this.renderInput}
            label="state"
            type="text"
            placeholder="state"
          />

          <Field
            name="street"
            label="street"
            component={this.renderInput}
            type="text"
            placeholder="street"
          />

          <input disabled={this.props.invalid} type="submit" />
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    saveLocationToServer: (details, history) =>
      dispatch(actions.saveLocationToServer(details, history))
  };
}

function validate(value) {
  let error = {};

  if (!value.city) {
    error.city = "city is required";
  }

  if (!value.state) {
    error.state = "state is required";
  }

  if (!value.street) {
    error.street = "street is required";
  }

  return error;
}

const registerLocation = reduxForm({
  form: "registerLocation",
  validate
})(RegisterLocation);

export default connect(
  null,
  mapDispatchToProps
)(registerLocation);
