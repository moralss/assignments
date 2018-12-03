import * as actions from "../../actionTypes";
import axios from "axios";
import { setAxiosHeader } from "../../auth";



const businessUrl = "http://localhost:3003/business";
const businessInfoUrl = "http://localhost:3003/businessinfo/";
const locationUrl = "http://localhost:3003/location";
const blockUrl = "http://localhost:3003/block/";
const unitType = "http://localhost:3003/unittype";
const unitTypeUrl = "http://localhost:3003/unittype/";

// http get requests

export function getUnitTypes(id) {
  return async function(dispatch) {
    dispatch({ type: actions.LOADING_TRUE });
    let unitTypes = await axios.get(unitTypeUrl + `${id}`, setAxiosHeader());
    dispatch({ type: actions.GET_UNIT_TYPES, payload: unitTypes.data });
  };
}

export function getBlocks(id) {
  return async function(dispatch) {
    dispatch({ type: actions.LOADING_TRUE });
    let blocks = await axios.get(blockUrl + `${id}`, setAxiosHeader());
    dispatch({ type: actions.GET_BLOCK_INFO, payload: blocks.data });
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
      type: actions.GET_BUSINESS_LOCATION,
      payload: businessInfo.data
    });
  };
}

export function getBusiness() {
  return async function(dispatch) {
    dispatch({ type: actions.LOADING_TRUE });
    const businesses = await axios.get(businessUrl, setAxiosHeader());
    dispatch({ type: actions.GET_BUSINESS_DETAILS, payload: businesses.data });
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

export const saveBusinessDetails = (details, history) => {
  return async dispatch => {
    dispatch({ type: actions.LOADING_TRUE });
    try {
      await axios.post(businessUrl, { ...details }, setAxiosHeader());
      dispatch({ type: actions.SAVED_BUSINESS_SUCCESS });
      history.push("/dashboard");
    } catch (e) {
      dispatch({ type: actions.POST_ERROR, payload: e });
    }
  };
};

export function saveLocationToServer(details, history) {
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

