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
  RANK_LOADING,
  GET_ALL_RANKS,
  CREATE_RANK,
  UPDATE_RANK,
  DELETE_RANK,
  RESET_RANK_MESSAGE
} from "./rankConstants";
import { GET_ERRORS } from "../../../../error/reducer/errorConstants";
import { logoutUser } from "../../../../Auth/reducers/authAction";
const options = {
  headers: {
    Authorization: `Bearer ${localStorage.auth_token}`
  }
};
//
// ─── GET ALL RANKS ──────────────────────────────────────────────────────────────
//

export const getRanksAction = () => dispatch => {
  dispatch({
    type: RANK_LOADING,
    payload: true
  });
  axios
    .get("/rank", options)
    .then(res => {
      dispatch({ type: GET_ALL_RANKS, payload: res.data.data });
    })
    .catch(err => {
      const { status } = err.response;
      console.log(status);
      if (status === 401) {
        dispatch({ type: RANK_LOADING, payload: false });
        return dispatch(logoutUser());
      }
      dispatch({ type: GET_ERRORS, payload: err });
      dispatch({ type: RANK_LOADING, payload: false });
    });
};

//
// ─── CREATE RANK ────────────────────────────────────────────────────────────────
//

export const createRankAction = payload => dispatch => {
  dispatch({
    type: RANK_LOADING,
    payload: true
  });
  axios
    .post("/rank/create-rank", payload, options)
    .then(res => {
      dispatch({ type: CREATE_RANK, payload: res.data.data.message });
    })
    .catch(err => {
      const { status } = err.response;
      if (status === 401) {
        dispatch({ type: RANK_LOADING, payload: false });
        return dispatch(logoutUser);
      }
      dispatch({ type: GET_ERRORS, payload: err });
      dispatch({ type: RANK_LOADING, payload: false });
    });
};

//
// ─── UPDATE RANK ────────────────────────────────────────────────────────────────
//

export const updateRankAction = payload => dispatch => {
  dispatch({
    type: RANK_LOADING,
    payload: true
  });
  axios
    .put("/rank/update-rank", payload, options)
    .then(res => {
      dispatch({ type: UPDATE_RANK, payload: res.data.data.message });
    })
    .catch(err => {
      const { status } = err.response;
      if (status === 401) {
        return dispatch(logoutUser);
      }
      dispatch({ type: GET_ERRORS, payload: err });
      dispatch({ type: RANK_LOADING, payload: false });
    });
};

//
// ─── DELETE RANK ────────────────────────────────────────────────────────────────
//

export const deleteRankAction = payload => dispatch => {
  dispatch({
    type: RANK_LOADING,
    payload: true
  });
  axios
    .delete(`/rank/delete-rank/${payload}`, options)
    .then(res => {
      dispatch({ type: DELETE_RANK, payload: res.data.data.message });
    })
    .catch(err => {
      const { status } = err.response;
      if (status === 401) {
        return dispatch(logoutUser);
      }
      dispatch({ type: GET_ERRORS, payload: err });
      dispatch({ type: RANK_LOADING, payload: false });
    });
};

export const resetRankMessageAction = () => dispatch => {
  dispatch({
    type: RESET_RANK_MESSAGE,
    payload: ""
  });
};
