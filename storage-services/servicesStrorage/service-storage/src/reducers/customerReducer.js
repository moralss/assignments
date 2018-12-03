import * as actions from "../actionTypes";

const initialState = {
  customerSearchResults: [],
  customerReservedUnits: []
};

// POST_ERROR

export const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.RECEVIED_CUSTOMER_SEARCH_RESULTS:
      return { ...state, customerSearchResults: [...action.payload] };
      case actions.RECEIVED_RESERVED_UNITS:
      return { ...state, customerReservedUnits: [...action.payload] };  
    default:
      return state;
  }
};
