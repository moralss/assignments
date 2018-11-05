import React, { Component } from "react";
import "../App.css";
import { Field, reduxForm } from "redux-form";
import * as actions from "../actions";
import { connect } from "react-redux";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      isShowSuccessMessage: false
    };
  }

  async handleFormSubmit(details) {
    console.log('b')
    await this.props.saveBusinessDetails(details);
    console.log('c')
    this.setState({ isShowSuccessMessage: true });
  }


  componentWillUnmount(){
    this.setState({ isShowSuccessMessage: false });
    
  }


  render() {
    const { handleSubmit } = this.props;
    console.log('props save business', this.props)

    return (
      <div>
        {!this.state.isShowSuccessMessage ? 
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
        </form> : <h1> view darshboard , to view business and add locations!</h1>
      }
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    saveBusinessDetails: details => dispatch(actions.saveBusinessDetails(details))
  };
}

const currretForm = reduxForm({
  form: "registerBusiness"
})(Form);

export default connect(
  null,
  mapDispatchToProps
)(currretForm);
