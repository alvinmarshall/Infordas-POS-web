import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { connect } from "react-redux";
import { closeModel } from "../modalAction";
import ProductCategoryForm from "../../Content/inventory/Product/category/ProductCategoryForm";

const ProductCategoryModal = ({ closeModel, data }) => {
  const [modal, setModal] = useState(true);
  const toggle = () => setModal(closeModel);
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Category Detail</ModalHeader>
      <ModalBody>
        <ProductCategoryForm toggle={toggle} currentCategory={data} />
      </ModalBody>
    </Modal>
  );
};

const mapDispatchToProps = {
  closeModel
};
export default connect(null, mapDispatchToProps)(ProductCategoryModal);
