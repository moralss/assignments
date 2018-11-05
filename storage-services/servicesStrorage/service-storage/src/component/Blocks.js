import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import "../App.css";

class Blocks extends Component {
  constructor() {
    super();
    this.state = {
      blockName: "",
      isAddUnit: false,
      id: 0
    };
  }

  componentDidMount() {
    const locationId = this.props.match.params.id;
    this.props.getBlocks(locationId);
  }

  addUnitType(id) {
    !this.state.isAddUnit
      ? this.setState({ isAddUnit: true })
      : this.setState({ isAddUnit: false });
  }

  render() {
    console.log(this.props.blocks);

    if (!this.props.blocks) {
      return <div>Loading</div>;
    }

    return (
      <div>
        <h1> blocks </h1>
        {this.props.blocks.map(block => {
          return (
            <div>
              <li> {block.block_name}</li>
              <button onClick={() => this.addUnitType(block.id)}> </button>
            </div>
          );
        })}
        {this.state.isAddUnit ?
          <form>
            <label> name </label>
            <input />
            <label> length </label>
            <input />
            <label> width </label>
            <input />
            <label> height </label>
            <input /> 
          </form>: null
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    blocks: state.business.blocks
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getBlocks: id => dispatch(actions.getBlocks(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blocks);
