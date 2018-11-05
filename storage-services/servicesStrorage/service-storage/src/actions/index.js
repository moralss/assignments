import axios from "axios";
const businessUrl = "http://localhost:3003/business";
const businessInfoUrl = "http://localhost:3003/businessinfo/";
const locationUrl = "http://localhost:3003/location";
const blockUrl = "http://localhost:3003/block/";

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
    console.log("business", name);
    dispatch({ type: "LOADING_TRUE" });
    let businessInfo = await axios.get(businessInfoUrl + `${name}`);
    dispatch({
      type: "GET_BUSINESS_INFO",
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

export const saveBlockToServer = details => {
  console.log("submit to server", { details });
  return async dispatch => {
    dispatch({ type: "LOADING_TRUE" });
    await axios.post(blockUrl, { details });
    dispatch({ type: "LOADING_FALSE" });
  };
};

export const saveBusinessDetails = details => {
  return async dispatch => {
    dispatch({ type: "LOADING_TRUE" });
    await axios.post(businessUrl, { details });
    dispatch({ type: "LOADING_FALSE" });
  };
};

export function saveLocationToServer(details) {
  return async function(dispatch) {
    dispatch({ type: "LOADING_TRUE" });
    await axios.post(locationUrl, { ...details });
    dispatch({ type: "LOADING_FALSE" });
  };
}
