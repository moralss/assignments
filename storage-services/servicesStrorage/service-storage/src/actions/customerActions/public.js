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
      localStorage.setItem("authorization", res.data.token);
      dispatch({ type: actions.CUSTOMER_AUTHENTICATED });
      history.push("/businessunites");
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
