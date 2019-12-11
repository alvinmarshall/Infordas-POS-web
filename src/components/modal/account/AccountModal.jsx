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

import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import PropTypes from "prop-types";
import AccountForm from "../../Content/account/AccountForm";
import { connect } from "react-redux";
import { closeModel } from "../modalAction";

const AccountModal = ({ closeModel,data }) => {
  const [modal, setModal] = useState(true);
  const toggle = () => setModal(closeModel);
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>User Account Detail</ModalHeader>
        <ModalBody>
          <AccountForm toggle={toggle} profile={data} />
        </ModalBody>
      </Modal>
    </div>
  );
};

AccountModal.propTypes = {
  closeModel: PropTypes.func.isRequired
};

const action = {
  closeModel
};

export default connect(null, action)(AccountModal);
