import { combineReducers } from "redux";
import users from "./userReducer";
import roles from "./roleReducer";

const rootReducer = combineReducers({
  users,
  roles,
});

export default rootReducer;
