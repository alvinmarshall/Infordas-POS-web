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
  GET_ALL_PRODUCT_BRAND,
  CREATE_PRODUCT_BRAND,
  UPDATE_PRODUCT_BRAND,
  REMOVE_PRODUCT_BRAND,
  PRODUCT_BRAND_LOADING
} from "./brandConstants";
import { errorHandlingAction } from "../../../../error/reducer/errorAction";

//
// ─── GET ALL BRANDS ─────────────────────────────────────────────────────────────
//

export const fetchAllBrandsAction = () => dispatch => {
  setLoading(dispatch, true);
  axios
    .get("/product/brands")
    .then(res => {
      dispatch({ type: GET_ALL_PRODUCT_BRAND, payload: res.data.data });
    })
    .catch(err => {
      setLoading(dispatch, false);
      errorHandlingAction(err, dispatch);
    });
};

//
// ─── CREATE BRAND ───────────────────────────────────────────────────────────────
//

export const createBrandAction = payload => dispatch => {
  setLoading(dispatch, true);
  axios
    .post("/product/create-brand", payload)
    .then(res => {
      dispatch({ type: CREATE_PRODUCT_BRAND, payload: res.data.data.message });
    })
    .catch(err => {
      setLoading(dispatch, false);
      errorHandlingAction(err, dispatch);
    });
};

//
// ─── UPDATE BRAND ───────────────────────────────────────────────────────────────
//

export const updateBrandAction = payload => dispatch => {
  setLoading(dispatch, true);
  axios
    .put("/product/update-brand", payload)
    .then(res => {
      dispatch({ type: UPDATE_PRODUCT_BRAND, payload: res.data.data.message });
    })
    .catch(err => {
      setLoading(dispatch, false);
      errorHandlingAction(err, dispatch);
    });
};

//
// ─── REMOVE BRAND ───────────────────────────────────────────────────────────────
//
export const removeBrandAction = payload => dispatch => {
  setLoading(dispatch, true);
  axios
    .delete("/product/remove-brand", payload)
    .then(res => {
      dispatch({ type: REMOVE_PRODUCT_BRAND, payload: res.data.data.message });
    })
    .catch(err => {
      setLoading(dispatch, false);
      errorHandlingAction(err, dispatch);
    });
};

const setLoading = (dispatch, payload) => {
  dispatch({ type: PRODUCT_BRAND_LOADING, payload });
};
