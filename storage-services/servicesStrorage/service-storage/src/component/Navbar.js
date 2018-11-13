import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import {connect} from 'react-redux';

class Navbar extends Component {
  businessOwnerNav() {
    
    return (
      <div>
        <NavLink
          to="/registerbusiness"
        >
          register business
        </NavLink>
        <NavLink to="/dashboard"  >
          dashboard
        </NavLink>
      </div>
    );
  }

  render() {
    return (
      <div className="navbar">
        {this.props.ownerAuth ? this.businessOwnerNav() : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { ownerAuth: state.businessOwnerAuth.authenticated };
}

export default connect(mapStateToProps, null)(Navbar);
