import actionTypes from "./actionTypes";
import * as roleAPI from "../../api/roleAPI";

export function createUser(role) {
  return { type: actionTypes.CREATE_ROLE, role };
}

export function loadRolesSuccess(roles) {
  return { type: actionTypes.LOAD_ROLES_SUCCESS, roles };
}

export function loadRoles() {
  return function (dispatch) {
    return roleAPI
      .getRoles()
      .then(({ data: roles }) => {
        dispatch(loadRolesSuccess(roles));
      })
      .catch((error) => {
        throw error;
      });
  };
}
