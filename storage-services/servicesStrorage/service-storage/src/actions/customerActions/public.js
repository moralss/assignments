import * as actions from "../../actionTypes";
import axios from "axios";

const customerLoginUrl = "http://localhost:3003/customerlogin";
const customerSignUpUrl = "http://localhost:3003/customersign";

export function registerCustomer(details, history) {
  return async dispatch => {
    dispatch({ type: actions.LOADING_TRUE });
    try {
      let res = await axios.post(customerSignUpUrl, { ...details });
      localStorage.setItem("authorization", res.data.token);
      dispatch({ type: actions.CUSTOMER_AUTHENTICATED, payload: true });
      history.push("/businessunites");
    } catch (e) {
      dispatch({
        type: actions.CUSTOMER_AUTHENTICATION_ERROR,
        payload: e.response.data.errors
      });
    }
  };
}

export function loginCustomer(details, history) {
  return async dispatch => {
    dispatch({ type: actions.LOADING_TRUE });
    try {
      let res = await axios.post(customerLoginUrl, { ...details });
      localStorage.setItem("authorization", res.data.token);
      dispatch({ type: actions.CUSTOMER_AUTHENTICATED, payload: true });
      history.push("/businessunites");
    } catch (e) {
      dispatch({ type: actions.CUSTOMER_AUTHENTICATION_ERROR, payload: e });
    }
  };
}


