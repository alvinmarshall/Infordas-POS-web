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

import createReducer from "../../../../../app/common/util/reducerUtil";
import {
  CREATE_PRODUCT,
  GET_ALL_PRODUCT,
  RESET_PRODUCT_MESSAGE,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  PRODUCT_LOADING
} from "./productConstants";
import {
  CREATE_PRODUCT_CATEGORY,
  GET_ALL_PRODUCT_CATEGORY,
  UPDATE_PRODUCT_CATEGORY,
  REMOVE_PRODUCT_CATEGORY,
  PRODUCT_CATEGORY_LOADING
} from "./categoryConstansts";
import {
  CREATE_PRODUCT_BRAND,
  GET_ALL_PRODUCT_BRAND,
  UPDATE_PRODUCT_BRAND,
  REMOVE_PRODUCT_BRAND,
  PRODUCT_BRAND_LOADING
} from "./brandConstants";

const initialState = {
  products: [],
  message: "",
  loading: false,
  categories: [],
  brands: [],
  pageNext: {},
  pagePrev: {}
};

export const create = (state, payload) => {
  return { ...state, message: payload, loading: false };
};
export const update = (state, payload) => {
  return { ...state, message: payload, loading: false };
};

export const remove = (state, payload) => {
  return { ...state, message: payload, loading: false };
};

export const isLoading = (state, payload) => {
  return { ...state, loading: payload };
};
export const resetProductMessage = (state, payload) => {
  return { ...state, message: payload || "" };
};

//
// ─── PRODUCT ────────────────────────────────────────────────────────────────────
//

export const getAllProducts = (state, payload) => {
  return {
    ...state,
    products: payload.data,
    pagePrev: payload.prev,
    pageNext: payload.next,
    loading: false
  };
};

//
// ─── CATEGORY ───────────────────────────────────────────────────────────────────
//

export const getAllCategories = (state, payload) => {
  return { ...state, categories: payload, loading: false };
};

//
// ─── BRAND ──────────────────────────────────────────────────────────────────────
//

export const getAllBrands = (state, payload) => {
  return { ...state, brands: payload, loading: false };
};

export default createReducer(initialState, {
  [RESET_PRODUCT_MESSAGE]: resetProductMessage,

  //
  // ─── PRODUCT ────────────────────────────────────────────────────────────────────
  //

  [CREATE_PRODUCT]: create,
  [GET_ALL_PRODUCT]: getAllProducts,
  [UPDATE_PRODUCT]: update,
  [DELETE_PRODUCT]: remove,
  [PRODUCT_LOADING]: isLoading,
  //
  // ─── CATEGORY ───────────────────────────────────────────────────────────────────
  //

  [CREATE_PRODUCT_CATEGORY]: create,
  [GET_ALL_PRODUCT_CATEGORY]: getAllCategories,
  [UPDATE_PRODUCT_CATEGORY]: update,
  [REMOVE_PRODUCT_CATEGORY]: remove,
  [PRODUCT_CATEGORY_LOADING]: isLoading,

  //
  // ─── BRAND ──────────────────────────────────────────────────────────────────────
  //

  [CREATE_PRODUCT_BRAND]: create,
  [GET_ALL_PRODUCT_BRAND]: getAllBrands,
  [UPDATE_PRODUCT_BRAND]: update,
  [REMOVE_PRODUCT_BRAND]: remove,
  [PRODUCT_BRAND_LOADING]: isLoading
});
