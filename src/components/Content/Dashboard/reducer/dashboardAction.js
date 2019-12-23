import axios from "axios";
import { GET_NUM_USERS } from "./dashboardConstants";
import { errorHandlingAction } from "../../../error/reducer/errorAction";
export const fetchUserCount = () => dispatch => {
  axios
    .get("/users/counts")
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
