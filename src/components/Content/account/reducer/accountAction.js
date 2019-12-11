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

//
// ─── REGISTER USER ACCOUNT ────────────────────────────────────────────────────────
//

import axios from "axios";
import {
  ACCOUNT_LOADING,
  CREATE_USER_ACCOUNT,
  RESET_ACCOUNT_MESSAGE
} from "./accountConstants";
import { GET_ERRORS } from "../../../error/reducer/errorConstants";
import { logoutUser } from "../../../Auth/reducers/authAction";
const options = {
  headers: { Authorization: `Bearer ${localStorage.auth_token}` }
};
export const createUserAccountAction = payload => dispatch => {
  dispatch({ type: ACCOUNT_LOADING, payload: true });
  axios
    .post("/users/register", payload, options)
    .then(res => {
      dispatch({ type: CREATE_USER_ACCOUNT, payload: res.data.data.message });
    })
    .catch(err => {
      dispatch({ type: ACCOUNT_LOADING, payload: false });
      const { status } = err.response;
      if (status === 401) {
        return dispatch(logoutUser());
      }
      dispatch({ type: GET_ERRORS, payload: err });
    });
};

export const resetAccountMessageAction = () => dispatch => {
  dispatch({ type: RESET_ACCOUNT_MESSAGE, payload: "" });
};
