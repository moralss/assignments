import * as actions from "../../actionTypes";
import axios from "axios";
import { setAxiosHeader } from "../../auth";
import history from "../../history";
const url = "http://localhost:3003/";

const businessReservedUnitsUrl = `${url}businessreservedunits`;
const businessUrl = `${url}business`;
const businessInfoUrl = `${url}businessinfo/`;
const locationUrl = `${url}location`;
const blockUrl = `${url}block/`;
const unitType = `${url}unittype`;
const unitTypeUrl = `${url}unittype/`;

// http get requests

export function getUnitTypes(id) {
  return async function(dispatch) {
    dispatch({ type: actions.LOADING_TRUE });
    let unitTypes = await axios.get(unitTypeUrl + `${id}`, setAxiosHeader());
    dispatch({ type: actions.RECEIVED_UNIT_TYPES, payload: unitTypes.data });
  };
}

export function getBlocks(id) {
  return async function(dispatch) {
    dispatch({ type: actions.LOADING_TRUE });
    let blocks = await axios.get(blockUrl + `${id}`, setAxiosHeader());
    dispatch({ type: actions.RECEIVED_BLOCK_INFO, payload: blocks.data });
  };
}

export function getBusinessInfo(name) {
  return async function(dispatch) {
    dispatch({ type: actions.LOADING_TRUE });
    let businessInfo = await axios.get(
      businessInfoUrl + `${name}`,
      setAxiosHeader()
    );
    dispatch({
      type: actions.RECEIVED_BUSINESS_LOCATION,
      payload: businessInfo.data
    });
  };
}

export function getBusiness() {
  return async function(dispatch) {
    dispatch({ type: actions.LOADING_TRUE });
    const res = await axios.get(businessUrl, setAxiosHeader());
    dispatch({ type: actions.RECEIVED_BUSINESS_DETAILS, payload: res.data });
  };
}

export function getBusinessReservedUnits() {
  return async dispatch => {
    dispatch({ type: actions.LOADING_TRUE });
    const res = await axios.get(businessReservedUnitsUrl, setAxiosHeader());
    dispatch({
      type: actions.RECEIVED_BUSINESS_RESERVED_UNITS,
      payload: res.data
    });
  };
}

// http get requests
// http post request to server

export const saveBlockToServer = details => {
  return async dispatch => {
    dispatch({ type: actions.LOADING_TRUE });
    await axios.post(blockUrl, { ...details }, setAxiosHeader());
  };
};

export const saveBusinessDetails = details => {
  return async dispatch => {
    dispatch({ type: actions.LOADING_TRUE });
    try {
      await axios.post(businessUrl, { ...details }, setAxiosHeader());
      dispatch({ type: actions.SAVED_BUSINESS_SUCCESS });
      dispatch({
        type: actions.SAVE_BUSINESS_ERROR,
        payload: {}
      });

      history.push("/dashboard");
    } catch (e) {
      console.log("errors", e.response.data.errors);
      dispatch({
        type: actions.SAVE_BUSINESS_ERROR,
        payload: e.response.data.errors
      });
    }
  };
};

export function saveLocationToServer(details) {
  return async function(dispatch) {
    dispatch({ type: actions.LOADING_TRUE });
    await axios.post(locationUrl, { ...details }, setAxiosHeader());
    history.push(`/dashboard`);
  };
}

export function saveUnitTypes(details) {
  return async dispatch => {
    dispatch({ type: actions.LOADING_TRUE });
    await axios.post(unitType, { ...details }, setAxiosHeader());
  };
}

// http post request to server
