import React, { Component } from "react";
import "../../App.css";
import * as actions from "../../actions/customerActions";
import * as normalActions from "../../actions";
import { connect } from "react-redux";

class DisplaySearchResults extends Component {
  constructor() {
    super();
  }

  async purchase(unitId) {
    await this.props.purchaseUnit(unitId);
  }

  componentWillUnmount() {
    this.props.clearSearchResults();
  }

  render() {
    const { searchResults } = this.props;

    return (
      <div style={{ textAlign: "center" }}>
        {searchResults.map(result => {
          return (
            <div>
              <ul style={{ display: "inline-block", textAlign: "center" }}>
                <li> Business name : {result.business_name} </li>
                <li> Business email : {result.contact_email} </li>
                <li> Phone numbers : {result.contact_number} </li>
                <li> City : {result.city} </li>
                <li> State : {result.state} </li>
                <li> Street : {result.street} </li>
                <li> Block Name : {result.block_name} </li>
                <li> unit type : {result.unit_type_name} </li>
                <li> height : {result.height} m </li>
                <li> width : {result.width} m </li>
                <li> length : {result.length} m </li>
                <button onClick={() => this.purchase(result.id)}>
                  Reserve a unit type
                </button>
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchResults: state.customer.customerSearchResults
  };
}

function mapDispatchToProps(dispatch) {
  return {
    purchaseUnit: details => dispatch(actions.purchaseUnit(details)),
    clearSearchResults: () => dispatch(normalActions.clearSearchResults())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplaySearchResults);
