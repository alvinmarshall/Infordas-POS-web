import React from "react";
import { PRODUCT_CATEGORY_MODAL } from "../reducer/categoryConstansts";

const ProductCategoryTable = ({ categories, openModal }) => {
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
        {categories &&
          categories.map((category, index) => (
            <tr
              key={index++}
              onClick={() => {
                openModal(PRODUCT_CATEGORY_MODAL, { data: category });
              }}
            >
              <td>{index}.</td>
              <td>{category && category.name}</td>
              <td>{category && category.description}</td>
              <td>
                <div className="progress progress-xs">
                  <div
                    className="progress-bar progress-bar-danger"
                    style={{ width: `${(category.count/2) || 0}%` }}
                  />
                </div>
              </td>
              <td>
                <span className="badge bg-danger">
                  {category.count / 10 || 0}%
                </span>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default ProductCategoryTable;
