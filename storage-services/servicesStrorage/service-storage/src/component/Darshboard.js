import React, { Component } from "react";
import * as actions from "../actions";
import { connect } from "react-redux";
import BusinessInfo from "../component/BusinessInfo.jsx";
import { Link } from "react-router-dom";

class Darshboard extends Component {
  constructor() {
    super();
    this.state = {
      isBusinessShow: false,
      isShowInfo: false,
      selectedBusiness: false
    };
  }

  showInfo(business) {
    this.setState({ isShowInfo: true });
    this.setState({ selectedBusiness: business });
  }

  componentWillMount() {
    this.props.getBusinessFromServer();
  }

  rigisterLocation(id) {
    this.props.history.push(`/registerLocation/${id}`);
  }

  showBusiness() {
    this.setState({ isBusinessShow: true });
  }

  render() {
    return (
      <div className="App">
        <h1> Welcome to my darshboard </h1>
        <button onClick={() => this.showBusiness()}> Show business </button>

        {this.state.isBusinessShow
          ? this.props.businessInfo.businessInfo[0].map(business => {
              return (
                <div>
                  <div>
                    business , {business.name}

                    <button onClick={() => this.showInfo(business)}> business info </button>
                    <button onClick={() => this.rigisterLocation(business.id)}> add location </button>
                  </div>
                  {this.state.selectedBusiness.name === business.name ? (
                    <Link to={`businessinfo/${business.name}`}> Click to view more info </Link>
                  ) : null}
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

{
  /*
                <button onClick={() => this.rigisterLocation(business.id)}>
                Save Location{" "}
              */
}
