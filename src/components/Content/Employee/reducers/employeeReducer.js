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
  CREATE_EMPLOYEE,
  GET_ALL_EMPLOYEES,
  EMPLOYEE_LOADING,
  RESET_EMPLOYEE_MESSAGE,
  UPDATE_EMPLOYEE
} from "./employeeConstants";

const initialState = {
  message: "",
  profiles: [],
  loading: false
};

export const createEmployee = (state, payload) => {
  return { ...state, message: payload, loading: false };
};

export const getEmployeesProfile = (state, payload) => {
  return { ...state, profiles: payload, loading: false };
};

export const setEmployeeLoading = (state, payload) => {
  return { ...state, loading: payload };
};

export const resetMessage = (state, payload) => {
  return { ...state, message: payload || "" };
};

export const updateEmployee = (state, payload) => {
  return { ...state, message: payload, loading: false };
};

export default createReducer(initialState, {
  [CREATE_EMPLOYEE]: createEmployee,
  [GET_ALL_EMPLOYEES]: getEmployeesProfile,
  [EMPLOYEE_LOADING]: setEmployeeLoading,
  [RESET_EMPLOYEE_MESSAGE]: resetMessage,
  [UPDATE_EMPLOYEE]: updateEmployee
});
