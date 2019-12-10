import createReducer from "../../../../app/common/util/reducerUtil";
import { GET_NUM_USERS } from "./dashboardConstants";

const initialState = {
  numUser: 0
};

export const userCount = (state, payload) => {
  return {
    ...state,
    numUser: payload
  };
};

export default createReducer(initialState, {
  [GET_NUM_USERS]: userCount
});
