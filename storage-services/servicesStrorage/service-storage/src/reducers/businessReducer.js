const initialState = {
  businessInfo: [],
  businessFullInfo: [],
  loading: false,
  blocks: []
};

export const businessReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_BUSINESS_DETAILS":
      return { ...state, businessInfo: [...action.payload] };
    case "GET_BUSINESS_INFO":
      return { ...state, businessFullInfo: [...action.payload] };
    case "GET_BLOCK_INFO":
      return { ...state, blocks: [...action.payload] };
    case "LOADING_FLASE":
      return { ...state, loading: false };
    case "LOADING_TRUE":
      return { ...state, loading: true };
    default:
      return state;
  }
};
