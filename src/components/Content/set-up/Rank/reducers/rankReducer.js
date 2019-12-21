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

import createReducer from "../../../../../app/common/util/reducerUtil";
import {
  CREATE_RANK,
  RANK_LOADING,
  GET_ALL_RANKS,
  UPDATE_RANK,
  DELETE_RANK,
  RESET_RANK_MESSAGE
} from "./rankConstants";

const initialState = {
  loading: false,
  message: "",
  ranks: []
};

export const createRank = (state, payload) => {
  return { ...state, loading: false, message: payload };
};

export const isLoading = (state, payload) => {
  return { ...state, loading: payload };
};

export const getRanks = (state, payload) => {
  return { ...state, ranks: payload, loading: false };
};

export const updateRank = (state, payload) => {
  return { ...state, loading: false, message: payload };
};

export const deleteRank = (state, payload) => {
  return { ...state, loading: false, message: payload };
};

export const resetRankMessage = (state, payload) => {
  return { ...state, message: payload || "" };
};

export default createReducer(initialState, {
  [CREATE_RANK]: createRank,
  [RANK_LOADING]: isLoading,
  [GET_ALL_RANKS]: getRanks,
  [UPDATE_RANK]: updateRank,
  [DELETE_RANK]: deleteRank,
  [RESET_RANK_MESSAGE]: resetRankMessage
});
