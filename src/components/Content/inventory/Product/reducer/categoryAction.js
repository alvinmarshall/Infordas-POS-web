import axios from "axios";
import {
  UPDATE_PRODUCT_CATEGORY,
  GET_ALL_PRODUCT_CATEGORY,
  PRODUCT_CATEGORY_LOADING,
  CREATE_PRODUCT_CATEGORY
} from "./categoryConstansts";
import { errorHandlingAction } from "../../../../error/reducer/errorAction";

const options = {
  headers: { Authorization: `Bearer ${localStorage.auth_token}` }
};

//
// ─── REMOVE CATEGORY ────────────────────────────────────────────────────────────
//

export const removeCategoryAction = payload => dispatch => {
  //todo
  setLoading(dispatch, true);
  axios
    .delete(`/product/category/${payload}`, options)
    .then()
    .catch(err => {
      errorHandlingAction(err, dispatch);
    });
};

//
// ─── UPDATE CATEGORY ────────────────────────────────────────────────────────────
//

export const updateCategoryAction = payload => dispatch => {
  //todo
  setLoading(dispatch, true);
  axios
    .put("/product/update-category", payload, options)
    .then(res => {
      dispatch({
        type: UPDATE_PRODUCT_CATEGORY,
        payload: res.data.data.message
      });
    })
    .catch(err => {
      setLoading(dispatch,false)
      errorHandlingAction(err, dispatch);
    });
};

export const createCategoryAction = payload => dispatch => {
  //todo
  setLoading(dispatch, true);
  axios
    .post("/product/create-category", payload, options)
    .then(res => {
      dispatch({
        type: CREATE_PRODUCT_CATEGORY,
        payload: res.data.data.message
      });
    })
    .catch(err => {
      setLoading(dispatch,false)
      errorHandlingAction(err, dispatch);
    });
};

//
// ─── GET ALL CATEGORY ───────────────────────────────────────────────────────────
//

export const fetchAllCategoryAction = () => dispatch => {
  setLoading(dispatch, true);
  axios
    .get("/product/categories", options)
    .then(res => {
      dispatch({ type: GET_ALL_PRODUCT_CATEGORY, payload: res.data.data });
    })
    .catch(err => {
      setLoading(dispatch,false)
      errorHandlingAction(err, dispatch);
    });
};

const setLoading = (dispatch, payload) => {
  dispatch({ type: PRODUCT_CATEGORY_LOADING, payload });
};

