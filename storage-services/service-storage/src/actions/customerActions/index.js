import * as actions from "../../actionTypes";
import axios from "axios";
import { setAxiosHeader } from "../../auth";
import history from "../../history";

let url  = process.env.REACT_APP_API


const customerSearchTerm = `${url}/searchunittype/`;
const purchaseUrl = `${url}/purchaseunit`;
const reservedUnitsUrl = `${url}/customerreservedunits`;

export function searchForUnitType(data) {
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
      history.push("/customerreservedunits");
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
      history.push("/customerreservedunits");
    } catch (e) {
      dispatch({ type: "PURCHASE_ERROR", payload: e });
    }
  };
}
