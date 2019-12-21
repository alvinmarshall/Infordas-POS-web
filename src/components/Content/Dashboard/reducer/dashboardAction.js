import axios from "axios";
import { GET_NUM_USERS } from "./dashboardConstants";
import { errorHandlingAction } from "../../../error/reducer/errorAction";
export const fetchUserCount = () => dispatch => {
  const token = localStorage.getItem("auth_token");
  console.log(token);
  const option = {
    headers: { Authorization: `Bearer ${token}` }
  };
  axios
    .get("/users/counts", option)
    .then(res => {
      const { count } = res.data;
      dispatch(setUserCount(count));
    })
    .catch(err => {
      errorHandlingAction(err, dispatch);
    });
};

export const setUserCount = payload => {
  return {
    type: GET_NUM_USERS,
    payload: payload
  };
};
