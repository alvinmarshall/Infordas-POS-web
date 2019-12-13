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
import { connect } from "react-redux";
import { PRODUCT_MODAL } from "./reducer/productConstants";
const ProductTable = ({ products, openModal, handleDeleteProduct }) => {
  return (
    <div className="card-body table-responsive p-0">
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Buy Price</th>
            <th>Retail Price</th>
            <th>InStock</th>
            <th>Unit</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((data, index) => (
              <tr key={index}>
                <td>{data.name} </td>
                <td>{data.buyPrice}</td>
                <td>{data.retailPrice}</td>
                <td>{data.stock}</td>
                <td>{data.unit}</td>
                <td>
                  <div className="btn-group">
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

const mapDispatchToProps = {};

const mapStateToProps = state => ({});
export default ProductTable;
