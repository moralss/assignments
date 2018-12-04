export const setAxiosHeader = () => {
  let token = localStorage.getItem("authorization");
  const headers = { headers: { Authorization: token } };
  return headers;
};
