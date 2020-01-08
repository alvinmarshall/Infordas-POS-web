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
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Form, FormGroup, ModalFooter } from "reactstrap";
import { reduxForm, Field } from "redux-form";
import SpinnerView from "../../../../spinner/SpinnerView";
import { combineValidators, isRequired } from "revalidate";
import { createBrandAction, updateBrandAction } from "../reducer/brandAction";
import TextInputWithIcon from "../../../../../app/common/forms/TextInputWithIcon";

const validate = combineValidators({
  name: isRequired({ message: "brand name is required" })
});

class ProductBrandForm extends Component {
  onSubmitForm = payload => {
    this.props.toggle();
    if (payload.id) {
      const cancel = window.confirm(
        `Do you want to save changes made to ${payload.name} ?`
      );
      if (!cancel) return;
      this.props.updateBrandAction(payload);
      return;
    }
    this.props.createBrandAction(payload);
  };
  render() {
    const { loading } = this.props.product;
    const { handleSubmit, submitting, pristine, toggle } = this.props;
    return (
      <div>
        <Form onSubmit={handleSubmit(this.onSubmitForm)}>
          <FormGroup>
            <Field
              name="name"
              type="text"
              placeholder="brand name"
              component={TextInputWithIcon}
            />
            <Field
              name="description"
              type="text"
              placeholder="description"
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

const mapStateToProps = (state, ownProps) => ({
  initialValues: ownProps.currentBrand,
  product: state.product
});

const mapDispatchToProps = {
  createBrandAction,
  updateBrandAction
};

ProductBrandForm.propTypes = {
  createBrandAction: PropTypes.func,
  updateBrandAction: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({ form: "productBrandForm", validate })(ProductBrandForm));
