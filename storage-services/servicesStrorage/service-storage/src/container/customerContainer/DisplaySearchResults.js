import React, { Component } from "react";
import "../../App.css";
import * as actions from "../../actions/customerActions";
import { connect } from "react-redux";

class DisplaySearchResults extends Component {
  constructor() {
    super();
  }


async purchase(unitId){
  await this.props.purchaseUnit(unitId);
    console.log(result);
  }


  render() {


    console.log("search results", this.props.searchResults);
    return (
      <div>
        <h1> Search results </h1>

        {this.props.searchResults.map(results => {
          return (
            <div>
              <ul style={{ display: "inline-block" }}>
                <li> unit type : {results.name} </li>
                <li> city : {results.city} </li>
                <li> state : {results.state} </li>
                <li> street : {results.street} </li>
                <li> height : {results.height} </li>
                <li> width : {results.width} </li>
                <li> length : {results.length} </li>
                <button onClick={() => this.purchase(results.id)}>
                  purchase unit type
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
    searchForUnitType: (details, history) =>
      dispatch(actions.searchForUnitType(details, history))
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplaySearchResults);
