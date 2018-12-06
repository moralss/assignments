import * as actions from "../actionTypes";

const initialState = {
  businessInfo: [],
  businessLocations: [],
  loading: false,
  blocks: [],
  unitTypes: [],
  postError: [],
  businessReservedUnits: [],
  errors: {}
};

// POST_ERROR

export const businessReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.RECEIVED_BUSINESS_DETAILS:
      return { ...state, businessInfo: [...action.payload] };
    case actions.RECEIVED_BUSINESS_LOCATION:
      return { ...state, businessLocations: [...action.payload] };
    case actions.RECEIVED_UNIT_TYPES:
      return { ...state, unitTypes: [...action.payload] };
    case actions.RECEIVED_BLOCK_INFO:
      return { ...state, blocks: [...action.payload] };
    case actions.POST_ERROR:
      return { ...state, postError: [...action.payload] };
    case actions.RECEIVED_BUSINESS_RESERVED_UNITS:
      return { ...state, businessReservedUnits: [...action.payload] };
    case actions.LOADING_FALSE:
      return { ...state, loading: false };
    case actions.LOADING_TRUE:
      return { ...state, loading: true };
    default:
      return state;
  }
};
