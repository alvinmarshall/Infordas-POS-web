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
  combineValidators,
  isRequired,
  createValidator,
  composeValidators
} from "revalidate";
import { reduxForm, Field } from "redux-form";
import PropTypes from "prop-types";
import TextInputWithIcon from "../../../../app/common/forms/TextInputWithIcon";
import {
  Form,
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup
} from "reactstrap";
import SelectInput from "../../../../app/common/forms/SelectInput";
import {
  genderOption,
  maritalOption,
  statusOption
} from "../../../../app/common/constants/Constants";
import { createEmployeeAction } from "../../Employee/reducers/employeeAction";

const isValidEmail = createValidator(
  message => value => {
    if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      return message;
    }
  },
  "Invalid email address"
);

const isValidTel = createValidator(
  message => value => {
    if (value && !/^\(?[\d]{3}\)?[\s-]?[\d]{3}[\s-]?[\d]{4}$/i.test(value)) {
      return message;
    }
  },
  "Invalid tel number"
);

const validate = combineValidators({
  fullName: isRequired({ message: "employee name is required" }),
  dob: isRequired({ message: "select a date" }),
  gender: isRequired({ message: "select gender type" }),
  email: isValidEmail({ message: "invalid email address" }),
  maritalStatus: isRequired({ message: "select marriage status" }),
  contact: composeValidators(
    isRequired({ message: "contact is required" }),
    isValidTel
  )(),
  address: isRequired({ message: "provide address" })
});

class NewEmployee extends Component {
  onFormSubmit = payload => {
    console.log("pay", payload);
    if (payload.uuid) {
      return alert("update form");
    }
    this.props.createEmployeeAction(payload);
  };

  render() {
    const { handleSubmit, submitting, pristine } = this.props;
    return (
      <div>
        <div className="col-md-9">
          <Card className="card">
            <Form
              className="form-horizontal"
              onSubmit={handleSubmit(this.onFormSubmit)}
            >
              <CardHeader className="p-2">
                <ul className="nav nav-pills">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      href="#basic"
                      data-toggle="tab"
                    >
                      Basic
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#company" data-toggle="tab">
                      Company
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#other" data-toggle="tab">
                      Other
                    </a>
                  </li>
                </ul>
              </CardHeader>
              {/* /.card-header */}
              <CardBody >
                <div className="tab-content">
                  <div className="tab-pane active" id="basic">
                    {/* Basic */}
                    <FormGroup className=" row">
                      <Label
                        className="col-sm-2 col-form-label"
                      >
                        Name
                      </Label>
                      <div className="col-sm-10">
                        {/* name */}
                        <Field
                          name="fullName"
                          placeholder="Surname other name"
                          type="text"
                          component={TextInputWithIcon}
                        />
                      </div>
                    </FormGroup>
                    <FormGroup className=" row">
                      <Label className="col-sm-2 col-form-label">Gender</Label>
                      {/* gender */}
                      <div className="col-sm-10">
                        <Field
                          name="gender"
                          type="text"
                          options={genderOption}
                          component={SelectInput}
                        />
                      </div>
                    </FormGroup>
                    <FormGroup className=" row">
                      <Label className="col-sm-2 col-form-label">DOB</Label>
                      <div className="col-sm-10">
                        <Field
                          name="dob"
                          placeholder="dd/mm/yyyy"
                          type="date"
                          component={TextInputWithIcon}
                        />
                      </div>
                    </FormGroup>
                    <FormGroup className="row">
                      <Label className="col-sm-2 col-form-label">Contact</Label>
                      <div className="col-sm-10">
                        <Field
                          name="contact"
                          placeholder="000 000 0000"
                          type="text"
                          component={TextInputWithIcon}
                        />
                      </div>
                    </FormGroup>
                    <FormGroup className=" row">
                      <Label className="col-sm-2 col-form-label">Address</Label>
                      <div className="col-sm-10">
                        <Field
                          name="address"
                          placeholder="address"
                          type="text"
                          component={TextInputWithIcon}
                        />
                      </div>
                    </FormGroup>

                    <FormGroup className=" row">
                      <Label className="col-sm-2 col-form-label">Email</Label>
                      <div className="col-sm-10">
                        <Field
                          name="email"
                          placeholder="example@me.com"
                          type="text"
                          component={TextInputWithIcon}
                        />
                      </div>
                    </FormGroup>

                    <FormGroup className="row">
                      <Label className="col-sm-2 col-form-label">
                        Marital Status
                      </Label>
                      <div className="col-sm-10">
                        <Field
                          name="maritalStatus"
                          options={maritalOption}
                          component={SelectInput}
                        />
                      </div>
                    </FormGroup>

                    <FormGroup className=" row">
                      <Label className="col-sm-2 col-form-label">Status</Label>
                      <div className="col-sm-10">
                        <Field
                          name="status"
                          options={statusOption}
                          component={SelectInput}
                        />
                      </div>
                    </FormGroup>

                    <FormGroup className=" row">
                      <Label className="col-sm-2 col-form-label">
                        Shift Hours
                      </Label>
                      <div className="col-sm-10">
                        <Field
                          name="hours"
                          placeholder="1.5 = 1 hour 30min"
                          component={TextInputWithIcon}
                        />
                      </div>
                    </FormGroup>

                    <FormGroup className=" row">
                      <Label className="col-sm-2 col-form-label">
                        Position
                      </Label>
                      <div className="col-sm-10">TODO</div>
                    </FormGroup>

                    <FormGroup className="row">
                      <div className="offset-sm-2 col-sm-10">
                        <button
                          disabled={submitting || pristine}
                          type="submit"
                          className="btn btn-danger"
                        >
                          Submit
                        </button>
                      </div>
                    </FormGroup>

                    {/* /.Basic */}
                  </div>
                  {/* /.tab-pane */}
                  <div className="tab-pane" id="company">
                    {/* Company */}
                  </div>
                  {/* /.tab-pane */}
                  <div className="tab-pane" id="other"></div>
                  {/* /.tab-pane */}
                </div>
                {/* /.other */}
              </CardBody>
              {/* /.card-body */}
            </Form>
          </Card>
          {/* /.nav-tabs-custom */}
        </div>
      </div>
    );
  }
}

NewEmployee.propTypes = {
  createEmployeeAction: PropTypes.func.isRequired
};

const action = {
  createEmployeeAction
};

const mapState = (state, ownProps) => {
  const data = ownProps.history.location.profile;
  if (data) {
    console.log("profile", data);
    return { initialValues: data };
  }
  return { employee: state.employee };
};
export default connect(
  mapState,
  action
)(
  reduxForm({ form: "employeeForm", enableReinitialize: true, validate })(
    NewEmployee
  )
);
