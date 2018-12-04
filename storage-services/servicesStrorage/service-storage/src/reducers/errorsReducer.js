import * as actions from "../actionTypes";

const initialState = {
  businessName: "",
  phoneNumbers: "",
  email: ""
};

// POST_ERROR

export const errorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SAVE_BUSINESS_ERROR:
      console.log("action", action.payload.businessName);
      return {
        ...state,

        businessName: action.payload.businessName,
        phoneNumbers: action.payload.phoneNumbers,
        email: action.payload.email
      };
    default:
      return state;
  }
};
