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
import { Form, FormGroup, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import TextInputWithIcon from "../../../../app/common/forms/TextInputWithIcon";
import {
  createRankAction,
  getRanksAction,
  resetRankMessageAction,
  updateRankAction
} from "./reducers/rankAction";
import SpinnerView from "../../../spinner/SpinnerView";
class RankForm extends Component {
  // componentDidUpdate(prevProps) {
  //   if (this.props.rank.message !== prevProps.rank.message) {
  //     this.props.getRanksAction();
  //     this.props.resetRankMessageAction();
  //   }
  // }

  onSubmitForm = payload => {
    if (payload.id) {
      this.props.updateRankAction(payload);
      return;
    }
    this.props.createRankAction(payload);
  };

  render() {
    const {
      submitting,
      pristine,
      toggle,
      handleSubmit,
      currentRank
    } = this.props;
    const { loading } = this.props.rank;
    console.log("pass ranj", currentRank);
    if (loading) {
      this.props.toggle();
    }
    return (
      <div>
        <Form onSubmit={handleSubmit(this.onSubmitForm)}>
          <FormGroup>
            <Field
              name="position"
              type="text"
              placeholder="position name"
              component={TextInputWithIcon}
            />
          </FormGroup>
          <ModalFooter>
            <button type="button" onClick={toggle} className="btn btn-danger">
              Close
            </button>
            <button
              type="submit"
              disabled={submitting || pristine}
              id="btn_create_company"
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

const action = {
  createRankAction,
  resetRankMessageAction,
  getRanksAction,
  updateRankAction
};
const mapStateToProps = (state, ownProps) => ({
  rank: state.rank,
  initialValues: ownProps.currentRank
});

export default connect(
  mapStateToProps,
  action
)(reduxForm({ form: "rankForm" })(RankForm));
