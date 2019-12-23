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
import { Form, CardBody, Card, FormGroup, Label } from "reactstrap";
import { connect } from "react-redux";
import { reduxForm, Field, change } from "redux-form";
import TextInputWithIcon from "../../../../app/common/forms/TextInputWithIcon";
import { combineValidators, isRequired } from "revalidate";
import SpinnerView from "../../../spinner/SpinnerView";
import { createNewPurchaseAction } from "./reducer/purchaseAction";
import PropType from "prop-types";

const validate = combineValidators({
  invoiceNo: isRequired({ message: "provide invoice reference number" }),
  supplierName: isRequired({ message: "supplier name can't be empty" }),
  uuid: isRequired({ message: "product identity is required" }),
  buyPrice: isRequired({ message: "buy price is required" }),
  stock: isRequired({ message: "stock is required" }),
  retailPrice: isRequired({ message: "retail price is required" })
});

const formName = "purchaseForm";

class PurchaseForm extends Component {
  state = {
    quantity: 0,
    buyPrice: 0,
    retailPrice: 0,
    totalBuyPrice: 0
  };
  onFormSubmit = payload => {
    console.log("pyalo", payload);
    this.props.toggle();
    if (payload.uuid) {
      this.props.createNewPurchaseAction(payload);
    }
  };

  handleQuantity = evt => {
    let currentStock = 0;
    if (this.props.currentProduct && this.props.currentProduct.stock !== null) {
      currentStock = parseInt(this.props.currentProduct.stock);
    }
    const newStock = currentStock + parseInt(evt.target.value);
    this.setState({ quantity: newStock });
    const qty = evt.target.value;
    this.calculateOnQuantityChange(qty);
  };

  calculateTotalBuyPrice = evt => {
    this.setState({ buyPrice: evt.target.value });
    const bprice = parseInt(evt.target.value);
    const qty = this.state.quantity;
    const totalBuyPrice = qty * bprice;
    this.props.dispatch(change(formName, "totalBuyPrice", totalBuyPrice));
  };
  calculateTotalRetailPrice = evt => {
    this.setState({ retailPrice: evt.target.value });
    const rprice = parseInt(evt.target.value);
    const qty = this.state.quantity;
    const totalRetailPrice = qty * rprice;
    this.props.dispatch(change(formName, "totalRetailPrice", totalRetailPrice));
  };
  calculateOnQuantityChange = value => {
    const bprice = this.state.buyPrice;
    const rprice = this.state.retailPrice;
    const qty = value || 0;
    const totalBuyPrice = qty * bprice;
    const totalRetailPrice = qty * rprice;
    this.props.dispatch(change(formName, "totalBuyPrice", totalBuyPrice));
    this.props.dispatch(change(formName, "totalRetailPrice", totalRetailPrice));
  };
  render() {
    const { toggle, handleSubmit, submitting, pristine, invalid } = this.props;
    const { loading } = this.props.inventory;
    return (
      <Card className="card-info">
        {/* /.card-header */}
        {/* form start */}
        <Form
          className="form-horizontal"
          onSubmit={handleSubmit(this.onFormSubmit)}
        >
          <CardBody>
            <FormGroup className="form-group row">
              <Label className="col-sm-2 col-form-label">Invoice No</Label>
              <div className="col-sm-10">
                <Field
                  name="invoiceNo"
                  component={TextInputWithIcon}
                  placeholder="invoice number"
                />
              </div>
            </FormGroup>

            <FormGroup className="form-group row">
              <Label className="col-sm-2 col-form-label">Supplier Name</Label>
              <div className="col-sm-10">
                <Field
                  name="supplierName"
                  component={TextInputWithIcon}
                  placeholder="supplier name"
                />
              </div>
            </FormGroup>

            <FormGroup className="form-group row">
              <Label className="col-sm-2 col-form-label">
                Product Identity
              </Label>
              <div className="col-sm-10">
                <Field
                  readOnly
                  name="uuid"
                  component={TextInputWithIcon}
                  placeholder="uuid"
                />
              </div>
            </FormGroup>

            <FormGroup className="form-group row">
              <Label className="col-sm-2 col-form-label">Product Name</Label>
              <div className="col-sm-10">
                <Field
                  name="name"
                  component={TextInputWithIcon}
                  placeholder="purchase name"
                />
              </div>
            </FormGroup>

            <FormGroup className="form-group row">
              <Label className="col-sm-2 col-form-label">Quantity</Label>
              <div className="col-sm-10">
                <Field
                  name="stock"
                  type="number"
                  onChange={this.handleQuantity}
                  component={TextInputWithIcon}
                  placeholder="quantity"
                />
              </div>
            </FormGroup>

            <FormGroup className="form-group row">
              <Label className="col-sm-2 col-form-label">Buy Price</Label>
              <div className="col-sm-10">
                <Field
                  name="buyPrice"
                  component={TextInputWithIcon}
                  placeholder="0.00"
                  onChange={this.calculateTotalBuyPrice}
                />
              </div>
            </FormGroup>

            <FormGroup className="form-group row">
              <Label className="col-sm-2 col-form-label">Retail Price</Label>
              <div className="col-sm-10">
                <Field
                  name="retailPrice"
                  component={TextInputWithIcon}
                  placeholder="0.00"
                  onChange={this.calculateTotalRetailPrice}
                />
              </div>
            </FormGroup>

            <FormGroup className="form-group row">
              <Label className="col-sm-2 col-form-label">Total Buy Price</Label>
              <div className="col-sm-10">
                <Field
                  name="totalBuyPrice"
                  readOnly
                  component={TextInputWithIcon}
                  placeholder="0.00"
                />
              </div>
            </FormGroup>

            <FormGroup className="form-group row">
              <Label className="col-sm-2 col-form-label">
                Total Retail Price
              </Label>
              <div className="col-sm-10">
                <Field
                  name="totalRetailPrice"
                  readOnly
                  component={TextInputWithIcon}
                  placeholder="0.00"
                />
              </div>
            </FormGroup>

            <FormGroup className="form-group row">
              <Label className="col-sm-2 col-form-label">Note</Label>
              <div className="col-sm-10">
                <Field
                  name="description"
                  component={TextInputWithIcon}
                  placeholder="note"
                />
              </div>
            </FormGroup>
          </CardBody>
          {/* /.card-body */}
          <div className="card-footer">
            <FormGroup>
              <button
                disabled={invalid || submitting || pristine}
                type="submit"
                className="btn btn-info ml-2 float-right"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={toggle}
                className="btn btn-danger float-right"
              >
                Cancel
              </button>
              {loading && <SpinnerView className="float-right" />}
            </FormGroup>
          </div>
          {/* /.card-footer */}
        </Form>
      </Card>
    );
  }
}

PurchaseForm.propTypes = {
  createNewPurchaseAction: PropType.func
};

const mapDispatchToProps = {
  createNewPurchaseAction
};

const mapStateToProps = (state, ownProps) => ({
  initialValues: ownProps.currentProduct,
  inventory: state.inventory
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({ form: formName, enableReinitialize: true, validate })(
    PurchaseForm
  )
);
