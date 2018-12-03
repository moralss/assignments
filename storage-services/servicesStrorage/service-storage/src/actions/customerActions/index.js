import * as actions from "../../actionTypes";
import axios from "axios";
import { setAxiosHeader } from "../../auth";
import history from "../../history";
let customerToken = localStorage.getItem("customer");
axios.defaults.headers.common["authorizationc"] = customerToken;

const customerSearchTerm = "http://localhost:3003/searchunittype/";
const purchaseUrl = "http://localhost:3003/purchaseunit";
const reservedUnitsUrl = "http://localhost:3003/reservedunits";


export function searchForUnitType(data) {
  console.log("data", data);

  return async dispatch => {
    dispatch({ type: actions.LOADING_TRUE });
    try {
      let res = await axios.get(customerSearchTerm, {
        params: {
          ...data
        }
      });
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
      history.push("/reservedunits");
    } catch (e) {
      dispatch({ type: "PURCHASE_ERROR", payload: e });
    }
  };
}

export function getReservedUnits() {
  return async dispatch => {
    dispatch({ type: actions.LOADING_TRUE });
    try {
      let res = await axios.get(reservedUnitsUrl, setAxiosHeader());
      dispatch({ type: actions.RECEIVED_RESERVED_UNITS, payload: res.data });
      history.push("/reservedunits");
    } catch (e) {
      dispatch({ type: "PURCHASE_ERROR", payload: e });
    }
  };
}
