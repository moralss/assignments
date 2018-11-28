import React, { Component } from "react";
import "../../App.css";
import { Field, reduxForm } from "redux-form";
import * as actions from "../../actions/businessOwner";
import { connect } from "react-redux";

class RegisterUnitType extends Component {
  constructor() {
    super();
    this.state = {
      isSuccessful: false
    };
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

  async handleFormSubmit(details) {
    let blockId = this.props.blockId;
    let unitTypeDetails = { ...details, blockId };
    this.props.saveUnitTypes(unitTypeDetails);
    this.setState({ isSuccessful: true });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div style={{ display: "inline-block" }}>
        {!this.state.isSuccessful ? (
          <form
            className="form"
            onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
          >
            <Field
              label="unit name"
              name="unitName"
              component={this.renderInput}
              type="text"
            />

            <Field
              label="unit type"
              name="unitType"
              component={this.renderInput}
              type="text"
            />

            <Field
              label="length"
              name="length"
              component={this.renderInput}
              type="text"
            />

            <Field
              label="width"
              name="width"
              component={this.renderInput}
              type="text"
            />

            <Field
              label="height"
              name="height"
              component={this.renderInput}
              type="text"
            />

            <input disabled={this.props.invalid} type="submit" />
          </form>
        ) : (
          <div> Successfully Submited </div>
        )}
      </div>
    );
  }
}

function validate(value) {
  let error = {};

  if (!value.unitName) {
    error.unitName = "unit name is required";
  }

  if (!value.unitType) {
    error.unitType = "unit type is required";
  }

  if (!value.width) {
    error.width = "width is required";
  }

  if (!value.length) {
    error.length = "length is required";
  }

  if (!value.height) {
    error.height = "height is required";
  }

  return error;
}

function mapDispatchToProps(dispatch) {
  return {
    saveUnitTypes: details => dispatch(actions.saveUnitTypes(details))
  };
}

const registerUnitType = reduxForm({
  form: "registerUnitType",
  validate
})(RegisterUnitType);

export default connect(
  null,
  mapDispatchToProps
)(registerUnitType);
