import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { connect } from "react-redux";
import { closeModel } from "../modalAction";
import RankForm from "../../Content/set-up/Rank/RankForm";

const RankModal = ({ closeModel, data }) => {
  const [modal, setModal] = useState(true);
  const toggle = () => setModal(closeModel);
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Rank Detail</ModalHeader>
        <ModalBody>
          <RankForm toggle={toggle} />
        </ModalBody>
      </Modal>
    </div>
  );
};
const actions = {
  closeModel
};
export default connect(null, actions)(RankModal);
