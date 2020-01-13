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

import createReducer from "../../../app/common/util/reducerUtil";
import {
  GET_QUICK_START_STATUS,
  CREATE_NEW_ADMIN,
  QUICK_START_LOADING
} from "./quickStartConstants";

const initialState = {
  status: null,
  loading: false,
  message: null
};

export const getStatus = (state, payload) => {
  console.log("payd", payload);
  return { ...state, status: payload };
};

export const createAdminAccount = (state, payload) => {
  return { ...state, message: payload, loading: false };
};

export const isLoading = (state, payload) => {
  return { ...state, loading: payload || false };
};

export default createReducer(initialState, {
  [GET_QUICK_START_STATUS]: getStatus,
  [CREATE_NEW_ADMIN]: createAdminAccount,
  [QUICK_START_LOADING]: isLoading
});
