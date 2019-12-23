import { GET_ERRORS } from "./errorConstants";
import { logoutUser } from "../../Auth/reducers/authAction";

export const errorHandlingAction = (err, dispatch) => {
  console.log("err", err);
  const { status } = err.response;
  if (status === 401) {
    return dispatch(logoutUser());
  }
  dispatch({ type: GET_ERRORS, payload: err });
};
