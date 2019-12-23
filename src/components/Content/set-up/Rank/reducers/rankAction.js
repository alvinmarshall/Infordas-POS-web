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
import { errorHandlingAction } from "../../../../error/reducer/errorAction";

//
// ─── GET ALL RANKS ──────────────────────────────────────────────────────────────
//

export const getRanksAction = () => dispatch => {
  showLoading(true, dispatch);
  axios
    .get("/rank")
    .then(res => {
      dispatch({ type: GET_ALL_RANKS, payload: res.data.data });
    })
    .catch(err => {
      showLoading(false, dispatch);
      errorHandlingAction(err, dispatch);
    });
};

//
// ─── CREATE RANK ────────────────────────────────────────────────────────────────
//

export const createRankAction = payload => dispatch => {
  showLoading(true, dispatch);
  axios
    .post("/rank/create-rank", payload)
    .then(res => {
      dispatch({ type: CREATE_RANK, payload: res.data.data.message });
    })
    .catch(err => {
      showLoading(false, dispatch);
      errorHandlingAction(err, dispatch);
    });
};

//
// ─── UPDATE RANK ────────────────────────────────────────────────────────────────
//

export const updateRankAction = payload => dispatch => {
  showLoading(true, dispatch);
  axios
    .put("/rank/update-rank", payload)
    .then(res => {
      dispatch({ type: UPDATE_RANK, payload: res.data.data.message });
    })
    .catch(err => {
      showLoading(false, dispatch);
      errorHandlingAction(err, dispatch);
    });
};

//
// ─── DELETE RANK ────────────────────────────────────────────────────────────────
//

export const deleteRankAction = payload => dispatch => {
  showLoading(true, dispatch);
  axios
    .delete(`/rank/delete-rank/${payload}`)
    .then(res => {
      dispatch({ type: DELETE_RANK, payload: res.data.data.message });
    })
    .catch(err => {
      showLoading(false, dispatch);
      errorHandlingAction(err, dispatch);
    });
};

export const resetRankMessageAction = () => dispatch => {
  dispatch({
    type: RESET_RANK_MESSAGE,
    payload: ""
  });
};

const showLoading = (show, dispatch) => {
  dispatch({ type: RANK_LOADING, payload: show });
};
