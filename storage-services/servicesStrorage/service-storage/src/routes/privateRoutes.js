import React from "react";
import * as actions from "../actionTypes";
import jwtDecode from "jwt-decode";
import store from "../config/store";
import { Router, Route, Redirect } from "react-router-dom";

const token = localStorage.getItem("authorization");

// export const determineAuthentication = () => {
let decodedToken;

if (token) {
  decodedToken = jwtDecode(token);

  if (decodedToken.authority === "customer") {
    store.dispatch({
      type: actions.CUSTOMER_AUTHENTICATED,
      payload: true
    });
  }

  if (decodedToken.authority === "business-owner") {
    store.dispatch({ type: actions.OWNER_AUTHENTICATED, payload: true });
  }
}

if (!token) {
  store.dispatch({ type: actions.OWNER_AUTHENTICATED, payload: false });
  store.dispatch({ type: actions.CUSTOMER_AUTHENTICATED, payload: false });
}

export const PrivateRouteCustomer = ({ component: Component, ...rest }) => {
  let authenticated = store.getState().customerAuth.authenticated;

  return (
    <Route
      {...rest}
      render={props =>
        authenticated ? <Route {...rest} /> : <Redirect to="/" />
      }
    />
  );
};

export const PrivateRouteBusinessOwner = ({
  component: Component,
  ...rest
}) => {
  let authenticated = store.getState().businessOwnerAuth.authenticated;

  return (
    <Route
      {...rest}
      render={props =>
        authenticated ? <Route {...rest} /> : <Redirect to="/" />
      }
    />
  );
};
