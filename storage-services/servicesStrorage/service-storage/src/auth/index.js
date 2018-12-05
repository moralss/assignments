export const setAxiosHeader = () => {
  let token = localStorage.getItem("authorization");
  const headers = { headers: { authorization: token } };
  return headers;
};
