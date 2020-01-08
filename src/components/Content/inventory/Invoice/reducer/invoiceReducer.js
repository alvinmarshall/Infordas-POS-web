import createReducer from "../../../../../app/common/util/reducerUtil";
import { RECIEVE_CART_ITEM, REMOVE_CART_ITEM } from "./invoiceConstants";

const initialState = {
  item: []
};

export const addItem = (state, payload) => {
  console.log("pat", payload);
  return { ...state, item: [...state.item, Object.assign({}, payload)] };
};

export const removeItem = (state, payload) => {
  return {
    ...state,
    item: [...state.item.filter(d => d.uuid !== payload.uuid)]
  };
};

export default createReducer(initialState, {
  [RECIEVE_CART_ITEM]: addItem,
  [REMOVE_CART_ITEM]: removeItem
});
