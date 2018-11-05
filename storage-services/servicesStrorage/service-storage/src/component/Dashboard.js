import React, { Component } from "react";
import * as actions from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.fetchBusiness();
  }
  
  async fetchBusiness(){
    await this.props.getBusinessFromServer();
  
  }

  rigisterLocation(id) {
    this.props.history.push(`/registerLocation/${id}`);
  }

  render() {

    console.log("business info :" , this.props.businessInfo.businessInfo);
    if (!this.props.businessInfo.businessInfo) {
      return <div>Loading</div>;
    }

    return (
      <div className="App">
       
 


        <h1> Welcome to your dashboard </h1>    
        {this.props.businessInfo.businessInfo.map(business => {
          return (
            <div>
              <div>
                business , {business.name}
                <Link to={`businessinfo/${business.name}`}>
                  Click to view more info
                </Link>
    
                <button onClick={() => this.rigisterLocation(business.id)}>
                  add location
                </button>
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
)(Dashboard);

