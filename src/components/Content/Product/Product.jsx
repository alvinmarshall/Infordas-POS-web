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

import React, { Component } from "react";
import ProductTable from "./ProductTable";
import { connect } from "react-redux";
import { openModal } from "../../modal/modalAction";
import { PRODUCT_MODAL } from "./reducer/productConstants";
import {
  fetchAllProductAction,
  resetProductMessageAction,
  deleteProductAction
} from "./reducer/productAction";
import SpinnerView from "../../spinner/SpinnerView";
import PropTypes from "prop-types";

class Product extends Component {
  state = {
    products: []
  };
  componentDidMount() {
    this.props.fetchAllProductAction();
  }

  componentDidUpdate(prevProps) {
    if (this.props.product.products !== prevProps.product.products) {
      this.setState({ products: this.props.product.products });
    }
    if (
      this.props.product &&
      this.props.product.message !== prevProps.product.message
    ) {
      if (this.props.product.message) {
        alert(this.props.product.message);
      }
      this.props.resetProductMessageAction();
      this.props.fetchAllProductAction();
    }
  }

  handleDeleteProduct = payload => () => {
    const cancel = window.confirm(
      `Are you sure you want to remove ${payload.name}`
    );
    if (!cancel) return;
    this.props.deleteProductAction(payload.uuid);
  };

  render() {
    const { openModal } = this.props;
    const { products } = this.state;
    const { loading } = this.props.product;
    let productContent;
    if (loading) {
      productContent = <SpinnerView />;
    } else {
      productContent = (
        <ProductTable
          handleDeleteProduct={this.handleDeleteProduct}
          openModal={openModal}
          products={products}
        />
      );
    }

    return (
      <div>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Product Table</h3>
                <div className="card-tools">
                  <div
                    className="input-group input-group-sm"
                    style={{ width: 150 }}
                  >
                    <div className="input-group-append">
                      <button
                        className="btn btn-default"
                        onClick={() => openModal(PRODUCT_MODAL)}
                      >
                        <i className="fas fa-plus" /> Add Product
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* /.card-header */}
              {productContent}

              {/* /.card-body */}
            </div>
            {/* /.card */}
          </div>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  openModal: PropTypes.func,
  fetchAllProductAction: PropTypes.func,
  resetProductMessageAction: PropTypes.func,
  deleteProductAction: PropTypes.func
};

const mapDispatchToProps = {
  openModal,
  fetchAllProductAction,
  resetProductMessageAction,
  deleteProductAction
};
const mapStateToProps = state => ({
  product: state.product
});
export default connect(mapStateToProps, mapDispatchToProps)(Product);
