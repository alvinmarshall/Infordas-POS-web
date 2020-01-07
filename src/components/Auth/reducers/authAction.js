import axios from "axios";
import jwt_decode from "jwt-decode";
import { SET_CURRENT_USER, LOGIN_LOADING } from "./authConstants";
import { GET_ERRORS } from "../../error/reducer/errorConstants";
import setAuthToken from "../Login/setAuthToken";
import { BASE_URL } from "../../../app/common/constants/Constants";

export const loginUser = payload => dispatch => {
  showLoading(true, dispatch);
  axios
    .post(`${BASE_URL}/users/login`, payload)
    .then(res => {
      const { token } = res.data.data;
      localStorage.setItem("auth_token", token);
      const decoded = jwt_decode(token, {});
      setAuthToken(decoded);
      dispatch(setCurrentUser(decoded));
      showLoading(false, dispatch);
    })
    .catch(err => {
      showLoading(false, dispatch);
      if (!err) return;
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

const showLoading = (show, dispatch) => {
  dispatch({ type: LOGIN_LOADING, payload: show });
};

export const logoutUser = () => dispatch => {
  localStorage.removeItem("auth_token");
  setAuthToken(false);
  dispatch(setCurrentUser({}));
  alert("Session expired");
};
