import React, { Component } from "react";
import "../../App.css";
import { Field, reduxForm } from "redux-form";
import * as actions from "../../actions/businessOwner";
import { connect } from "react-redux";
import { Form , ButtonMedium } from "../../styles/register";
import renderInput from "../../component/Input";
import validate from "../../validations/registerUnit";

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
    const { handleSubmit } = this.props;

    return (
      <div>
        {!this.state.isSuccessful ? (
          <Form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <Field
              label="Unit name"
              name="unitName"
              component={renderInput}
              type="text"
            />

            <Field
              label="Unit type"
              name="unitType"
              component={renderInput}
              type="text"
            />

            <Field
              label="Length"
              name="length"
              component={renderInput}
              type="text"
            />

            <Field
              label="Width"
              name="width"
              component={renderInput}
              type="text"
            />

            <Field
              label="Height"
              name="height"
              component={renderInput}
              type="text"
            />

            <ButtonMedium disabled={this.props.invalid} type="submit" > submit </ButtonMedium>
          </Form>
        ) : (
          <div> Successfully Submited </div>
        )}
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
  form: "registerUnitType",
  validate
})(RegisterUnitType);

export default connect(
  null,
  mapDispatchToProps
)(registerUnitType);
