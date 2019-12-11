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

import React from "react";
import PropTypes from "prop-types";
import { openModal } from "../../../modal/modalAction";
import { RANK_MODAL } from "./reducers/rankConstants";

const RankTable = ({ ranks,openModal }) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th style={{ width: 10 }}>#</th>
          <th>Position</th>
          <th>Assigned Position</th>
          <th style={{ width: 40 }}>Percentage</th>
        </tr>
      </thead>
      <tbody>
        {ranks &&
          ranks.map((rank, index) => (
            <tr
              key={index++}
              onClick={() => {
                openModal(RANK_MODAL, { data: rank });
              }}
            >
              <td>{index}.</td>
              <td>{rank && rank.position}</td>
              <td>
                <div className="progress progress-xs">
                  <div
                    className="progress-bar progress-bar-danger"
                    style={{ width: `${rank.count || 0}%` }}
                  />
                </div>
              </td>
              <td>
                <span className="badge bg-danger">{rank.count || 0}%</span>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

RankTable.propTypes = {};

export default RankTable;
