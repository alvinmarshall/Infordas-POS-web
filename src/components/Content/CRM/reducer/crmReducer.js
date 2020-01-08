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
  CRM_IS_LOADING,
  CREATE_NEW_CUSTOMER,
  CREATE_NEW_SUPPLIER,
  GET_ALL_CRM_CUSTOMER,
  GET_ALL_CRM_SUPPLIER,
  RESET_CRM_MESSAGE
} from "./crmConstant";

const initialState = {
  loading: false,
  message: "",
  crmCustomer: [],
  crmSupplier: []
};

export const createCrm = (state, payload) => {
  return { ...state, loading: false, message: payload };
};

export const isLoading = (state, payload) => {
  return { ...state, loading: payload || false };
};

export const fetchAllCustomer = (state, payload) => {
  return { ...state, crmCustomer: payload, loading: false };
};

export const fetchAllSupplier = (state, payload) => {
  return { ...state, crmSupplier: payload, loading: false };
};

export const resetMessage = (state, payload) => {
  return { ...state, message: payload || "" };
};
export const updateCustomer = (state, payload) => {
  return { ...state, message: payload, loading: false };
};

export const deleteCustomer = (state, payload) => {
  return { ...state, message: payload, loading: false };
};
export const deleteSupplier = (state, payload) => {
  return { ...state, message: payload, loading: false };
};


export default createReducer(initialState, {
  [CREATE_NEW_CUSTOMER]: createCrm,
  [CREATE_NEW_SUPPLIER]: createCrm,
  [CRM_IS_LOADING]: isLoading,
  [GET_ALL_CRM_CUSTOMER]: fetchAllCustomer,
  [GET_ALL_CRM_SUPPLIER]: fetchAllSupplier,
  [RESET_CRM_MESSAGE]: resetMessage
});
