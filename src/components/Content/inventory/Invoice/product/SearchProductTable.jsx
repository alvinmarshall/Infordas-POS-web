import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addItemToCartAction } from "../reducer/invoiceAction";

const SearchProductTable = ({ data, addItemToCartAction }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Qty</th>
          <th>Name</th>
          <th>Category</th>
          <th>Brand</th>
          <th>Stock</th>
          <th>Total</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.qty}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <button
                  className="btn btn-outline-primary btn-sm"
                  onClick={() => {
                    addItemToCartAction(item);
                  }}
                >
                  <i className="fas fa-plus"></i>
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

SearchProductTable.propTypes = {
  data: PropTypes.array
};
const mapDispatchToProps = {
  addItemToCartAction
};

export default connect(null, mapDispatchToProps)(SearchProductTable);
