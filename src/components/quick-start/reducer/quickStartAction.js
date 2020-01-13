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
import { BASE_URL } from "../../../app/common/constants/Constants";
import {
  GET_QUICK_START_STATUS,
  QUICK_START_LOADING,
  CREATE_NEW_ADMIN
} from "./quickStartConstants";
import showLoadingAction from "../../../app/common/util/showLoadingUtil";
import { errorHandlingAction } from "../../error/reducer/errorAction";

export const getAdminStatusAction = () => dispatch => {
  axios
    .get(`${BASE_URL}/users/admin/status`)
    .then(res => {
      console.log("resp", res.data);
      dispatch({ type: GET_QUICK_START_STATUS, payload: res.data.data });
    })
    .catch(err => {
      console.error(err);
      dispatch({ type: GET_QUICK_START_STATUS, payload: true });
    });
};

export const createNewAdminAccountAction = payload => dispatch => {
  showLoadingAction(QUICK_START_LOADING, true, dispatch);
  axios
    .post(`${BASE_URL}/users/admin/register`, payload)
    .then(res => {
      const { status, data } = res.data;
      let message = data.message;
      if (status === 201) {
        message = "Administrator account created";
      }
      dispatch({ type: CREATE_NEW_ADMIN, payload: message });
    })
    .catch(err => {
      console.error(err);
      showLoadingAction(QUICK_START_LOADING, false, dispatch);
      errorHandlingAction(err, dispatch);
    });
};
