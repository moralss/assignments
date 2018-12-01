import * as actions from "../../actionTypes";
import axios from "axios";
import { setAxiosHeader } from "../../auth";

let customerToken = localStorage.getItem("customer");
axios.defaults.headers.common["authorizationc"] = customerToken;

const customerSearchTerm = "http://localhost:3003/searchunittype/";
const customerLoginUrl = "http://localhost:3003/customerlogin";
const customerSignUpUrl = "http://localhost:3003/customersign";
const purchaseUrl = "http://localhost:3003/purchaseunit";

export function registerCustomer(details, history) {
  return async dispatch => {
    dispatch({ type: actions.LOADING_TRUE });
    try {
      let res = await axios.post(customerSignUpUrl, { ...details });
      history.push("/businessunites");
      localStorage.setItem("authorization", res.data.token);
      dispatch({ type: actions.CUSTOMER_AUTHENTICATED });
    } catch (e) {
      dispatch({ type: actions.CUSTOMER_AUTHENTICATION_ERROR, payload: e });
    }
  };
}

export function loginCustomer(details, history) {
  return async dispatch => {
    dispatch({ type: actions.LOADING_TRUE });
    try {
      let res = await axios.post(customerLoginUrl, { ...details });
      localStorage.setItem("authorization", res.data.token);
      dispatch({ type: actions.CUSTOMER_AUTHENTICATED });
      history.push("/businessunites");
    } catch (e) {
      dispatch({ type: actions.CUSTOMER_AUTHENTICATION_ERROR, payload: e });
    }
  };
}

export function searchForUnitType(data) {
  return async dispatch => {
    dispatch({ type: actions.LOADING_TRUE });
    try {
      let res = await axios.get(customerSearchTerm  ,`${data}`);
      dispatch({
        type: actions.RECEVIED_CUSTOMER_SEARCH_RESULTS,
        payload: res.data
      });
    } catch (e) {
      dispatch({ type: "CUSTOMER_ERROR", payload: e });
    }
  };
}

export function purchaseUnit(unitId) {
  return async dispatch => {
    dispatch({ type: actions.LOADING_TRUE });
    try {
      await axios.post(purchaseUrl, { unitId }, setAxiosHeader());
      dispatch({ type: "PURCHASE_SUCCESFUL" });
    } catch (e) {
      dispatch({ type: "PURCHASE_ERROR", payload: e });
    }
  };
}
