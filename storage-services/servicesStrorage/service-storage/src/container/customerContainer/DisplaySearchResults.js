import React, { Component } from "react";
import "../../App.css";
import * as actions from "../../actions/customerActions";
import { connect } from "react-redux";

class DisplaySearchResults extends Component {
  constructor() {
    super();
  }

  async purchase(unitId) {
    await this.props.purchaseUnit(unitId);
  }

  render() {
    const { searchResults } = this.props;

    return (
      <div style={{ textAlign: "center" }}>
        <h1> Search results </h1>
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
    purchaseUnit: details => dispatch(actions.purchaseUnit(details))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplaySearchResults);
