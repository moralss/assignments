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
      <div>
        <h1> Search results </h1>

        {searchResults.map(result => {
          return (
            <div>
              <ul style={{ display: "inline-block" }}>
                <li> city : {result.city} </li>
                <li> state : {result.state} </li>
                <li> street : {result.street} </li>
                <li> unit type : {result.name} </li>
                <li> height : {result.height} </li>
                <li> width : {result.width} </li>
                <li> length : {result.length} </li>
                <button onClick={() => this.purchase(result.id)}>
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
    purchaseUnit: details => dispatch(actions.purchaseUnit(details))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplaySearchResults);
