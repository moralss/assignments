import React from "react";
import RegisterBusiness from "../container/businessOwnerContainer/RegisterBusiness";
import Dashboard from "../container/businessOwnerContainer/Dashboard";
import { Router, Route, Redirect } from "react-router-dom";
import RegisterLocation from "../container/businessOwnerContainer/RegiserLocation";
import BusinessInfo from "../container/businessOwnerContainer/BusinessInfo";
import Blocks from "../container/businessOwnerContainer/Blocks";
import HomePage from "../container/HomePage";
import Navbar from "../container/Navbar";
import RegisterOwner from "../container/businessOwnerContainer/RegisterBusinessOwner";
import BusinessLoginOrSignup from "../container/businessOwnerContainer/BusinessLoginOrSignup";
import LoginOwner from "../container/businessOwnerContainer/LoginFormOwner";
import RegisterCustomer from "../container/customerContainer/RegisterCustomer";
import CustomerLoginOrSignup from "../container/customerContainer/CustomerLoginOrSignup";
import BusinessUnites from "../container/customerContainer/BusinessUnites";
import CustomerLogin from "../container/customerContainer/CustomerLogin";
import history from "../history/index";
import CustomerReservedUnits from "../container/customerContainer/CustomerReseverdUnits";
import {
  PrivateRouteCustomer,
  PrivateRouteBusinessOwner
} from "./privateRoutes";


export const makeMainRoutes = () => {
  return (
    <Router history={history}>
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

        <PrivateRouteCustomer
          path="/businessunites"
          exact
          strict
          render={props => <BusinessUnites {...props} />}
        />

        <PrivateRouteCustomer
          exact
          path="/reservedunits"
          render={props => <CustomerReservedUnits {...props} />}
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

        <PrivateRouteBusinessOwner
          exact
          path="/registerbusiness"
          render={props => <RegisterBusiness {...props} />}
        />

        <PrivateRouteBusinessOwner
          path="/businessinfo/:name"
          exact
          strict
          render={props => <BusinessInfo {...props} />}
        />

        <PrivateRouteBusinessOwner
          path="/dashboard"
          exact
          strict
          render={props => <Dashboard {...props} />}
        />

        <PrivateRouteBusinessOwner
          path="/registerLocation/:id"
          exact
          strict
          render={props => <RegisterLocation {...props} />}
        />

        <PrivateRouteBusinessOwner
          path="/blocks/:id"
          exact
          strict
          render={props => <Blocks {...props} />}
        />
      </div>
    </Router>
  );
};
