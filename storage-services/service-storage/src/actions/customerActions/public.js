import * as actions from "../../actionTypes";
import axios from "axios";
import history from "../../history";


let url  = process.env.REACT_APP_API
 const customerLoginUrl = `${url}/customerlogin`;

const customerSignUpUrl = `${url}/customersign`;

export function registerCustomer(details) {
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

export function loginCustomer(details) {
  return async dispatch => {
    dispatch({ type: actions.LOADING_TRUE });
    try {
      let res = await axios.post(customerLoginUrl, { ...details });
      localStorage.setItem("authorization", res.data.token);
      dispatch({ type: actions.CUSTOMER_AUTHENTICATED, payload: true });
      history.push("/businessunites");
    } catch (e) {
      console.log("data" , e.response.data)
      dispatch({
        type: actions.CUSTOMER_AUTHENTICATION_ERROR,
        payload: e.response.data
      });
    }
  };
}
