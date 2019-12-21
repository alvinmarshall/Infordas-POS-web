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
  deleteProductAction,
  fetchSelectionInput
} from "./reducer/productAction";
import SpinnerView from "../../spinner/SpinnerView";
import PropTypes from "prop-types";
import { ALERT_MODAL } from "../../../app/common/constants/Constants";

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
    if (this.props.product.message !== prevProps.product.message) {
      if (this.props.product.message) {
        this.props.openModal(ALERT_MODAL, {
          data: { message: this.props.product.message }
        });
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

  handlePageNext = (start, end) => () => {
    this.props.fetchAllProductAction(start, end);
  };

  handlePagePrev = (start, end) => () => {
    this.props.fetchAllProductAction(start, end);
  };

  render() {
    const { openModal } = this.props;
    const { products } = this.state;
    const { loading, pageNext, pagePrev } = this.props.product;
    let productContent;
    let paginate;
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
              <div className="card-footer clearfix">
                <ul className="pagination pagination-md float-right">
                  <li className="page-item">
                    {pagePrev && pagePrev.page && (
                      <button
                        className="page-link"
                        onClick={this.handlePagePrev(
                          pagePrev.page,
                          pagePrev.limit
                        )}
                      >
                        Prevous
                      </button>
                    )}
                  </li>

                  {pageNext && pageNext.page && (
                    <li className="page-item">
                      <button
                        className="page-link"
                        onClick={this.handlePageNext(
                          pageNext.page,
                          pageNext.limit
                        )}
                      >
                        Next
                      </button>
                    </li>
                  )}
                </ul>
              </div>
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
