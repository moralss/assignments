const initialState = {
  businessInfo: [],
  businessLocations: [],
  loading: false,
  blocks: [],
  unitTypes: [],
  postError: []
};

// POST_ERROR

export const businessReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_BUSINESS_DETAILS":
      return { ...state, businessInfo: [...action.payload] };
    case "GET_BUSINESS_LOCATION":
      return { ...state, businessLocations: [...action.payload] };
    case "GET_UNIT_TYPES":
      return { ...state, unitTypes: [...action.payload] };
    case "GET_BLOCK_INFO":
      return { ...state, blocks: [...action.payload] };
    case "POST_ERROR":
      return { ...state, postError: [...action.payload] };

    case "LOADING_FLASE":
      return { ...state, loading: false };
    case "LOADING_TRUE":
      return { ...state, loading: true };
    default:
      return state;
  }
};
