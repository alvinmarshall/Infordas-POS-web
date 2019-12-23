import axios from "axios";
import jwt_decode from "jwt-decode";
import { SET_CURRENT_USER } from "./authConstants";
import { GET_ERRORS } from "../../error/reducer/errorConstants";
import setAuthToken from "../Login/setAuthToken";
import { BASE_URL } from "../../../app/common/constants/Constants";

export const loginUser = payload => dispatch => {
  axios
    .post(`${BASE_URL}/users/login`, payload)
    .then(res => {
      const { token } = res.data.data;
      console.log(res.data);
      localStorage.setItem("auth_token", token);
      const decoded = jwt_decode(token, {});
      setAuthToken(decoded);
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => {
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

export const logoutUser = () => dispatch => {
  localStorage.removeItem("auth_token");
  setAuthToken(false);
  dispatch(setCurrentUser({}));
  alert("Session expired")
};
