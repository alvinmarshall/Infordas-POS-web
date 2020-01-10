import React, { Component } from "react";
import { connect } from "react-redux";
import {
  removeCartItemAction,
  updateCartItemAction
} from "../reducer/invoiceAction";
import { reduxForm, Field } from "redux-form";
import {
  combineValidators,
  createValidator,
  composeValidators,
  isRequired
} from "revalidate";
import TextInputWithIcon from "../../../../../app/common/forms/TextInputWithIcon";

const isGreaterThan = n =>
  createValidator(
    message => value => {
      if (value && Number(value) >= n) {
        return message;
      }
    },
    field => `${field} must be greater than ${n}`
  );
const validate = (values, ownProps) => {
  const dynamicValidations = ownProps.cart.item.reduce((accu, curr) => {
    accu[curr.uuid] = composeValidators(
      isRequired({ message: "provide quantity" }),
      isGreaterThan(curr.stock)({
        message: "Sorry, quantity exceeded stocks"
      })
    )();
    return accu;
  }, {});

  return combineValidators({
    ...dynamicValidations
  })(values);
};

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

  handleQtyChange = (evt, payload) => {
    //i need help here with the stock update
    const value = evt.target.value;
    // const stock = parseInt(payload.stock) || 0;
    const qty = parseInt(value) || 0;
    const retailPrice = parseInt(payload.retailPrice) || 0;
    const total = qty * retailPrice;
    payload.qty = qty;
    payload.total = total;
    this.props.updateCartItemAction(payload);
  };
  render() {
    const { rows } = this.state;
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Qty</th>
            <th>Name</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((item, index) => (
            <tr key={index}>
              <td>
                <Field
                  width="30"
                  name={item.uuid}
                  type="number"
                  placeholder="quantity"
                  onChange={e => this.handleQtyChange(e, item)}
                  component={TextInputWithIcon}
                />
              </td>
              <td>{item.name}</td>
              <td>{item.stock}</td>
              <td>{item.retailPrice}</td>
              <td>{item.total}</td>
              <td>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={this.handleRemoveSpecificRow(index, this)}
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
  removeCartItemAction,
  updateCartItemAction
};
const mapStateToProps = state => ({
  cart: state.cart
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({ form: "cartForm", enableReinitialize: true, validate })(CartTable)
);
