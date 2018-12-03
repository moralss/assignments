import React, { Component } from "react";
import "../../App.css";
import * as actions from "../../actions/customerActions";
import { connect } from "react-redux";

class CustomerReservedUnits extends Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1> Current Reserved Units </h1>

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
)(CustomerReservedUnits);
