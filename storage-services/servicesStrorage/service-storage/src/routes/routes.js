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
import CustomerLogin from "../container/customerContainer/CustomerLogin";

let authenticated = store.getState().businessOwnerAuth.authenticated;
console.log("(authenticated", authenticated);

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        !authenticated ? <Route {...rest} /> : <Redirect to="/" />
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
          path="/registercustomer"
          exact
          strict
          render={props => <RegisterCustomer {...props} />}
        />
        <Route
          path="/login"
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

        
        <Route
          exact
          path="/registerbusiness"
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
};
