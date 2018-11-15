import React, { Component } from "react";
import "../../App.css";
import SearchBar from "./SearchBar";
import DisplaySearchResults from "./DisplaySearchResults";

class BusinessUnits extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <SearchBar />
        <DisplaySearchResults />
      </div>
    );
  }
}

export default BusinessUnits;
