import createReducer from "../../../../../app/common/util/reducerUtil";
import {
  CREATE_NEW_PURCHASE,
  PURCHASE_IS_LOADING,
  RESET_PURCHASE_MESSAGE
} from "./purchaseConstants";

const initialState = {
  loading: false,
  message: ""
};

export const createPurchase = (state, payload) => {
  return { ...state, loading: false, message: payload };
};

export const isLoading = (state, payload) => {
  return { ...state, loading: payload || false };
};

export const resetMessage = (state, payload) => {
  return { ...state, message: payload || "" };
};

export default createReducer(initialState, {
  [CREATE_NEW_PURCHASE]: createPurchase,
  [PURCHASE_IS_LOADING]: isLoading,
  [RESET_PURCHASE_MESSAGE]: resetMessage
});
