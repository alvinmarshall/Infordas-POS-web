import React, { Component } from "react";
import { openModal } from "../components/modal/modalAction";
import { connect } from "react-redux";
import LoginForm from "../components/Auth/Login/LoginForm";

class TestComponent extends Component {
  render() {
    const { openModal } = this.props;
    return (
      <div>
        <h1>Test Area</h1>

        <button
          className="btn btn-primary"
          onClick={() => openModal("TestModal")}
        >
          Open Modal
        </button>
        <LoginForm/>
      </div>
    );
  }
}

const action = {
  openModal
};
export default connect(null, action)(TestComponent);
