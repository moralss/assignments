import axios from "axios";
const businessUrl = "http://localhost:3003/business";
// export const BusinessDetails = businessDetails => {
//   console.log(businessDetails);
//   return {
//     type: "UPDATED_DETAIL",
//     payload: businessDetails
//   };
// };

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

export function BusinessDetails(details) {
  return function(dispatch) {
    axios.post(businessUrl, { details }).then(response => {
      dispatch({ type: "SUCCESS" }).catch(() => {
        dispatch({ type: "FAILED" });
      });
    });
  };
}

const locationUrl = "http://localhost:3003/location";


export function saveLocationToServer(details) {
  return function(dispatch) {
    axios.post(locationUrl, { details }).then(response => {
      dispatch({ type: "SUCCESS" }).catch(() => {
        dispatch({ type: "FAILED" });
      });
    });
  };
}

// export function getBusinessFromServer(){
//     return {
//         type:"action",
//         payload:"object"
//     }
// }

// const url = "http://localhost:3003/business"
