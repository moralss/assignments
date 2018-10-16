import React, { Component } from "react";
import { Route, Router } from "react-router-dom";
import Form from "./component/Form";
import App from "./App.js";
<Router>
<div>

  <Route
    path="/users"
    exact
    strict
    render={props => <App> <Form {...props} /> </App>}
  />
</div>
</Router>
