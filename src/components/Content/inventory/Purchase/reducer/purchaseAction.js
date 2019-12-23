import axios from "axios";
import {
  PURCHASE_IS_LOADING,
  CREATE_NEW_PURCHASE,
  RESET_PURCHASE_MESSAGE
} from "./purchaseConstants";
import { errorHandlingAction } from "../../../../error/reducer/errorAction";

export const createNewPurchaseAction = payload => dispatch => {
  showLoading(true, dispatch);
  axios
    .post("/product/purchase/create-purchase", payload)
    .then(res => {
      dispatch({ type: CREATE_NEW_PURCHASE, payload: res.data.data.message });
    })
    .catch(err => {
      showLoading(false, dispatch);
      errorHandlingAction(err, dispatch);
    });
};

export const resetPurchaseMessageAction = () => dispatch => {
  dispatch({ type: RESET_PURCHASE_MESSAGE });
};

const showLoading = (show, dispatch) => {
  dispatch({ type: PURCHASE_IS_LOADING, show });
};
