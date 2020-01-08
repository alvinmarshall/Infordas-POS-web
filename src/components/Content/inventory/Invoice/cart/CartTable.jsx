import React, { Component } from "react";
import { connect } from "react-redux";
import { removeCartItemAction } from "../reducer/invoiceAction";
import { reduxForm, Field } from "redux-form";

class CartTable extends Component {
  state = {
    rows: []
  };

  componentDidMount() {
    this.setState({ rows: this.props.cart.item });
  }

  componentDidUpdate(prevProps) {
    if (this.props.cart.item !== prevProps.cart.item) {
      this.setState({ rows: this.props.cart.item });
    }
  }

  handleRemoveSpecificRow = index => () => {
    this.props.removeCartItemAction(this.state.rows[index]);
  };
  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Qty</th>
            <th>Name</th>
            <th>Stock</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.state.rows.map((item, index) => (
            <tr key={index}>
              <td>
                <Field
                  name={`item_${index}`}
                  className="text-center"
                  type="number"
                  component="input"
                />
              </td>
              <td>{item.name}</td>
              <td>{item.uuid}</td>
              <td></td>
              <td>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={this.handleRemoveSpecificRow(index)}
                >
                  <i className="fas fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}


const mapDispatchToProps = {
  removeCartItemAction
};
const mapStateToProps = state => ({
  cart: state.cart
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({ form: "cartForm" })(CartTable));
