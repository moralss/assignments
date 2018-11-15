import { businessReducer } from "./businessReducer";
import { authBusinessOwnerReducer } from "./businessOwnerAuth";
import { customerAuthReducer } from "./customerAuthReducers";
import { customerReducer } from "./customerReducer";
import { reducer as formReducer } from "redux-form";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  form: formReducer,
  business: businessReducer,
  businessOwnerAuth: authBusinessOwnerReducer,
  customerAuth: customerAuthReducer,
  customer: customerReducer
});

export default rootReducer;
