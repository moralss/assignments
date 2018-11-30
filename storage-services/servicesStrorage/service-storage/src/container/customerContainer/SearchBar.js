import React, { Component } from "react";
import "../../App.css";
import { Field, reduxForm } from "redux-form";
import * as actions from "../../actions/customerActions";
import { connect } from "react-redux";
import {
  SelectField,
  listOfProvinces,
  listOfUnits
} from "../../component/selectInput";

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
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <Field label="Province" component={SelectField}>
            <option />
            {listOfProvinces.map(province => {
              return <option value={province}> {province} </option>;
            })}
            >
          </Field>

          <Field label="Unit Types" component={SelectField}>
          <option />
            {listOfUnits.map(unit => {
              return <option value={unit}> {unit} </option>;
            })}
          </Field>

          <button type="submit"> submit</button>
        </form>
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
