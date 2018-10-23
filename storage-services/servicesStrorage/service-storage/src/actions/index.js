import axios from "axios";
const businessUrl = "http://localhost:3003/business";
const businessInfo = "http://localhost:3003/businessinfo/";
const locationUrl = "http://localhost:3003/location";


export function getBusinessInfo(name){
  return function(dispatch) {
    axios.get(businessInfo+`${name}`).then(response => {
      dispatch({
        type: "GET_BUSINESS_INFO",
        payload: response.data
      });
    });
  };
}

export function getBusinessFromServer() {
  return function(dispatch) {
    axios.get(businessUrl).then(response => {
      dispatch({
        type: "GET_BUSINESS_DETAILS",
        payload: response.data
      });
    });
  };
}

export function saveBusinessDetails(details) {
  return function(dispatch) {
    axios.post(businessUrl, { details }).then(response => {
      dispatch({ type: "SUCCESS" }).catch(() => {
        dispatch({ type: "FAILED" });
      });
    });
  };
}


export function saveLocationToServer(details) {
  return function(dispatch) {
    axios.post(locationUrl, { details }).then(response => {
      dispatch({ type: "SUCCESS" }).catch(() => {
        dispatch({ type: "FAILED" });
      });
    });
  };
}

