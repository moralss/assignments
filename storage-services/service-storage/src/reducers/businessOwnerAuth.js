import * as actions from "../actionTypes";

let initialState = {
  authenticated: false,
  errors: {}
};

export const authBusinessOwnerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.OWNER_AUTHENTICATED:
      return { ...state, authenticated: action.payload, errors: {} };
    case actions.OWNER_AUTHENTICATION_ERROR:
      return { ...state, errors: action.payload };

    default:
      return state;
  }
};
