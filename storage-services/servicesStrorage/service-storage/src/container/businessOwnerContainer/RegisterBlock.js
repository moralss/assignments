import React, { Component } from "react";
import "../../App.css";
import { Field, reduxForm } from "redux-form";
import * as actions from "../../actions";
import { connect } from "react-redux";

class RegisterBlock extends Component {
  constructor() {
    super();
    this.state = {
      isSuccessful: false
    };
  }

  async handleFormSubmit(details) {
    let locationId = this.props.locationId;
    let data = { ...details, locationId };
    await this.props.saveBlockToServer(data);
    this.setState({ isSuccessful: true });
  }

  componentWillUnmount() {
    this.setState({ isSuccessful: false });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        {!this.state.isSuccessful ? (
          <form
            className="form"
            onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
          >
            <label>block name</label>
            <Field
              name="blockName"
              component="input"
              type="text"
              placeholder="enter block"
            />

            <button action="submit"> submit block </button>
          </form>
        ) : (
          " Successfully submitted"
        )}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    saveBlockToServer: details => dispatch(actions.saveBlockToServer(details))
  };
}

const registerBlock = reduxForm({
  form: "registerBlock"
})(RegisterBlock);

export default connect(
  null,
  mapDispatchToProps
)(registerBlock);
