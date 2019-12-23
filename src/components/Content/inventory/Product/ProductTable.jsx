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

import React from "react";
import PropTypes from "prop-types";
import { PRODUCT_MODAL } from "./reducer/productConstants";
import { PURCHASE_PRODUCT_MODAL } from "../Purchase/reducer/purchaseConstants";
const ProductTable = ({ products, openModal, handleDeleteProduct }) => {
  return (
    <div className="card-body table-responsive p-0">
      <table className="table table-bordered table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Buy Price</th>
            <th>Retail Price</th>
            <th>Quantity</th>
            <th>Category</th>
            <th>Brand</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((data, index) => (
              <tr key={index}>
                <td>{data.name} </td>
                <td>{data.buyPrice || 0}</td>
                <td>{data.retailPrice || 0}</td>
                <td>{data.stock || 0}</td>
                <td>{data.category}</td>
                <td>{data.brand}</td>
                <td>
                  <div className="btn-group">
                    <button
                      onClick={() =>
                        openModal(PURCHASE_PRODUCT_MODAL, { data: data })
                      }
                      className="btn btn-sm btn-default"
                    >
                      <i className="fas fa-plus"></i>&nbsp;Purchase
                    </button>
                    <button
                      onClick={() => openModal(PRODUCT_MODAL, { data: data })}
                      className="btn btn-sm btn-warning"
                    >
                      <i className="fas fa-edit"></i>
                    </button>
                    <button
                      onClick={handleDeleteProduct(data)}
                      className="btn btn-sm btn-danger"
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

ProductTable.propTypes = {
  products: PropTypes.array,
  openModal: PropTypes.func.isRequired,
  handleDeleteProduct: PropTypes.func
};

export default ProductTable;
