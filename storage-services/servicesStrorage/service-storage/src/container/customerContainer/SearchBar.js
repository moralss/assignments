import React, { Component } from "react";
import "../../App.css";
import { Field, reduxForm } from "redux-form";
import * as actions from "../../actions/customerActions/index";
import { connect } from "react-redux";
import { Header, SearchForm, ButtonSmall } from "../../styles/register";
import { SelectField } from "../../component/selectInput";
import { listOfProvinces, listOfUnits } from "../../component/selectInput";

class SearchBar extends Component {
  constructor() {
    super();
  }

  componentWillUnmount() {}

  async handleFormSubmit(data) {
    await this.props.searchForUnitType(data);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <Header> Search for unitTypes </Header>

        <SearchForm onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <Field label="Province" name="province" component={SelectField}>
            <option />
            {listOfProvinces.map(province => {
              return <option value={province}> {province} </option>;
            })}
          </Field>

          <Field label="UnitTypes" name="unitType" component={SelectField}>
            <option />
            {listOfUnits.map(unit => {
              return <option value={unit}> {unit} </option>;
            })}
          </Field>

          <ButtonSmall type="submit"> Search </ButtonSmall>
        </SearchForm>
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
