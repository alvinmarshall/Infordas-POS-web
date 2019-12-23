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
import PropTypes from "prop-types";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import CrmForm from "../../Content/CRM/CrmForm";
import { closeModel } from "../modalAction";
import { connect } from "react-redux";

const CrmModal = ({ closeModel, data }) => {
  const [modal, setModal] = useState(true);
  const toggle = () => setModal(closeModel);
  return (
    <Modal
      className="modal-dialog modal-lg"
      keyboard={false}
      backdrop="static"
      isOpen={modal}
      toggle={toggle}
    >
      <ModalHeader toggle={toggle}>Crm Detail</ModalHeader>
      <ModalBody>
        <CrmForm toggle={toggle} currentCrm={data} />
      </ModalBody>
    </Modal>
  );
};

CrmModal.propTypes = {
  closeModel: PropTypes.func.isRequired,
  data: PropTypes.object
};

const mapDispatchToProps = {
  closeModel
};

export default connect(null, mapDispatchToProps)(CrmModal);
