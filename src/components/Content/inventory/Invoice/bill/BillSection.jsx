import React from "react";
import { connect } from "react-redux";

const BillSection = ({ cart }) => {
  const { item } = cart;
  const total = item && item.reduce((acc, val) => acc + parseInt(val.total), 0);

  return (
    <div className="table-responsive">
      <table className="table">
        <tbody>
          <tr>
            <th style={{ width: "50%" }}>Subtotal:</th>
            <td>{`¢ ${total}`}</td>
          </tr>
          <tr>
            <th>Tax %</th>
            <td>¢ 0</td>
          </tr>
          <tr>
            <th>Discount %</th>
            <td>¢ 0</td>
          </tr>
          <tr>
            <th>Total</th>
            <td>{`¢ ${total}`}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => ({
  cart: state.cart
});
export default connect(mapStateToProps, null)(BillSection);
