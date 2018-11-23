// axios.defaults.headers.common["authorization"] = businessOwnerToken;


export const setAxiosHeader = () => {
  let token = localStorage.getItem("authorization");
  const headers = { headers: { Authorization: token } };
  return headers;
};

// export const setAxiosHeaderForCustomer = () => {
//     let businessOwnerToken = localStorage.getItem("customer");
//     const headers = { headers: { authorizationc: businessOwnerToken } };
//     return headers;

// };
  
