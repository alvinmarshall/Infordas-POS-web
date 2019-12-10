import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { connect } from "react-redux";
import { closeModel } from "../modalAction";
import CompanyForm from "../../Content/set-up/Company/CompanyForm";

const CompanyModal = ({ closeModel,data }) => {
  const [modal, setModal] = useState(true);
  const toggle = () => setModal(closeModel);
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Company Detail</ModalHeader>
        <ModalBody>
          <CompanyForm toggle={toggle} companyData={data} />
        </ModalBody>
      </Modal>
    </div>
  );
};

const action = {
  closeModel
};
export default connect(null, action)(CompanyModal);
