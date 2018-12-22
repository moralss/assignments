import * as actions from "../actionTypes";

let initialState = {
  authenticated: false,
  errors: {}
};

export const customerAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CUSTOMER_AUTHENTICATED:
      return { ...state, authenticated: action.payload, errors: {} };
    case actions.CUSTOMER_AUTHENTICATION_ERROR:
      return { ...state, errors: action.payload };

    default:
      return state;
  }
};
