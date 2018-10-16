import React, { Component } from "react";
import * as actions from "../actions";
import { connect } from "react-redux";

class Darshboard extends Component {
  constructor() {
    super();
    this.state = {
      isBusinessShow: false
    };
  }

  componentWillMount() {
    this.props.getBusinessFromServer();
  }

  rigisterLocation(id){
      console.log("business id" , id);
      this.props.history.push(`/registerLocation/${id}`);
  }

  showBusiness() {
    this.setState({ isBusinessShow: true });
    console.log("business ", this.props.businessInfo.businessInfo[0]);
  }

  render() {
    console.log(this.props.businessInfo.businessInfo[0]);
    return (
      <div className="App">
        <h1> Welcome to my darshboard </h1>
        <button onClick={() => this.showBusiness()}> Show business </button>

        {this.state.isBusinessShow
          ? this.props.businessInfo.businessInfo[0].map(business => {
              return (
                <div>
                  {" "}
                  <li> {business.name} </li>{" "}
                  <button onClick={() => this.rigisterLocation(business.id)}>
                    {" "}
                    Save Location{" "}
                  </button>
                </div>
              );
            })
          : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    businessInfo: state.business
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getBusinessFromServer: () => dispatch(actions.getBusinessFromServer())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Darshboard);
