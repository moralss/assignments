import React, { Component } from "react";
import "../App.css";
import { Field, reduxForm } from "redux-form";
import * as actions from "../actions";
import { connect } from "react-redux";

class RegisterLocation extends Component {
  constructor() {
    super();

    this.state = {
      isShowSuccessMessage:true
    };
  }

  handleFormSubmit(details) {
    // this.props.history.push("/darshboard");
    const id =  Number(this.props.match.params.name);
    console.log(id);

    let locationInfo = {...details , id}
    this.props.saveLocationToServer(locationInfo);
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
          <label>city</label>
          <Field
            name="city"
            component="input"
            type="text"
            placeholder="city"
          />

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
        </form> : <h1> view darshboard to view business and add locations !</h1>
      }
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

export default connect(
  null,
  mapDispatchToProps
)(registerLocation);
