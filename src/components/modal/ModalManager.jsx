import React from "react";
import { connect } from "react-redux";
import TestModal from "../../testcomponent/TestModal";
import CompanyModal from "./company/CompanyModal";
import RankModal from "./rank/RankModal";
const ModalManager = ({ currentModal }) => {
  let renderedModal;
  if (currentModal) {
    const { modalType, modalProps } = currentModal;
    const ModalComponent = modalLookUps[modalType];
    renderedModal = <ModalComponent {...modalProps} />;
  }
  return <span>{renderedModal}</span>;
};

const modalLookUps = {
  TestModal,
  CompanyModal,
  RankModal
};

const mapState = state => ({
  currentModal: state.modals
});

export default connect(mapState)(ModalManager);
