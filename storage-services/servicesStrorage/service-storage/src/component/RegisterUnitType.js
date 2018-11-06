import React, { Component } from "react";
import "../App.css";
import { Field, reduxForm } from "redux-form";
import * as actions from "../actions";
import { connect } from "react-redux";

class RegisterUnitType extends Component {
  constructor() {
    super();
    this.state = {
      isSuccessful: false
    };
  }

  async handleFormSubmit(details) {
    let blockId = this.props.blockId;
    let unitTypeDetails = { ...details, blockId };
    this.props.saveUnitTypes(unitTypeDetails);
    this.setState({ isSuccessful: true });
  }

  render() {
    console.log(this.props.blockId);
    const { handleSubmit } = this.props;

    return (
      <div style={{ display: "inline-block" }}>
      {!this.state.isSuccessful ?
        <form
          className="form"
          onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
        >
          <label>unit name</label>
          <Field
            name="unitName"
            component="input"
            type="text"
            placeholder="unit Name"
          />

          <label>unit type</label>
          <Field
            name="unitType"
            component="input"
            type="text"
            placeholder="unit type"
          />

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
        </form> : <div> Successfully Submited </div>}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    saveUnitTypes: details => dispatch(actions.saveUnitTypes(details))
  };
}

const registerUnitType = reduxForm({
  form: "registerUnitType"
})(RegisterUnitType);

export default connect(
  null,
  mapDispatchToProps
)(registerUnitType);
