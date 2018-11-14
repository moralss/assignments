import * as actions from '../../actionTypes';
import axios from "axios";

let businessOwnerToken = localStorage.getItem("businessOwner");
axios.defaults.headers.common["authorization"] = businessOwnerToken;

const ownerRegisterUrl = "http://localhost:3003/businessownersign";
const loginInUrl = "http://localhost:3003/businessownerlogin";


export function registerCustomer(details, history) {
    return async dispatch => {
      dispatch({ type: actions.LOADING_TRUE });
      try {
        let res = await axios.post(ownerRegisterUrl, { ...details });
        history.push("/registerbusiness");
        localStorage.setItem("businessOwner", res.data.token);
        dispatch({ type: actions.OWNER_AUTHENTICATED });
      } catch (e) {
        dispatch({ type: actions.OWNER_AUTHENTICATION_ERROR, payload: e });
      }
    };
  }
  
  export function loginCustomer(details, history) {
    return async dispatch => {
      dispatch({ type: actions.LOADING_TRUE });
      try {
        let res = await axios.post(loginInUrl, { ...details });
        history.push("/dashboard");
        localStorage.setItem("businessOwner", res.data.token);
        dispatch({ type: actions.OWNER_AUTHENTICATED });
      } catch (e) {
        dispatch({ type: actions.OWNER_AUTHENTICATION_ERROR, payload: e });
      }
    };
  }
  