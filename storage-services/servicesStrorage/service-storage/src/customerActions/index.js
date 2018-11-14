
export function registerCustomer(details, history) {
    return async dispatch => {
      dispatch({ type: "LOADING_TRUE" });
      try {
        let res = await axios.post(ownerRegisterUrl, { ...details });
        history.push("/registerbusiness");
        localStorage.setItem("businessOwner", res.data.token);
        dispatch({ type: "OWNER_AUTHENTICATED" });
      } catch (e) {
        dispatch({ type: "OWNER_AUTHENTICATION_ERROR" });
      }
    };
  }
  
  export function loginCustomer(details, history) {
    return async dispatch => {
      dispatch({ type: "LOADING_TRUE" });
      try {
        let res = await axios.post(loginInUrl, { ...details });
        history.push("/dashboard");
        localStorage.setItem("businessOwner", res.data.token);
        dispatch({ type: "OWNER_AUTHENTICATED" });
      } catch (e) {
        dispatch({ type: "OWNER_AUTHENTICATION_ERROR" });
      }
    };
  }
  