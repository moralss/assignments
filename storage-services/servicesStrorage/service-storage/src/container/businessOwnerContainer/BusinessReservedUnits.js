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
                <li> Customer Name : {object.user_name} </li>
                <li> Customer Email : {object.email} </li>
                <li> Province : {object.province} </li>
                <li> State : {object.state} </li>
                <li> Street : {object.street} </li>
                <li> Block name : {object.block_name} </li>
                <li> Unit name : {object.unit_name} m </li>
                <li> Unit type : {object.unit_type_name} </li>
                <li> Height : {object.height} m </li>
                <li> Width : {object.width} m </li>
                <li> Length : {object.length} m </li>
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
