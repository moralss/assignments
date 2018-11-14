import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export default function(ComposedComponent) {
  class Authentication extends Component {
    componentDidMount() {
      if (!this.props.ownerAuth) {
        this.props.history.push("/");
        console.log("value", this.props.history);
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.ownerAuth) {
        this.props.history.push("/");
        console.log("value", this.props.history);
      }
    }

    PropTypes = {
      router: PropTypes.object
    };

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { ownerAuth: state.businessOwnerAuth.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}
