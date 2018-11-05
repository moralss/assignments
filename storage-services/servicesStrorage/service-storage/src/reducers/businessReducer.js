const initialState = {
  businessInfo: [],
  businessFullInfo: [],
  loading: false
};

export const businessReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_BUSINESS_DETAILS":
    return { ...state, businessInfo: [...action.payload] };
    case "GET_BUSINESS_INFO":
    console.log("payload" , action.payload);
      return { ...state, businessFullInfo: [...action.payload] };
    case "LOADING_FLASE":
      return { ...state, loading: false };
    case "LOADING_TRUE":
      return { ...state, loading: true };
    default:
      return state;
  }
};
