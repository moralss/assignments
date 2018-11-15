import React, { Component } from "react";
import "../../App.css";
import SearchBar from "./SearchBar";

class BusinessUnits extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <SearchBar />

        <label> Search term </label>
        <input name="searchTerm" value="" />
      </div>
    );
  }
}

export default BusinessUnits;
