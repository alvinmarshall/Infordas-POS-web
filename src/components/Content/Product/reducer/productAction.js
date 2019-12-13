// Copyright 2019 Bik_krl
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import axios from "axios";
import {
  PRODUCT_LOADING,
  RESET_PRODUCT_MESSAGE,
  GET_ALL_PRODUCT,
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT
} from "./productConstants";
import { logoutUser } from "../../../Auth/reducers/authAction";
import { GET_ERRORS } from "../../../error/reducer/errorConstants";
const options = {
  headers: { Authorization: `Bearer ${localStorage.auth_token}` }
};

//
// ─── CREATE PRODUCT ─────────────────────────────────────────────────────────────
//
export const createProductAction = payload => dispatch => {
  showLoading(true, dispatch);
  axios
    .post("/product/create-product", payload, options)
    .then(res => {
      dispatch({ type: CREATE_PRODUCT, payload: res.data.data.message });
    })
    .catch(err => {
      showLoading(false, dispatch);
      const { status } = err.response;
      if (status === 401) {
        return dispatch(logoutUser());
      }
      dispatch({ type: GET_ERRORS, payload: err });
    });
};
//
// ─── GET ALL PRODUCT ────────────────────────────────────────────────────────────
//

export const fetchAllProductAction = () => dispatch => {
  showLoading(true, dispatch);
  axios
    .get("/product/products", options)
    .then(res => {
      dispatch({ type: GET_ALL_PRODUCT, payload: res.data.data });
    })
    .catch(err => {
      showLoading(false, dispatch);
      const { status } = err.response;
      if (status === 401) {
        return dispatch(logoutUser());
      }
      dispatch({ type: GET_ERRORS, payload: err });
    });
};

//
// ─── UPDATE PRODUCT ─────────────────────────────────────────────────────────────
//

export const updateProductAction = payload => dispatch => {
  showLoading(true, dispatch);
  axios
    .put("/product/update-product", payload, options)
    .then(res => {
      dispatch({ type: UPDATE_PRODUCT, payload: res.data.data.message });
    })
    .catch(err => {
      showLoading(false, dispatch);
      const { status } = err.response;
      if (status === 401) {
        return dispatch(logoutUser());
      }
      dispatch({ type: GET_ERRORS, payload: err });
    });
};

//
// ─── DELETE PRODUCT ─────────────────────────────────────────────────────────────
//

export const deleteProductAction = payload => dispatch => {
  showLoading(true, dispatch);
  axios
    .delete(`/product/product/${payload}`, payload, options)
    .then(res => {
      dispatch({ type: DELETE_PRODUCT, payload: res.data.data.message });
    })
    .catch(err => {
      showLoading(false, dispatch);
      const { status } = err.response;
      if (status === 401) {
        return dispatch(logoutUser());
      }
      dispatch({ type: GET_ERRORS, payload: err });
    });
};

//
// ─── RESET PRODUCT MESSAGE ──────────────────────────────────────────────────────
//

export const resetProductMessageAction = () => dispatch => {
  dispatch({ type: RESET_PRODUCT_MESSAGE });
};

const showLoading = (show, dispatch) => {
  dispatch({ type: PRODUCT_LOADING, payload: show });
};
