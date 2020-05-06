import { combineReducers } from "redux";
import villes from "./villeReducer";

const rootReducer = combineReducers({
  villes,
});

export default rootReducer;
