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
            <div style={{display:"grid" , justifyContent :"center"}}>
              <Info>
                <label> Block Name </label>
                <span> {object.block_name} </span>
                <label> City </label>
                <span> {object.city} </span>
                <label> Street </label>
                <span> {object.street} </span>
                <label> State </label>
                <span> {object.state} </span>
              </Info>
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
