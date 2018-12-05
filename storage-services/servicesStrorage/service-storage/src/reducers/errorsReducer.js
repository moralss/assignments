import * as actions from "../actionTypes";

const initialState = {
  businessRegister: {
    businessName: "",
    phoneNumbers: "",
    email: ""
  }
};

// POST_ERROR

export const errorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SAVE_BUSINESS_ERROR:
      return {
        ...state,
        businessRegister: action.payload
      };
    default:
      return state;
  }
};
