import { RECIEVE_CART_ITEM, REMOVE_CART_ITEM, UPDATE_CART_ITEM } from "./invoiceConstants";
import v4 from "uuid/v4";

export const addItemToCartAction = payload => dispatch => {
  payload.uuid = v4();
  dispatch({ type: RECIEVE_CART_ITEM, payload });
};

export const removeCartItemAction = payload => dispatch => {
  dispatch({ type: REMOVE_CART_ITEM, payload });
};

export const updateCartItemAction = payload => dispatch => {
  dispatch({ type: UPDATE_CART_ITEM, payload });
};
