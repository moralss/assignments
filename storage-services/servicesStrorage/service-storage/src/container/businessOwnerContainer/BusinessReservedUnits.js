import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/businessOwner";
import "../../App.css";
import RegisterBlock from "./RegisterBlock";
import { Info, Header } from "../../styles/register";
import { ButtonContainer, ButtonSmall } from "../../styles/register";

class BusinessInfo extends Component {
  constructor() {
    super();
    this.state = {
      blockName: "",
      isInput: false,
      locationId: 0
    };
  }

  render() {
    return (
      <div>
        <Header>Business Units</Header>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    locations: state.business.businessLocations,
    blocks: state.business.block
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getBusinessInfo: name => dispatch(actions.getBusinessInfo(name))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessInfo);
