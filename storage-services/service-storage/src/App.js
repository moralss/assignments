import React, { Component } from "react";
import "./App.css";
import { makeMainRoutes } from "./routes/routes";
import store from "./config/store";
import * as actions from "./actionTypes";
import { GlobalStyle } from "./styles/register";

class App extends Component {
  render() {
    let value = localStorage.getItem("businessOwner");
    if (value) {
      store.dispatch({ type: actions.OWNER_AUTHENTICATED });
    }

    let authenticated = store.getState().businessOwnerAuth.authenticated;

    const route = makeMainRoutes();
    return (
      <div>
        <GlobalStyle />
        {makeMainRoutes()}
      </div>
    );
  }
}

export default App;
