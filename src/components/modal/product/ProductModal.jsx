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
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { closeModel } from "../modalAction";
import ProductForm from "../../Content/Product/ProductForm";

const ProductModal = ({ closeModel, data }) => {
  const [modal, setModal] = useState(true);
  const toggle = () => setModal(closeModel);
  return (
    <div>
      <Modal
        className="modal-dialog modal-xl"
        isOpen={modal}
        toggle={toggle}
        keyboard={false}
        backdrop={"static"}
      >
        <ModalHeader toggle={toggle}>Product Detail</ModalHeader>
        <ModalBody>
          <ProductForm toggle={toggle}  currentProduct={data}/>
        </ModalBody>
      </Modal>
    </div>
  );
};

ProductModal.propTypes = {
  closeModel: PropTypes.func.isRequired,
  data: PropTypes.object
};

const mapDispatchToProps = {
  closeModel
};
export default connect(null, mapDispatchToProps)(ProductModal);
