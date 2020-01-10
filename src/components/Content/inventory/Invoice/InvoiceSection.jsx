import React, { Component } from "react";
import ClientSection from "./client/ClientSection";
import BillSection from "./bill/BillSection";
import CartTable from "./cart/CartTable";
import SearchProductTable from "./product/SearchProductTable";

const product = [
  {
    uuid: "u1",
    name: "Product A",
    category: "Category A",
    brand: "Brand A",
    qty: 0,
    stock: "80",
    retailPrice:"20",
    total: 0
  },
  {
    uuid: "u2",
    name: "Product B",
    category: "Category B",
    brand: "Brand A",
    qty: 0,
    stock: "40",
    retailPrice:"10",
    total: 0
  },
  {
    uuid: "u3",
    name: "Product C",
    category: "Category C",
    brand: "Brand C",
    qty: 0,
    stock: "50",
    retailPrice:"40",
    total: 0
  }
];
export default class InvoiceSection extends Component {
  state = {
    product: null
  };

  handleAddItem = payload => () => {
    this.setState({ product: payload });
  };

  handleItemCart = () => {
    return this.state.product;
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          {/* Main content */}
          <div className="invoice p-3 mb-3">
            {/* title row */}
            <div className="row">
              <div className="col-12">
                <h4>
                  <i className="fas fa-globe" /> Oserby Farm, Inc.
                  <small className="float-right">Date: 2/10/2014</small>
                </h4>
              </div>
              {/* /.col */}
            </div>
            {/* info row */}
            <ClientSection />

            <div className="col-md-12">
              <div className="callout callout-info">
                <h5>
                  <i className="fas fa-info" /> Search Product:
                </h5>
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-11">
                        <input
                          className="form-control"
                          type="text"
                          name=""
                          id=""
                          placeholder="search product name"
                        />
                      </div>
                      <div className="col-md-1">
                        <button className="btn btn-outline-primary">
                          <i className="fas fa-search"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <SearchProductTable data={product} />
                  </div>
                </div>
              </div>
            </div>

            {/* /.row */}
            {/* Table row */}
            <div className="row">
              <div className="col-12 table-responsive">
                <CartTable />
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
            <div className="row">
              {/* accepted payments column */}
              <div className="col-6">
                <p className="lead">Payment Methods:</p>
              </div>
              {/* /.col */}
              <div className="col-6">
                <p className="lead">Amount Due 2/22/2014</p>
                <BillSection />
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
            {/* this row will not appear when printing */}
            <div className="row no-print">
              <div className="col-12">
                <button
                  className="btn btn-default"
                  onClick={() => window.print()}
                >
                  <i className="fas fa-print" /> Print
                </button>
                <button type="button" className="btn btn-success float-right">
                  <i className="far fa-credit-card" /> Submit Payment
                </button>
                <button
                  type="button"
                  className="btn btn-primary float-right"
                  style={{ marginRight: 5 }}
                >
                  <i className="fas fa-download" /> Generate PDF
                </button>
              </div>
            </div>
          </div>
          {/* /.invoice */}
        </div>
      </div>
    );
  }
}
