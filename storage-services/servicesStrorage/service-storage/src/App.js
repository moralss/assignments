import React, { Component } from "react";
import "./App.css";
import RegisterBusiness from "./component/RegisterBusiness";
import Dashboard from "./component/Dashboard";
import { BrowserRouter as Router, Route } from "react-router-dom";
import RegisterLocation from "./component/RegiserLocation";
import BusinessInfo from "./component/BusinessInfo";
import Blocks from "./component/Blocks";
import RegisterCustomer from "./component/RegisterCustomer";
import HomePage from "./component/HomePage";
import Navbar from "./component/Navbar";
import RegisterOwner from "./component/RegisterBusinessOwner";
import BusinessLoginOrSignup from "./component/BusinessLoginOrSignup";
import LoginOwner from "./component/LoginFormOwner";
import store from "./config/store";

const businessOwner = localStorage.getItem("businessOwner");
if (businessOwner) {
  store.dispatch({ type: "OWNER_AUTHENTICATED" });
}else {
  this.history()
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route
            path="/"
            exact
            strict
            render={props => <HomePage {...props} />}
          />
          <Route
            path="/registerowner"
            exact
            strict
            render={props => <RegisterOwner {...props} />}
          />

          <Route
            path="/loginowner"
            exact
            strict
            render={props => <LoginOwner {...props} />}
          />

          <Route
            path="/businessloginorsignup"
            exact
            strict
            render={props => <BusinessLoginOrSignup {...props} />}
          />

          <Route
            path="/registerbusiness"
            exact
            strict
            render={props => <RegisterBusiness {...props} />}
          />
          <Route
            path="/registercustomer"
            exact
            strict
            render={props => <RegisterCustomer {...props} />}
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
