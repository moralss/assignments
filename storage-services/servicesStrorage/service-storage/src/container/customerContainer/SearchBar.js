import React, { Component } from "react";
import "../../App.css";
import { Field, reduxForm } from "redux-form";
import * as actions from "../../actions/customerActions";
import { connect } from "react-redux";

class SearchBar extends Component {
  constructor() {
    super();
  }

  async handleFormSubmit(data) {
    await this.props.searchForUnitType(data.searchTerm);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <h1> Filter by:</h1>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <Field name="category" component="input" type="radio" value="city" />
          <label> City </label>
          <Field
            name="category"
            component="input"
            type="radio"
            value="province"
          />
          <label> Province </label>
          <Field
            name="category"
            component="input"
            type="radio"
            value="unitType"
          />
          <label> unit type </label>
          <label> Search term </label>
          <Field name="searchTerm" component="input" type="text" />
          <input type="submit" />
        </form>

        <input name="searchTerm" value="" />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    searchForUnitType: (details, history) =>
      dispatch(actions.searchForUnitType(details, history))
  };
}


function mapStateToProps(state) {
    return {
      searchResults: state.customer.customerSearchResults
    };
  }

const currretForm = reduxForm({
  form: "searchCategory"
})(SearchBar);

export default connect(
    mapStateToProps,
  mapDispatchToProps
)(currretForm);
