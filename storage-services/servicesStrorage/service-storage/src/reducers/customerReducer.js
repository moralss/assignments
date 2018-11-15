import * as actions from "../actionTypes";

const initialState = {
  customerSearchResults: []
};

// POST_ERROR

export const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.RECEVIED_CUSTOMER_SEARCH_RESULTS:
      return { ...state, customerSearchResults: [...action.payload] };
    default:
      return state;
  }
};
