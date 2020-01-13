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

import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getAdminStatusAction,
  createNewAdminAccountAction
} from "./reducer/quickStartAction";
import { openModal } from "../modal/modalAction";
import { Field, reduxForm } from "redux-form";
import TextInputWithIcon from "../../app/common/forms/TextInputWithIcon";
import { Form, FormGroup } from "reactstrap";
import { combineValidators, composeValidators, isRequired } from "revalidate";
import { isValidTel } from "../../app/common/util/custom-validate";
import SpinnerView from "../spinner/SpinnerView";

const validate = combineValidators({
  name: isRequired({ message: "full name is required" }),
  username: isRequired({ message: "username is required" }),
  contact: composeValidators(
    isRequired({ message: "contact is required" }),
    isValidTel
  )(),
  password: isRequired({ message: "provide a password" })
});

class QuickStart extends Component {
  state = {
    message: null
  };

  componentDidMount() {
    this.setState({ errors: this.props.errors });
    this.props.getAdminStatusAction();
  }

  componentDidUpdate(prevProps) {
    if (this.props.status !== prevProps.status) {
      if (this.props.status === true) {
        window.location.href = "/";
      }
    }

    if (this.props.quickStart.message !== prevProps.quickStart.message) {
      const { message } = this.props.quickStart;
      this.setState({ message });
      if (message) {
        if (message === "Administrator account created") {
          window.location.href = "/";
        }
      }
    }
  }

  onFormSubmit = payload => {
    const confirm = window.confirm(
      `Note! Your username is now admin_${payload.username}`
    );
    if (confirm) {
      this.props.createNewAdminAccountAction(payload);
    }
  };

  render() {
    const { message } = this.state;
    const { handleSubmit, invalid } = this.props;
    const { loading } = this.props.quickStart;
    return (
      <div className="register-page bg-dark">
        <div className="register-box">
          <div className="register-logo">
            <span>OSERBY ADMIN</span>
            <a href="#f">
              <br />
              <b>Oserby </b>ADMIN
            </a>
          </div>
          <div className="card">
            <div className="card-header bg-primary">Getting Started</div>
            <div className="card-body register-card-body">
              <p className="login-box-msg text-bold mb-3">
                Create first admin user
              </p>
              <Form onSubmit={handleSubmit(this.onFormSubmit)}>
                <FormGroup>
                  <Field
                    name="name"
                    type="text"
                    component={TextInputWithIcon}
                    icon="fas fa-user"
                    placeholder="Full name"
                  ></Field>
                </FormGroup>

                <FormGroup>
                  <Field
                    name="username"
                    type="text"
                    component={TextInputWithIcon}
                    icon="fas fa-user"
                    placeholder="username"
                  ></Field>
                </FormGroup>

                <FormGroup>
                  <Field
                    name="contact"
                    type="text"
                    component={TextInputWithIcon}
                    icon="fas fa-phone"
                    placeholder="000 0000 000"
                  ></Field>
                </FormGroup>

                <FormGroup>
                  <Field
                    name="email"
                    type="email"
                    component={TextInputWithIcon}
                    icon="fas fa-envelope"
                    placeholder="Email"
                  ></Field>
                </FormGroup>

                <FormGroup>
                  <Field
                    name="password"
                    type="password"
                    component={TextInputWithIcon}
                    icon="fas fa-lock"
                    placeholder="Password"
                  ></Field>
                </FormGroup>

                <FormGroup>
                  {(loading && (
                    <span className="text-center">
                      {" "}
                      <SpinnerView size="sm" type="border" />
                    </span>
                  )) || (
                    <button
                      disabled={invalid}
                      type="submit"
                      className="mt-3 btn btn-primary btn-block"
                    >
                      Register
                    </button>
                  )}
                </FormGroup>
              </Form>
              {message && (
                <div className="text-center text-danger">{message}</div>
              )}
            </div>
            {/* /.form-box */}
          </div>
          {/* /.card */}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  getAdminStatusAction,
  openModal,
  createNewAdminAccountAction
};

const mapStateToProps = state => ({
  status: state.quickStart.status,
  errors: state.error,
  quickStart: state.quickStart
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({ form: "adminRegisterForm", validate })(QuickStart));
