// axios.defaults.headers.common["authorization"] = businessOwnerToken;


export const setAxiosHeaderForOwner = () => {
  let businessOwnerToken = localStorage.getItem("businessOwner");
  const headers = { headers: { authorization: businessOwnerToken } };
  return headers;
};

export const setAxiosHeaderForCustomer = () => {
    let businessOwnerToken = localStorage.getItem("customer");
    const headers = { headers: { authorizationc: businessOwnerToken } };
    return headers;
  };
  