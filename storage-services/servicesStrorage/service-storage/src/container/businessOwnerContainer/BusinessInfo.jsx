import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import "../../App.css";
import RegisterBlock from "./RegisterBlock";

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
    const businessName = this.props.match.params.name;
    this.props.getBusinessInfo(businessName);
  }

  handleChange(e) {
    this.setState({ blockName: e.target.value });
  }

  addBlock = id => {
    this.setState({ locationId: id });
    !this.state.isInput
      ? this.setState({ isInput: true })
      : this.setState({ isInput: false });
  };

  ViewBlocks(id) {
    this.props.history.push(`/blocks/${id}`);
  }

  render() {
    if (!this.props.locations) {
      return <div>Loading</div>;
    }

    return (
      <div>
        <label> Current locations </label>
        <span> number of locations {this.props.locations.length}</span>

        {this.props.locations.map(object => {
          return (
            <div>
              <ul style={{ display: "inline-block" }}>
                <li> city : {object.city} </li>
                <li> street : {object.street} </li>
                <li> state : {object.state} </li>

                <button onClick={() => this.ViewBlocks(object.id)}>
                  View Blocks
                </button>
                <button onClick={() => this.addBlock(object.id)}>
                  add block name
                </button>
              </ul>
            </div>
          );
        })}

        {this.state.isInput && (
          <RegisterBlock locationId={this.state.locationId} />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    locations: state.business.businessLocations,
    blocks: state.business.block
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
