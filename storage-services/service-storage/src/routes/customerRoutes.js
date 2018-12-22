import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "../container/HomePage";
import Navbar from "../container/Navbar";
import RegisterOwner from "../container/RegisterBusinessOwner";
import BusinessLoginOrSignup from "../container/BusinessLoginOrSignup";
import LoginOwner from "../container/LoginFormOwner";

export const makeMainRoutes = () => {
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
      </div>
    </Router>
  );
};
