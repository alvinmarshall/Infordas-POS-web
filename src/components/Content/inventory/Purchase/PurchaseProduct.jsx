import React, { Component } from "react";
import { Card, CardHeader, CardBody } from "reactstrap";
import PurchaseForm from "./PurchaseForm";

class PurchaseProduct extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <Card>
            <CardHeader>Purchase Product</CardHeader>
            <CardBody>
              <PurchaseForm />
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}
export default PurchaseProduct;
