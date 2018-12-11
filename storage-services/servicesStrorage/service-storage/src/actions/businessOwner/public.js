import * as actions from "../../actionTypes";
import history from "../../history";
import axios from "axios";

const ownerRegisterUrl = "http://localhost:3003/businessownersign";
const loginInUrl = "http://localhost:3003/businessownerlogin";

export function logOut() {
  return dispatch => {
    dispatch({
      type: actions.OWNER_AUTHENTICATED,
      payload: false
    });

    dispatch({
      type: actions.CUSTOMER_AUTHENTICATED,
      payload: false
    });

    localStorage.clear();
    history.push("/");
  };
}

export function registerBusinessOwner(details) {
  return async dispatch => {
    dispatch({ type: actions.LOADING_TRUE });
    try {
      let res = await axios.post(ownerRegisterUrl, { ...details });
      dispatch({ type: actions.OWNER_AUTHENTICATED, payload: true });
      localStorage.setItem("authorization", res.data.token);
      history.push("/registerbusiness");
    } catch (e) {
      console.log(e.response.data);
      dispatch({
        type: actions.OWNER_AUTHENTICATION_ERROR,
        payload: e.response.data.errors
      });
    }
  };
}

export function loginBusinessOwner(details) {
  return async dispatch => {
    dispatch({ type: actions.LOADING_TRUE });
    try {
      let res = await axios.post(loginInUrl, { ...details });
      dispatch({ type: actions.OWNER_AUTHENTICATED, payload: true });
      localStorage.setItem("authorization", res.data.token);
      history.push("/dashboard");
    } catch (e) {
      dispatch({
        type: actions.OWNER_AUTHENTICATION_ERROR,
        payload: e.response.data
      });
    }
  };
}
