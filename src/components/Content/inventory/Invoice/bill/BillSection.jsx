import React from "react";

const BillSection = () => {
  return (
    <div className="table-responsive">
      <table className="table">
        <tbody>
          <tr>
            <th style={{ width: "50%" }}>Subtotal:</th>
            <td>$250.30</td>
          </tr>
          <tr>
            <th>Tax (9.3%)</th>
            <td>$10.34</td>
          </tr>
          <tr>
            <th>Shipping:</th>
            <td>$5.80</td>
          </tr>
          <tr>
            <th>Total:</th>
            <td>$265.24</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BillSection;
