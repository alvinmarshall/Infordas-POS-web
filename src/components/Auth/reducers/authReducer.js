import createReducer from "../../../app/common/util/reducerUtil";
import { SET_CURRENT_USER, LOGIN_LOADING } from "./authConstants";
import { isEmpty } from "../../../validation/is-empty";

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false
};

export const authenticateUser = (state, payload) => {
  return {
    ...state,
    isAuthenticated: !isEmpty(payload),
    user: payload,
    loading: false
  };
};

export const isLoading = (state, payload) => {
  return {
    ...state,
    loading: payload
  };
};

export default createReducer(initialState, {
  [SET_CURRENT_USER]: authenticateUser,
  [LOGIN_LOADING]: isLoading
});
