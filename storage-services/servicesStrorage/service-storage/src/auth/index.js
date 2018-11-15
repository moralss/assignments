export const setAxiosHeader = () => {
  let businessOwnerToken = localStorage.getItem("businessOwner");
  const headers = { headers: { authorization: businessOwnerToken } };
  return headers;
};
