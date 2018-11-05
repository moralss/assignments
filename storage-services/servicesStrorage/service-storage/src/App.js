import React, { Component } from "react";
import "./App.css";
import RegisterBusiness from "./component/RegisterBusiness";
import Navbar from "./component/Navbar";
import Dashboard from "./component/Dashboard";
import { BrowserRouter as Router, Route } from "react-router-dom";
import RegisterLocation from "./component/RegiserLocation";
import BusinessInfo from "./component/BusinessInfo";
import Blocks from "./component/Blocks";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route
            path="/registerbusiness"
            exact
            strict
            render={props => <RegisterBusiness {...props} />}
          />

          <Route
            path="/businessinfo/:name"
            exact
            strict
            render={props => <BusinessInfo {...props} />}
          />

          <Route
            path="/dashboard"
            exact
            strict
            render={props => <Dashboard {...props} />}
          />


          <Route
            path="/registerLocation/:id"
            exact
            strict
            render={props => <RegisterLocation {...props} />}
          />


          <Route
            path="/blocks/:id"
            exact
            strict
            render={props => <Blocks {...props} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
