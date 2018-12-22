import React, { Component } from "react";
import "../../App.css";
import * as actions from "../../actions/customerActions";
import { connect } from "react-redux";
import { SideBar, Header } from "../../styles/register";

class CustomerReservedUnits extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.props.getReservedUnits();
  }

  render() {
    const { reservedUnits } = this.props;

    return (
      <div style={{ textAlign: "center" }}>
        <Header> Current Reserved Units {reservedUnits.length}</Header>

        {reservedUnits.map(element => {
          return (
            <div style={{ display: "grid", justifyContent: "center" }}>
              <SideBar>
                <label> Business name :</label>
                <span> {element.business_name} </span>
                <label> Business email :</label>
                <span> {element.contact_email} </span>
                <label> Phone numbers :</label>
                <span> {element.contact_number} </span>
                <label> City :</label>
                <span>{element.city} </span>
                <label> State :</label>
                <span>{element.state} </span>
                <label> Street :</label>
                <span>{element.state} </span>
                <label> Block Name :</label>
                <span> {element.block_name} </span>
                <label> Unit name :</label>
                <span> {element.unit_name} </span>
                <label> Unit type :</label>
                <span> {element.unit_type_name} </span>
                <label> Height :</label>
                <span> {element.height} meters </span>
                <label> Width :</label>
                <span> {element.width} meters </span>
                <label> Length :</label>
                <span> {element.length} meters </span>
              </SideBar>
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
