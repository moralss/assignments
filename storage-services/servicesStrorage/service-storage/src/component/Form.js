import React, { Component } from "react";
import "../App.css";
import { Field, reduxForm } from "redux-form";
import * as actions from "../actions";
import { connect } from "react-redux";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      isShowSuccessMessage: true
    };
  }

  handleFormSubmit(details) {
    this.props.saveDetails(details);
    this.props.history.push("/darshboard");
    // this.setState({ isShowSuccessMessage: true });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        {this.state.isShowSuccessMessage ? 
        
        <form
          className="form"
          onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
        >
          <label>business name</label>
          <Field
            name="businessName"
            component="input"
            type="text"
            placeholder="business name"
          />

          <label>phone number</label>
          <Field
            name="phoneNumbers"
            component="input"
            type="text"
            placeholder="phone numbers"
          />

          <label>email </label>
          <Field
            name="email"
            component="input"
            type="text"
            placeholder="email"
          />

          <button action="submit"> submit </button>
        </form> : <h1> view darshboard to view business and add locations !</h1>
      }
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    saveDetails: details => dispatch(actions.BusinessDetails(details)),
    getBusinessFromServer: () => dispatch(actions.getBusinessFromServer())
  };
}

const currretForm = reduxForm({
  form: "registerBusiness"
})(Form);

export default connect(
  null,
  mapDispatchToProps
)(currretForm);
