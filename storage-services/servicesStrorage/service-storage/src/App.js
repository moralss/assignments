import React, { Component } from "react";
import "./App.css";
import { makeMainRoutes } from "./routes/routes";
import store from "./config/store";
import * as actions from "./actionTypes";


const businessOwner = localStorage.getItem("businessOwner");
if (businessOwner) {
  store.dispatch({ type: actions.OWNER_AUTHENTICATED });
}



class App extends Component {


  render() {
    const route = makeMainRoutes();

    return <div>{route}</div>;
  }
}

export default App;
