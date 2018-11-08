import axios from "axios";
const businessUrl = "http://localhost:3003/business";
const businessInfoUrl = "http://localhost:3003/businessinfo/";
const locationUrl = "http://localhost:3003/location";
const blockUrl = "http://localhost:3003/block/";
const unitType = "http://localhost:3003/unittype";
const unitTypeUrl = "http://localhost:3003/unittype/";

// http get requests
export function getUnitTypes(id) {
  return async function(dispatch) {
    dispatch({ type: "LOADING_TRUE" });
    let unitTypes = await axios.get(unitTypeUrl + `${id}`);
    dispatch({
      type: "GET_UNIT_TYPES",
      payload: unitTypes.data
    });
    dispatch({ type: "LOADING_FALSE" });
  };
}

export function getBlocks(id) {
  return async function(dispatch) {
    dispatch({ type: "LOADING_TRUE" });
    let blocks = await axios.get(blockUrl + `${id}`);
    dispatch({
      type: "GET_BLOCK_INFO",
      payload: blocks.data
    });
    dispatch({ type: "LOADING_FALSE" });
  };
}

export function getBusinessInfo(name) {
  return async function(dispatch) {
    dispatch({ type: "LOADING_TRUE" });
    let businessInfo = await axios.get(businessInfoUrl + `${name}`);
    dispatch({
      type: "GET_BUSINESS_LOCATION",
      payload: businessInfo.data
    });
    dispatch({ type: "LOADING_FALSE" });
  };
}

export function getBusinessFromServer() {
  return async function(dispatch) {
    dispatch({ type: "LOADING_TRUE" });
    const businesses = await axios.get(businessUrl);
    dispatch({
      type: "GET_BUSINESS_DETAILS",
      payload: businesses.data
    });

    dispatch({ type: "LOADING_FALSE" });
  };
}
// http get requests

// http post request to server

export const saveBlockToServer = details => {
  return async dispatch => {
    dispatch({ type: "LOADING_TRUE" });
    await axios.post(blockUrl, { ...details });
    dispatch({ type: "LOADING_FALSE" });
  };
};

export const saveBusinessDetails = (details, history) => {
  return async dispatch => {
    dispatch({ type: "LOADING_TRUE" });
    try {
      await axios.post(businessUrl, { ...details });
      history.push("/dashboard");
      dispatch({ type: "SAVED_BUSINESS_SUCCESS" });
    } catch (e) {
      dispatch({ type: "POST_ERROR", payload: e });
    }
  };
};

export function saveLocationToServer(details, history) {
  return async function(dispatch) {
    dispatch({ type: "LOADING_TRUE" });
    await axios.post(locationUrl, { ...details });
    history.push(`/dashboard`);
    dispatch({ type: "LOADING_FALSE" });
  };
}

export function saveUnitTypes(details) {
  return async dispatch => {
    dispatch({ type: "LOADING_TRUE" });
    await axios.post(unitType, { ...details });
    dispatch({ type: "LOADING_FALSE" });
  };
}

// http post request to server

export function registerCustomer(details) {
  return async dispatch => {};
}

export function registerOwner(details) {
  return async dispatch => {};
}
