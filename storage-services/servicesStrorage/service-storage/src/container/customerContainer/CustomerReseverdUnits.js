import React, { Component } from "react";
import "../../App.css";
import * as actions from "../../actions/customerActions";
import { connect } from "react-redux";
import { Info } from "../../styles/register";

class CustomerReservedUnits extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.props.getReservedUnits();
  }

  render() {
    console.log("reservedUnits", this.props.reservedUnits);

    return (
      <div style={{ textAlign: "center" }}>
        <h1> Current Reserved Units </h1>

        {this.props.reservedUnits.map(object => {
          return (
            <div style={{ display: "grid", justifyContent: "center" }}>
              <ul style={{ display: "inline-block", textAlign: "center" }}>
                <li> Business name : {object.business_name} </li>
                <li> Business email : {object.contact_email} </li>
                <li> Phone numbers : {object.contact_number} </li>
                <li> Province : {object.province} </li>
                <li> City : {object.city} </li>
                <li> State : {object.state} </li>
                <li> Street : {object.street} </li>
                <li> Block name : {object.block_name} </li>
                <li> unit type : {object.unit_type_name} </li>
                <li> height : {object.height} m </li>
                <li> width : {object.width} m </li>
                <li> length : {object.length} m </li>
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
    searchResults: state.customer.customerSearchResults,
    reservedUnits: state.customer.customerReservedUnits
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getReservedUnits: () => dispatch(actions.getReservedUnits())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerReservedUnits);
