import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/businessOwner";
import "../../App.css";
import { Info, Header, SideBar, HeaderMedium } from "../../styles/register";
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
        <HeaderMedium>Currently {businessReservedUnits.length} reserved units .</HeaderMedium>

        {businessReservedUnits.map(object => {
          return (
            <div>
              <div style={{ display: "grid", justifyContent: "center" }}>
                <SideBar>
                  <label> Customer Name </label>
                  <span> {object.user_name} </span>
                  <label> Customer Email </label>
                  <span> {object.email} </span>
                  <label> Province </label>
                  <span> {object.province} </span>
                  <label> State </label>
                  <span> {object.state} </span>
                  <label> Street </label>
                  <span> {object.street} </span>
                  <label> Block name </label>
                  <span> {object.block_name} </span>
                  <label> Unit name </label>
                  <span> {object.unit_name}  </span>
                  <label> Unit type </label>
                  <span> {object.unit_type_name} </span>
                  <label> Height </label>
                  <span> {object.height} meters </span>
                  <label> Width </label>
                  <span> {object.width} meters </span>
                  <label> Length </label>
                  <span> {object.length} meters </span>
                </SideBar>
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
