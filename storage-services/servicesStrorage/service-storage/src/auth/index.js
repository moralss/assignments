// axios.defaults.headers.common["authorization"] = businessOwnerToken;

export const setAxiosHeader = () => {
  let token = localStorage.getItem("authorization");
  console.log("token", token);
  const headers = { headers: { Authorization: token } };
  return headers;
};
