import React, { Component } from "react";
import "../../App.css";
import * as actions from "../../actions/businessOwner";
import { connect } from "react-redux";

class showUnitTypes extends Component {
  constructor() {
    super();
    this.state = {
      isSuccessful: false
    };
  }

  componentDidMount() {
    this.props.getUnitTypes(this.props.blockId);
  }

  render() {
    const { unitTypes } = this.props;
    return (
      <div>
        <h1> Unit Types </h1>
        <h1> number of unit types {unitTypes.length} </h1>
        {unitTypes.map(unitType => {
          return (
            <div style={{ border: "3px solid green" }}>
              <div>
                <label> unit name </label>
                <span> {unitType.unit_name} </span>
              </div>
              <div>
                <label> unit type name </label>
                <span> {unitType.name} </span>
              </div>
              <div>
                <label> unit length </label>
                <span> {unitType.length} </span>
              </div>
              <div>
                <label> unit type width</label>
                <span> {unitType.width} </span>
              </div>
              <div>
                <label> unit type height</label>
                <span> {unitType.height} </span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    unitTypes: state.business.unitTypes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUnitTypes: id => dispatch(actions.getUnitTypes(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(showUnitTypes);
