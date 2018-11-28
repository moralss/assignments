import * as actions from "../../actionTypes";

import axios from "axios";
// import { setAxiosHeader } from "../../auth";

const ownerRegisterUrl = "http://localhost:3003/businessownersign";
const loginInUrl = "http://localhost:3003/businessownerlogin";


export function registerBusinessOwner(details, history) {
    return async dispatch => {
      dispatch({ type: actions.LOADING_TRUE });
      try {
        let res = await axios.post(ownerRegisterUrl, { ...details });
        localStorage.setItem("authorization", res.data.token);
        dispatch({ type: actions.OWNER_AUTHENTICATED });
        history.push("/registerbusiness");
      } catch (e) {
        dispatch({ type: actions.OWNER_AUTHENTICATION_ERROR, payload: e });
      }
    };
  }
  
  export function loginBusinessOwner(details, history) {
    return async dispatch => {
      dispatch({ type: actions.LOADING_TRUE });
      try {
        let res = await axios.post(loginInUrl, { ...details });
        localStorage.setItem("authorization", res.data.token);
        dispatch({ type: actions.OWNER_AUTHENTICATED });
        history.push("/dashboard");
      } catch (e) {
        dispatch({ type: actions.OWNER_AUTHENTICATION_ERROR, payload: e });
      }
    };
  }
  