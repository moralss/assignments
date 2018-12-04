import React, { Component } from "react";
import "../../App.css";
import * as actions from "../../actions/businessOwner";
import { connect } from "react-redux";
import {Info , Header2} from "../../styles/register"

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

        <Header2> Number of unit types {unitTypes.length} </Header2>
        {unitTypes.map(unitType => {
          return (
            <Info>
                <label> unit name </label>
                <span> {unitType.unit_name} </span>
                <label> unit type name </label>
                <span> {unitType.unit_type_name} </span>
                <label> unit length </label>
                <span> {unitType.length} </span>
                <label> unit type width</label>
                <span> {unitType.width} </span>
                <label> unit type height</label>
                <span> {unitType.height} </span>
            </Info>
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
