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
  CREATE_EMPLOYEE,
  GET_ALL_EMPLOYEES,
  EMPLOYEE_LOADING,
  RESET_EMPLOYEE_MESSAGE,
  UPDATE_EMPLOYEE
} from "./employeeConstants";
import { errorHandlingAction } from "../../../error/reducer/errorAction";

export const createEmployeeAction = payload => dispatch => {
  showEmployeeLoading(true, dispatch);
  axios
    .post("/employee/create-new", payload)
    .then(res => {
      dispatch({
        type: CREATE_EMPLOYEE,
        payload: res.data.data.message
      });
    })
    .catch(err => {
      showEmployeeLoading(false, dispatch);
      errorHandlingAction(err, dispatch);
    });
};

export const getEmployeesProfileAction = () => dispatch => {
  showEmployeeLoading(true, dispatch);
  axios
    .get("/employee/infos")
    .then(res => {
      dispatch({
        type: GET_ALL_EMPLOYEES,
        payload: res.data.data
      });
    })
    .catch(err => {
      showEmployeeLoading(false, dispatch);
      errorHandlingAction(err, dispatch);
    });
};

export const updateEmployeeProfileAction = payload => dispatch => {
  showEmployeeLoading(true, dispatch);
  axios
    .put("/employee/update-employee", payload)
    .then(res => {
      dispatch({ type: UPDATE_EMPLOYEE, payload: res.data.data.message });
    })
    .catch(err => {
      showEmployeeLoading(false, dispatch);
      errorHandlingAction(err, dispatch);
    });
};

export const resetEmployeeMessageAction = () => dispatch => {
  dispatch({ type: RESET_EMPLOYEE_MESSAGE });
};

const showEmployeeLoading = (show, dispatch) => {
  dispatch({
    type: EMPLOYEE_LOADING,
    payload: show
  });
};
