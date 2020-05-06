import actionTypes from "./actionTypes";
import * as villeApi from "../../api/villeApi";

export function createVille(ville) {
  return { type: actionTypes.CREATE_VILLE, ville };
}

export function loadVilleSuccess(villes) {
  return { type: actionTypes.LOAD_VILLES_SUCCESS, villes };
}

export function loadVilles() {
  return function (dispatch) {
    return villeApi
      .getVilles()
      .then((villes) => {
        dispatch(loadVilleSuccess(villes));
      })
      .catch((error) => {
        throw error;
      });
  };
}
