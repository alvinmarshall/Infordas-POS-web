import createReducer from "../../../app/common/util/reducerUtil";
import { GET_ERRORS } from "./errorConstants";

const initialState = {};

export const getErrors = (state, payload) => {
  return payload ;
};

export default createReducer(initialState, {
  [GET_ERRORS]: getErrors
});
