import * as actions from "../../actionTypes";
import axios from "axios";

let customerToken = localStorage.getItem("customer");
axios.defaults.headers.common["authorizationc"] = customerToken;

const customerLoginUrl = "http://localhost:3003/customerlogin";
const customerSignUpUrl = "http://localhost:3003/customersign";

export function registerCustomer(details, history) {
  return async dispatch => {
    dispatch({ type: actions.LOADING_TRUE });
    try {
      let res = await axios.post(customerSignUpUrl, { ...details });
      history.push("/businessunites");
      localStorage.setItem("customer", res.data.token);
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
      history.push("/businessunites");
      localStorage.setItem("customer", res.data.token);
      dispatch({ type: actions.CUSTOMER_AUTHENTICATED });
    } catch (e) {
      dispatch({ type: actions.CUSTOMER_AUTHENTICATION_ERROR, payload: e });
    }
  };
}
