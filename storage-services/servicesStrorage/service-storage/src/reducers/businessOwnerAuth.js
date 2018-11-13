
let initialState = {
  authenticated: false,
  error: []
};

export const authBusinessOwnerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "OWNER_AUTHENTICATED":
      return { ...state, authenticated: true };
    case "AUTHENTICATION_ERROR":
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
