import  {businessReducer}  from "./businessReducer";
import {authBusinessOwnerReducer} from './businessOwnerAuth';
import { reducer as formReducer } from "redux-form";
import { combineReducers} from "redux";


const rootReducer = combineReducers({
    form: formReducer,
    business: businessReducer,
    businessOwnerAuth : authBusinessOwnerReducer
  });



  export default rootReducer;