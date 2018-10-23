const initialState = {
  businessInfo: [],
  businessFullInfo: []
};

export const businessReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_BUSINESS_DETAILS":
      return { ...state, businessInfo: [action.payload] };
    case "GET_BUSINESS_INFO":
      return { ...state, businessFullInfo: [action.payload] };
    default:
      return state;
  }
};
