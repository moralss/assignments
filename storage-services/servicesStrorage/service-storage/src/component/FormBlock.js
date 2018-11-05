import React, { Component } from "react";
import "../App.css";
import { Field, reduxForm } from "redux-form";
import * as actions from "../actions";
import { connect } from "react-redux";

class FormBlock extends Component {
  constructor() {
    super();

  }

  async handleFormSubmit(details) {
    // this.props.history.push("/darshboard");
    // const id = Number(this.props.match.params.id);
    // let locationInfo = { ...details, id };
    console.log(details);

    // await this.props.saveBlockToServer(locationInfo);
  }

  render() {
    const { handleSubmit } = this.props;

    console.log("this", this.props);

    return (
      <div>
        <form
          className="form"
          onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
        >
    
          <label>Block Name </label>
          <Field
            name="blockName"
            component="input"
            type="text"
            placeholder="block name"
          />

          <button action="submit"> submit Block </button>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    saveBlockToServer: details =>
      dispatch(actions.saveBlockToServer(details))
  };
}

const Form = reduxForm({
  form: "FormBlock"
})(FormBlock);

export default connect(
  null,
  mapDispatchToProps
)(Form);
