import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class BusinessInfo extends Component {
  constructor() {
    super();
    this.state = {
      display: false,
      address: []
    };
  }

  componentDidMount() {
    const businessName = this.props.match.params.name;
    // console.log("BusinessInfothis", this.props.match.params);
    this.props.getBusinessInfo(businessName);
    this.updateState();
  }

  updateState() {
    let setInt = setInterval(() => {
      this.setState({ address: this.props.business[0] });
      clearInterval(setInt);
    }, 1000);
  }

  render() {
    console.log("txk", this.state.address);
    return (
      <div>
        <h1> Hello World! </h1>

        <label> current locations </label>

        {this.state.address.map(object => {
          return (
            <div>
              <span> city : {object.city} </span>
              <span> state : {object.state} </span>
              <span> street : {object.street} </span>              
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    business: state.business.businessFullInfo
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
