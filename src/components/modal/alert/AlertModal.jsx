import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { closeModel } from "../modalAction";

const AlertModal = ({ closeModel, data }) => {
  const [modal, setModal] = useState(true);
  const toggle = () => setModal(closeModel);
  return (
      
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Alert message</ModalHeader>
      <ModalBody>
        <p className="card-text">{data && data.message}</p>
      </ModalBody>
    </Modal>
  );
};

const mapDispatchToProps = {
  closeModel
};

AlertModal.propTypes = {
  closeModel: PropTypes.func,
  data: PropTypes.object
};
export default connect(null, mapDispatchToProps)(AlertModal);
