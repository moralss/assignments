import * as actions from '../actionTypes';

let initialState = {
  authenticated: false,
  error: []
};

export const customerAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CUSTOMER_AUTHENTICATED:
      return { ...state, authenticated: true };
    case actions.CUSTOMER_AUTHENTICATION_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
