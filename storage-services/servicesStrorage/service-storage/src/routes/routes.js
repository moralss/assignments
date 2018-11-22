import React from "react";
import RegisterBusiness from "../container/businessOwnerContainer/RegisterBusiness";
import Dashboard from "../container/businessOwnerContainer/Dashboard";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import RegisterLocation from "../container/businessOwnerContainer/RegiserLocation";
import BusinessInfo from "../container/businessOwnerContainer/BusinessInfo";
import Blocks from "../container/businessOwnerContainer/Blocks";
import HomePage from "../container/HomePage";
import Navbar from "../container/Navbar";
import RegisterOwner from "../container/businessOwnerContainer/RegisterBusinessOwner";
import BusinessLoginOrSignup from "../container/businessOwnerContainer/BusinessLoginOrSignup";
import LoginOwner from "../container/businessOwnerContainer/LoginFormOwner";
import store from "../config/store";
import RegisterCustomer from "../container/customerContainer/RegisterCustomer";
import CustomerLoginOrSignup from "../container/customerContainer/CustomerLoginOrSignup";
import BusinessUnites from "../container/customerContainer/BusinessUnites";
import CustomerLogin from "../container/customerContainer/CustomerLogin";

import * as actions from "../actionTypes";

const businessOwner = localStorage.getItem("businessOwner");
console.log("this has ran")
if (businessOwner) {
  store.dispatch({ type: actions.OWNER_AUTHENTICATED });
}


const PrivateRoute = ({ component: Component, ...rest }) => {
  let authenticated = store.getState().businessOwnerAuth.authenticated;
console.log("(authenticated", authenticated);

  return (
    <Route
      {...rest}
      render={props =>
        authenticated ? <Route {...rest} /> : <Redirect to="/" />
      }
    />
  );
};


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

        <Route
          path="/customerloginorsignup"
          exact
          strict
          render={props => <CustomerLoginOrSignup {...props} />}
        />

        <Route
          path="/businessunites"
          exact
          strict
          render={props => <BusinessUnites {...props} />}
        />

        <Route
          path="/registercustomer"
          exact
          strict
          render={props => <RegisterCustomer {...props} />}
        />

        <Route
          path="/customerlogin"
          exact
          strict
          render={props => <CustomerLogin {...props} />}
        />

        <PrivateRoute
          exact
          path="/registerbusiness"
          render={props => <RegisterBusiness {...props} />}
        />

        <PrivateRoute
          path="/businessinfo/:name"
          exact
          strict
          render={props => <BusinessInfo {...props} />}
        />

        <PrivateRoute
          path="/dashboard"
          exact
          strict
          render={props => <Dashboard {...props} />}
        />

        <PrivateRoute
          path="/registerLocation/:id"
          exact
          strict
          render={props => <RegisterLocation {...props} />}
        />

        <PrivateRoute
          path="/blocks/:id"
          exact
          strict
          render={props => <Blocks {...props} />}
        />
      </div>
    </Router>
  );
};
