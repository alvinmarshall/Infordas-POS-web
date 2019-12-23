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
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ProductBrandTable from "./ProductBrandTable";
import { PRODUCT_BRAND_MODAL } from "../reducer/brandConstants";
import { fetchAllBrandsAction } from "../reducer/brandAction";
import { resetProductMessageAction } from "../reducer/productAction";
import { openModal } from "../../../../modal/modalAction";
import SpinnerView from "../../../../spinner/SpinnerView";

class ProductBrand extends Component {
  state = {
    brands: []
  };
  componentDidMount() {
    this.props.fetchAllBrandsAction();
  }

  componentDidUpdate(prevProps) {
    if (this.props.product.brands !== prevProps.product.brands) {
      this.setState({ brands: this.props.product.brands });
    }
    if (
      this.props.product &&
      this.props.product.message !== prevProps.product.message
    ) {
      if (this.props.product.message) {
        alert(this.props.product.message);
      }
      this.props.resetProductMessageAction();
      this.props.fetchAllBrandsAction();
    }
  }
  render() {
    const { brands } = this.state;
    const { openModal } = this.props;
    const { loading } = this.props.product;
    let brandContent;
    if (loading) {
      brandContent = <SpinnerView />;
    } else {
      brandContent = (
        <ProductBrandTable openModal={openModal} brands={brands} />
      );
    }
    return (
      <div>
        <div className="row">
          <div className="col-md-10 mx-auto">
            {/* /.card */}
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Brand Detail</h3>
                <div className="card-tools">
                  <div
                    className="input-group input-group-sm"
                    style={{ width: 150 }}
                  >
                    <div className="input-group-append">
                      <button
                        className="btn btn-default"
                        onClick={() => openModal(PRODUCT_BRAND_MODAL)}
                      >
                        <i className="fas fa-plus" /> Add Brand
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* /.card-header */}
              {brandContent}
              {/* /.card-body */}
            </div>
            {/* /.card */}
          </div>
          {/* /.col */}
        </div>
      </div>
    );
  }
}

ProductBrand.propTypes = {
  fetchAllBrandsAction: PropTypes.func.isRequired,
  openModal: PropTypes.func,
  resetProductMessageAction: PropTypes.func
};

const mapStateToProps = state => ({
  product: state.product
});
const mapDispatchToProps = {
  fetchAllBrandsAction,
  openModal,
  resetProductMessageAction
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductBrand);
