import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import "../../App.css";
import RegisterUnitType from "./RegisterUnitType";
import ShowUnitTypes from "./ShowUnitTypes";

class Blocks extends Component {
  constructor() {
    super();
    this.state = {
      blockName: "",
      isAddUnit: false,
      isShowUnitType: false,
      blockId: 0
    };
  }

  componentDidMount() {
    const locationId = this.props.match.params.id;
    this.props.getBlocks(locationId);
  }

  viewUnitTypes(id) {
    if (!this.state.isShowUnitType) {
      this.setState({ isShowUnitType: true });
      this.setState({ isAddUnit: false });
    } else if (this.state.isShowUnitType) {
      this.setState({ isShowUnitType: false });
    }

    this.setState({ blockId: id });
  }

  addUnitType(id) {
    if (!this.state.isAddUnit) {
      this.setState({ isShowUnitType: false });
      this.setState({ isAddUnit: true });
    } else if (this.state.isAddUnit) {
      this.setState({ isAddUnit: false });
    }

    this.setState({ blockId: id });
  }

  render() {
    if (!this.props.blocks) {
      return <div>Loading</div>;
    }
    const { blocks } = this.props;

    return (
      <div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <div>
            <h1> Number of blocks for location {blocks.length}</h1>
            {blocks.map(block => {
              return (
                <div style={{ display: "block" }}>
                  <li> {block.block_name}</li>
                  <button onClick={() => this.addUnitType(block.id)}>
                    Register a Unit for current block
                  </button>
                  <button onClick={() => this.viewUnitTypes(block.id)}>
                    View Units and Unit Types for current block
                  </button>
                </div>
              );
            })}
          </div>
          <div>
            {this.state.isAddUnit ? (
              <RegisterUnitType blockId={this.state.blockId} />
            ) : null}

            {this.state.isShowUnitType ? (
              <ShowUnitTypes blockId={this.state.blockId} />
            ) : null}
          </div>
        </div>
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
