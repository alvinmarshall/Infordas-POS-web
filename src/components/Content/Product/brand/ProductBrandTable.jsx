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
import { PRODUCT_BRAND_MODAL } from "../reducer/brandConstants";

const ProductBrandTable = ({ brands, openModal }) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Description</th>
          <th>Assigned Products</th>
          <th style={{ width: 10 }}>Percentage</th>
        </tr>
      </thead>
      <tbody>
        {brands &&
          brands.map((brand, index) => (
            <tr
              key={index++}
              onClick={() => {
                openModal(PRODUCT_BRAND_MODAL, { data: brand });
              }}
            >
              <td>{index}.</td>
              <td>{brand && brand.name}</td>
              <td>{brand && brand.description}</td>
              <td>
                <div className="progress progress-xs">
                  <div
                    className="progress-bar progress-bar-danger"
                    style={{ width: `${brand.count / 2 || 0}%` }}
                  />
                </div>
              </td>
              <td>
                <span className="badge bg-danger">
                  {brand.count / 10 || 0}%
                </span>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

ProductBrandTable.propTypes = {
  brands: PropTypes.array.isRequired,
  openModal: PropTypes.func
};

export default ProductBrandTable;
