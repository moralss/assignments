import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import FormBlock from "./FormBlock";

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

  // handleChange(e) {
  //   this.setState({ blockName: e.target.value });
  // }

  // addBlock = id => {
  //   this.setState({ id: id });
  //   this.setState({ isInput: true });
  // };

  // enterPressed = (event) => {

  //   const { blockName, id } = this.state;
  //   let details = { blockName, id };

  //   if (event.key === 'Enter') {
  //     this.props.saveBlockToServer(details);
  //     this.setState({ isInput: false });
  //     this.setState({blockName : ""});      
  //   }
    
  // }

  render() {
    if (!this.props.storage_info) {
      return <div>Loading</div>;
    }
    return (
      <div>
        <label> Current locations </label>
        <span> number of locations {this.props.storage_info.length}</span>
        {/* {this.props.storage_info.map(object => {
          return (
            <li> {object.city} {object.block_name}</li>
          )
        })} */}

        {this.props.storage_info.map(object => {
          return (
            <div>
              <select name="" id="">
                <option> city : {object.city} </option>
                <option> street : {object.street} </option>
                <option> state : {object.state} </option>
              </select>

              
              {/* <button onClick={() => this.addBlock(object.id)}>
                add block name
              </button> */}
            </div>
          );
        })}

        {/* {this.state.isInput && (
          <div>
            <label>  block Name </label>
            <input
              value={this.state.blockName}
              name="blockName"
              onChange={e => this.handleChange(e)}
              onKeyPress={(event) => this.enterPressed(event)}
            />
          </div>
        )} */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    storage_info: state.business.businessFullInfo
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
