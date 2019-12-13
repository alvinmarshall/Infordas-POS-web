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

import createReducer from "../../../../app/common/util/reducerUtil";
import {
  CREATE_PRODUCT,
  GET_ALL_PRODUCT,
  RESET_PRODUCT_MESSAGE,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  PRODUCT_LOADING
} from "./productConstants";

const initialState = {
  products: [],
  message: "",
  loading: false
};

export const createProduct = (state, payload) => {
  return { ...state, message: payload, loading: false };
};

export const resetProductMessage = (state, payload) => {
  return { ...state, message: "" };
};

export const getAllProducts = (state, payload) => {
  return { ...state, products: payload, loading: false };
};

export const updateProduct = (state, payload) => {
  return { ...state, message: payload, loading: false };
};

export const deleteProduct = (state, payload) => {
  return { ...state, message: payload, loading: false };
};

export const isLoading = (state, payload) => {
  return { ...state, loading: payload };
};

export default createReducer(initialState, {
  [CREATE_PRODUCT]: createProduct,
  [GET_ALL_PRODUCT]: getAllProducts,
  [RESET_PRODUCT_MESSAGE]: resetProductMessage,
  [UPDATE_PRODUCT]: updateProduct,
  [DELETE_PRODUCT]: deleteProduct,
  [PRODUCT_LOADING]: isLoading
});
