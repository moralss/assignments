import React, { Component } from "react";
import * as actions from "../../actions/businessOwner";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Header, ButtonMedium , Grid, DashboardContainer } 
from "../../styles/register";

class Dashboard extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.fetchBusiness();
  }

  async fetchBusiness() {
    await this.props.getBusiness();
  }

  rigisterLocation(id) {
    this.props.history.push(`/registerLocation/${id}`);
  }

  render() {
    if (!this.props.businessInfo) {
      return <div>Loading</div>;
    }

    return (
      <div className="App">
        <Header> Welcome to your dashboard </Header>

        <DashboardContainer>
          {this.props.businessInfo.map(business => {
            return (
              <Grid>
                <label>Business name : {business.business_name}</label>

                {/* <a href="#"> */}
                  <Link to={`businessinfo/${business.business_name}`}>More info</Link>
                {/* </a> */}

                <ButtonMedium
                  onClick={() => this.rigisterLocation(business.id)}
                >
                  add location
                </ButtonMedium>
              </Grid>
            );
          })}
        </DashboardContainer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    businessInfo: state.business.businessInfo
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getBusiness: () => dispatch(actions.getBusiness())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
