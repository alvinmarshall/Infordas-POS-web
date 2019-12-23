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

import React, { Component } from "react";
import CrmTable from "./CrmTable";
import { connect } from "react-redux";
import { openModal } from "../../modal/modalAction";
import { CRM_MODAL } from "./reducer/crmConstant";
class CrmSupplier extends Component {
  render() {
    const { openModal } = this.props;
    return (
      <div>
        <div className="row">
          <div className="col-md-10 mx-auto">
            {/* /.card */}
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Supplier Detail</h3>
                <div className="card-tools">
                  <div
                    className="input-group input-group-sm"
                    style={{ width: 150 }}
                  >
                    <div className="input-group-append">
                      <button
                        className="btn btn-default"
                        onClick={() => openModal(CRM_MODAL)}
                      >
                        <i className="fas fa-plus" /> Add Supplier
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* /.card-header */}
              <CrmTable />
              {/* /.card-body */}
            </div>
            {/* /.card */}
          </div>
          {/* /.col */}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  openModal
};
export default connect(null, mapDispatchToProps)(CrmSupplier);
