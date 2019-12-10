import createReducer from "../../../app/common/util/reducerUtil";
import { SET_CURRENT_USER } from "./authConstants";
import { isEmpty } from "../../../validation/is-empty";

const initialState = {
  isAuthenticated: false,
  user: {}
};
export const authenticateUser = (state, payload) => {
  return {
    ...state,
    isAuthenticated: !isEmpty(payload),
    user: payload
  };
};

export default createReducer(initialState, {
  [SET_CURRENT_USER]: authenticateUser
});
