import actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function villeReducer(state = initialState.villes, action) {
  switch (action.type) {
    case actionTypes.CREATE_VILLE:
      return [...state, { ...action.ville }];
    case actionTypes.LOAD_VILLES_SUCCESS:
      return action.villes;
    default:
      return state;
  }
}
