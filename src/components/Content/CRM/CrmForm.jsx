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
import { Form, FormGroup, Card, CardBody, CardFooter, Label } from "reactstrap";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import TextInputWithIcon from "../../../app/common/forms/TextInputWithIcon";
import { combineValidators, isRequired } from "revalidate";
import PropTypes from "prop-types";
import { createCrmAction, updateCrmAction } from "./reducer/crmAction";

const validate = combineValidators({
  name: isRequired({ message: "full name is required" }),
  address: isRequired({ message: "address is required" })
});
class CrmForm extends Component {
  onFormSubmit = payload => {
    this.props.toggle();
    console.log("pay", payload);
    if (payload.uid) {
      return this.props.updateCrmAction(payload);
    }
    this.props.createCrmAction(payload);
  };
  render() {
    const { toggle, submitting, pristine, handleSubmit } = this.props;
    return (
      <Card>
        <Form onSubmit={handleSubmit(this.onFormSubmit)}>
          <CardBody>
            <FormGroup className="row">
              <Label className="col-sm-2">Name</Label>
              <div className="col-sm-10">
                <Field
                  name="name"
                  placeholder="surname othername"
                  component={TextInputWithIcon}
                />
              </div>
            </FormGroup>
            <FormGroup className="row">
              <Label className="col-sm-2">contact</Label>
              <div className="col-sm-10">
                <Field
                  name="contact"
                  placeholder="000 000 0000"
                  component={TextInputWithIcon}
                />
              </div>
            </FormGroup>
            <FormGroup className="row">
              <Label className="col-sm-2">Address</Label>
              <div className="col-sm-10">
                <Field
                  name="address"
                  placeholder="address"
                  component={TextInputWithIcon}
                />
              </div>
            </FormGroup>
            <FormGroup className="row">
              <Label className="col-sm-2">Email</Label>
              <div className="col-sm-10">
                <Field
                  name="email"
                  placeholder="example@me.com"
                  component={TextInputWithIcon}
                />
              </div>
            </FormGroup>
            <FormGroup className="row">
              <Label className="col-sm-2">Prev Due</Label>
              <div className="col-sm-10">
                <Field
                  name="previousDue"
                  readOnly
                  component={TextInputWithIcon}
                />
              </div>
            </FormGroup>
          </CardBody>
          <CardFooter>
            <FormGroup>
              <div className="float-right">
                <button
                  type="button"
                  onClick={toggle}
                  className="btn btn-danger mr-2"
                >
                  Cancel
                </button>
                <button
                  disabled={submitting || pristine}
                  type="submit"
                  className="btn btn-info"
                >
                  Submit
                </button>
              </div>
            </FormGroup>
          </CardFooter>
        </Form>
      </Card>
    );
  }
}

CrmForm.propTypes = {
  createCrmAction: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  createCrmAction,
  updateCrmAction
};
const mapStateToProps = (state, ownProps) => ({
  initialValues: ownProps.currentCrm
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({ form: "crmForm", enableReinitialize: true, validate })(CrmForm));
