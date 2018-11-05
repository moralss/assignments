import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import "../App.css";

class BusinessInfo extends Component {
  constructor() {
    super();
    this.state = {
      blockName: "",
      isInput: false,
      id: 0
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
    this.setState({ id: id });
    !this.state.isInput
      ? this.setState({ isInput: true })
      : this.setState({ isInput: false });
  };

  ViewBlocks(id) {
    console.log("id" , id);
    this.props.history.push(`/blocks/${id}`);
  }



  enterPressed = event => {
    const { blockName, id } = this.state;
    let details = { blockName, id };
    if (event.key === "Enter") {
      this.props.saveBlockToServer(details);
      this.setState({ isInput: false, blockName: "" });
    }
  };

  render() {
    if (!this.props.storage_info) {
      return <div>Loading</div>;
    }
    return (
      <div>
        <label> Current locations </label>
        <span> number of locations {this.props.storage_info.length}</span>

        {this.props.storage_info.map(object => {
          return (
            <div>
              <ul style={{ display: "inline-block" }}>
                <li> city : {object.city} </li>
                <li> street : {object.street} </li>
                <li> state : {object.state} </li>
                
              <button onClick={() => this.ViewBlocks(object.id)}>View Blocks</button>
                <button onClick={() => this.addBlock(object.id)}>
                  add block name
                </button>
              </ul>
            </div>
          );
        })}

        {this.state.isInput && (
          <div className="block-area">
            <label> block Name </label>
            <input
              value={this.state.blockName}
              name="blockName"
              onChange={e => this.handleChange(e)}
              onKeyPress={event => this.enterPressed(event)}
            />
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    storage_info: state.business.businessFullInfo,
    blocks: state.business.block
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getBusinessInfo: name => dispatch(actions.getBusinessInfo(name)),
    saveBlockToServer: details => dispatch(actions.saveBlockToServer(details))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessInfo);
