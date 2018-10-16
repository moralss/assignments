import  {businessReducer}  from "./businessReducer";
import { reducer as formReducer } from "redux-form";
import { combineReducers} from "redux";


const rootReducer = combineReducers({
    form: formReducer,
    business: businessReducer
  });



  export default rootReducer;