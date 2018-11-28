import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/businessOwner";
import "../../App.css";
import RegisterBlock from "./RegisterBlock";
import { Info, Header } from "../../styles/register";
import { ButtonContainer, ButtonSmall } from "../../styles/register";

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
        <Header>number of locations ({this.props.locations.length})</Header>

        {this.props.locations.map(object => {
          return (
            <div>
              <div style={{border:"0.1px solid"}}>
                <Info>
                  <label> City </label>
                  <span> {object.city} </span>
                  <label> Street </label>
                  <span> {object.street} </span>
                  <label> State </label>
                  <span> {object.state} </span>
                </Info>

                <ButtonContainer>
                  <ButtonSmall onClick={() => this.ViewBlocks(object.id)}>
                    View Blocks
                  </ButtonSmall>
                  <ButtonSmall onClick={() => this.addBlock(object.id)}>
                    Add block 
                  </ButtonSmall>
                </ButtonContainer>
              </div>
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
