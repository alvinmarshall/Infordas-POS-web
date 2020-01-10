import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addItemToCartAction } from "../reducer/invoiceAction";

const SearchProductTable = ({ data, addItemToCartAction, cartForm }) => {
  const err = cartForm && cartForm.syncErrors;
  let invalid = err ? true : false;

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Stock</th>
          <th>Category</th>
          <th>Brand</th>
          <th>Stock</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.stock}</td>
              <td>{item.category}</td>
              <td>{item.brand}</td>
              <td>{item.stock}</td>
              <td>
                <button
                  disabled={invalid}
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

const mapStateToProps = state => ({
  cartForm: state.form && state.form.cartForm
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchProductTable);
