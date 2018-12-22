import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/businessOwner";
import "../../App.css";
import RegisterUnitType from "./RegisterUnitType";
import ShowUnitTypes from "./ShowUnitTypes";
import {
  Header,
  ButtonSmall,
  ButtonContainer,
  Header2
} from "../../styles/register";

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
            <Header>
              <span style={{ color: "#024242" }}> Number of blocks </span>
              <span style={{ color: "black" }}>{blocks.length}</span>
            </Header>
            {blocks.map(block => {
              return (
                <div>
                  <Header2>
                    <span style={{ color: "#024242" }}>Block name</span>
                    <span style={{ color: "black" }}> {block.block_name}</span>
                  </Header2>
                  <ButtonContainer>
                    <ButtonSmall onClick={() => this.addUnitType(block.id)}>
                      Register a Unit
                    </ButtonSmall>
                    <ButtonSmall onClick={() => this.viewUnitTypes(block.id)}>
                      View Units
                    </ButtonSmall>
                  </ButtonContainer>
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
