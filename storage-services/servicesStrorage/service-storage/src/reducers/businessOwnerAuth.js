import * as actions from '../actionTypes';

let initialState = {
  authenticated: false,
  error: []
};

export const authBusinessOwnerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.OWNER_AUTHENTICATED:
      return { ...state, authenticated: true };
    case actions.OWNER_AUTHENTICATION_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
