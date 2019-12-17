import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllCategoryAction } from "../reducer/categoryAction";
import { openModal } from "../../../modal/modalAction";
import ProductCategoryTable from "./ProductCategoryTable";
import { PRODUCT_CATEGORY_MODAL } from "../reducer/categoryConstansts";
import SpinnerView from "../../../spinner/SpinnerView";
import { resetProductMessageAction } from "../reducer/productAction";

class ProductCategory extends Component {
  state = {
    categories: []
  };
  componentDidMount() {
    this.props.fetchAllCategoryAction();
  }
  componentDidUpdate(prevProps) {
    if (this.props.product.categories !== prevProps.product.categories) {
      this.setState({ categories: this.props.product.categories });
    }
    if (
      this.props.product &&
      this.props.product.message !== prevProps.product.message
    ) {
      if (this.props.product.message) {
        alert(this.props.product.message);
      }
      this.props.resetProductMessageAction();
      this.props.fetchAllCategoryAction();
    }
  }
  render() {
    const { openModal } = this.props;
    const { loading } = this.props.product;
    const { categories } = this.state;
    let categoryContent;
    if (loading) {
      categoryContent = <SpinnerView />;
    } else {
      categoryContent = (
        <ProductCategoryTable openModal={openModal} categories={categories} />
      );
    }
    return (
      <div>
        <div className="row">
          <div className="col-md-10 mx-auto">
            {/* /.card */}
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Category Detail</h3>
                <div className="card-tools">
                  <div
                    className="input-group input-group-sm"
                    style={{ width: 150 }}
                  >
                    <div className="input-group-append">
                      <button
                        className="btn btn-default"
                        onClick={() => openModal(PRODUCT_CATEGORY_MODAL)}
                      >
                        <i className="fas fa-plus" /> Add Category
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* /.card-header */}
              {categoryContent}
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

const mapDispatchToProps = {
  fetchAllCategoryAction,
  openModal,
  resetProductMessageAction
};
const mapStateToProps = state => ({
  product: state.product
});
export default connect(mapStateToProps, mapDispatchToProps)(ProductCategory);
