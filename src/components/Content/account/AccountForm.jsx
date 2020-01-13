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
import { reduxForm, Field } from "redux-form";
import { Form, FormGroup, ModalFooter } from "reactstrap";
import TextInputWithIcon from "../../../app/common/forms/TextInputWithIcon";
import SelectInput from "../../../app/common/forms/SelectInput";
import { combineValidators, isRequired, composeValidators } from "revalidate";
import { getRanksAction } from "../set-up/Rank/reducers/rankAction";
import {
  createUserAccountAction,
  resetAccountMessageAction
} from "./reducer/accountAction";
import SpinnerView from "../../spinner/SpinnerView";
import { isValidTel } from "../../../app/common/util/custom-validate";

const validate = combineValidators({
  fullName: isRequired({ message: "full name is required" }),
  contact: composeValidators(
    isRequired({ message: "contact is required" }),
    isValidTel
  )(),
  position: isRequired({ message: "Select user position" })
});

class AccountForm extends Component {
  state = {
    ranks: []
  };
  componentDidMount() {
    this.props.getRanksAction();
    this.props.resetAccountMessageAction();
  }

  componentDidUpdate(prevProps) {
    if (this.props.rank.ranks !== prevProps.rank.ranks) {
      this.setState({ ranks: this.props.rank.ranks });
    }
  }

  onSubmitForm = payload => {
    const rank = this.state.ranks.filter(
      r => r.position === payload.position
    )[0];
    payload.name = payload.fullName;
    payload.rank = rank.id || 0;
    payload.username =
      payload.username === undefined ? payload.contact : payload.username;
    payload.password =
      payload.password === undefined ? payload.contact : payload.password;
    this.props.toggle();
    this.props.createUserAccountAction(payload);
  };
  render() {
    const { ranks } = this.state;
    const { handleSubmit, submitting, toggle, loading } = this.props;
    let rankOptions = [{ key: 0, value: "" }];
    ranks.forEach((rank, index) => {
      rankOptions.push({ key: ++index, value: rank.position });
    });

    return (
      <div>
        <Form onSubmit={handleSubmit(this.onSubmitForm)}>
          <FormGroup>
            <Field
              type="text"
              name="fullName"
              placeholder="surname other name"
              component={TextInputWithIcon}
            />
          </FormGroup>
          <FormGroup>
            <Field
              type="text"
              name="username"
              placeholder="default username is contact"
              component={TextInputWithIcon}
            />
          </FormGroup>
          <FormGroup>
            <Field
              type="text"
              name="contact"
              placeholder="000 000 0000"
              component={TextInputWithIcon}
            />
          </FormGroup>
          <FormGroup>
            <Field
              type="password"
              name="password"
              placeholder="default password is contact"
              component={TextInputWithIcon}
            />
          </FormGroup>
          <FormGroup>
            <Field
              name="position"
              placeholder="position"
              options={rankOptions}
              component={SelectInput}
            />
          </FormGroup>
          <ModalFooter>
            <button className="btn btn-danger" onClick={toggle}>
              Close
            </button>
            <button
              disabled={submitting}
              type="submit"
              className="btn btn-primary"
            >
              Save changes
            </button>
            {loading && <SpinnerView />}
          </ModalFooter>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  getRanksAction,
  createUserAccountAction,
  resetAccountMessageAction
};

const mapStateToProps = (state, ownProps) => ({
  initialValues: ownProps.profile,
  rank: state.rank
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({ form: "accountForm", enableReinitialize: true, validate })(
    AccountForm
  )
);
