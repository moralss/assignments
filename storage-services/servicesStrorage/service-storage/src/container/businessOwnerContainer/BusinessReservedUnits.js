import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/businessOwner";
import "../../App.css";
import { Info, Header } from "../../styles/register";
// import { ButtonContainer, ButtonSmall } from "../../styles/register";

class BusinessInfo extends Component {
  constructor() {
    super();
    this.state = {
      blockName: "",
      isInput: false,
      locationId: 0
    };
  }

  componentDidMount() {
    this.props.getBusinessReservedUnits();
  }

  render() {
    const { businessReservedUnits } = this.props;
    return (
      <div>
        <Header>Business Units</Header>
        <span>Currently {businessReservedUnits.length} reserved units .</span>

        {businessReservedUnits.map(object => {
          return (
            <div>
              <div style={{ display: "grid", justifyContent: "center" }}>
                <Info>
                  <label> City </label>
                  <span> {object.city} </span>
                  <label> Street </label>
                  <span> {object.street} </span>
                  <label> State </label>
                  <span> {object.state} </span>
                </Info>
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
    businessReservedUnits: state.business.businessReservedUnits
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getBusinessReservedUnits: () => dispatch(actions.getBusinessReservedUnits())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessInfo);
