import axios from "axios";
import { GET_ERRORS } from "../../../error/reducer/errorConstants";
import { GET_NUM_USERS } from "./dashboardConstants";
import { logoutUser } from "../../../Auth/reducers/authAction";
export const fetchUserCount = () => dispatch => {
  const token = localStorage.getItem("auth_token");
  console.log(token);
  const option = {
    headers: { Authorization: `Bearer ${token}` }
  };
  axios
    .get("/users/counts", option)
    .then(res => {
      console.log(res.data);
      const {count} = res.data;
      dispatch(setUserCount(count))
    })
    .catch(err => {
      console.error(err.response);
      const { status } = err.response;
      if (status === 401) {
        return dispatch(logoutUser());
      }
      dispatch({
        type: GET_ERRORS,
        payload: err
      });
    });
};

export const setUserCount = payload => {
    return{
        type:GET_NUM_USERS,
        payload:payload
    }
}
