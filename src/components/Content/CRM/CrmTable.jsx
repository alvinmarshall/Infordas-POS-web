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
import { connect } from "react-redux";
import { CRM_MODAL } from "./reducer/crmConstant";
import { openModal } from "../../modal/modalAction";

const CrmTable = ({ data, openModal, crmType, handleDelete }) => {
  data &&
    data.map(d => {
      return (d.crmType = crmType);
    });

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Contact</th>
          <th>Email</th>
          <th>Address</th>
          <th>PrevDue</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.contact}</td>
              <td>{data.email}</td>
              <td>{data.address}</td>
              <td>{data.prevDue}</td>
              <td>
                <div className="btn-group">
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => openModal(CRM_MODAL, { data })}
                  >
                    <i className="fa fa-edit"></i>
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(data)}
                  >
                    <i className="fa fa-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

CrmTable.propTypes = {
  data: PropTypes.array.isRequired
};
const mapDispatchToProps = {
  openModal
};
export default connect(null, mapDispatchToProps)(CrmTable);
