import React, { Component } from "react";
import "../../App.css";
import * as actions from "../../actions/customerActions";
import * as normalActions from "../../actions";
import { connect } from "react-redux";
import { SideBar, ButtonSmall } from "../../styles/register";

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
      <div>
        {searchResults.map(result => {
          return (
            <div style={{ display: "grid", justifyContent: "center" }}>
              <SideBar>
                <label> Business name : </label>
                <span> {result.business_name} </span>
                <label> Business email : </label>
                <span> {result.contact_email} </span>
                <label> Phone numbers : </label>
                <span> {result.contact_number} </span>
                <label> City : </label>
                <span>{result.city} </span>
                <label> State : </label>
                <span>{result.state} </span>
                <label> Street : </label>
                <span>{result.state} </span>
                <label> Block Name :</label>
                <span> {result.block_name} </span>
                <label> unit_name :</label>
                <span> {result.unit_name} </span>
                <label> Unit type :</label>
                <span> {result.unit_type_name} </span>
                <label> Height :</label>
                <span> {result.height} meters </span>
                <label> Width :</label>
                <span> {result.width} meters </span>
                <label> Length :</label>
                <span> {result.length} meters </span>
              </SideBar>

              <ButtonSmall
                style={{ textAlign: "center" }}
                onClick={() => this.purchase(result.id)}
              >
                Reserve a unit type
              </ButtonSmall>
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
