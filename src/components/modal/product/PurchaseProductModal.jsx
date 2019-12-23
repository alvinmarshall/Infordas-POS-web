import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { closeModel } from "../modalAction";
import PurchaseForm from "../../Content/inventory/Purchase/PurchaseForm";

const PurchaseProductModal = ({ closeModel, data }) => {
  const [modal, setModal] = useState(true);
  const toggle = () => setModal(closeModel);
  return (
    <Modal
      className="modal-dialog modal-xl"
      isOpen={modal}
      toggle={toggle}
      keyboard={false}
      backdrop="static"
    >
      <ModalHeader toggle={toggle}>Purchase Product Detail</ModalHeader>
      <ModalBody>
        <PurchaseForm toggle={toggle} currentProduct={data} />
      </ModalBody>
    </Modal>
  );
};

PurchaseProductModal.propTypes = {
  closeModel: PropTypes.func.isRequired,
  data: PropTypes.object
};

const mapDispatchToProps = {
  closeModel
};

export default connect(null, mapDispatchToProps)(PurchaseProductModal);
