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
import { GET_ERRORS } from "../../../error/reducer/errorConstants";
import {
  CREATE_EMPLOYEE,
  GET_ALL_EMPLOYEES,
  EMPLOYEE_LOADING
} from "./employeeConstants";
import { logoutUser } from "../../../Auth/reducers/authAction";
const options = {
  headers: { Authorization: `Bearer ${localStorage.auth_token}` }
};
export const createEmployeeAction = payload => dispatch => {
  axios
    .post("/employee/create-new", payload, options)
    .then(res => {
      console.log(res.data);
      dispatch({
        type: CREATE_EMPLOYEE,
        payload: res.data.data.message
      });
    })
    .catch(err => {
      console.log(err);
      const { status } = err.response;
      if (status === 401) {
        return dispatch(logoutUser());
      }
      dispatch({
        type: GET_ERRORS,
        payload: err
      });
    });
};

export const getEmployeesProfileAction = () => dispatch => {
  dispatch({
    type: EMPLOYEE_LOADING
  });
  axios
    .get("/employee/infos",options)
    .then(res => {
      console.log("profiles", res.data);
      dispatch({
        type: GET_ALL_EMPLOYEES,
        payload: res.data.data
      });
    })
    .catch(err => {
      const { status } = err.response;
      if (status === 401) {
        return dispatch(logoutUser());
      }

      dispatch({
        type: GET_ERRORS,
        payload: err
      });
    });
};
