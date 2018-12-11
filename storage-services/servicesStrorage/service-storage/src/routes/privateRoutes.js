import React from "react";
import * as actions from "../actionTypes";
import jwtDecode from "jwt-decode";
import store from "../config/store";
import { Router, Route, Redirect } from "react-router-dom";

const token = localStorage.getItem("authorization");

const authenticatedUser = () => {
  let decodedToken;
  if (token) {
    decodedToken = jwtDecode(token);
    let currentDate = Date.now() / 1000;
    if (decodedToken.lat > currentDate) {
      store.dispatch({ type: actions.OWNER_AUTHENTICATED, payload: false });
      store.dispatch({ type: actions.CUSTOMER_AUTHENTICATED, payload: false });
      return;
    }

    if (decodedToken.authority === "customer") {
      store.dispatch({
        type: actions.CUSTOMER_AUTHENTICATED,
        payload: true
      });
      return;
    }

    if (decodedToken.authority === "business-owner") {
      store.dispatch({ type: actions.OWNER_AUTHENTICATED, payload: true });
    }
    return;
  }

  if (!token) {
    store.dispatch({ type: actions.OWNER_AUTHENTICATED, payload: false });
    store.dispatch({ type: actions.CUSTOMER_AUTHENTICATED, payload: false });
    return;
  }
};

authenticatedUser();

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
