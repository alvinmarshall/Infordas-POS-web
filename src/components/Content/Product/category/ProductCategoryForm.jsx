import React, { Component } from "react";
import { Form, FormGroup, ModalFooter } from "reactstrap";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import SpinnerView from "../../../spinner/SpinnerView";
import TextInputWithIcon from "../../../../app/common/forms/TextInputWithIcon";
import {
  createCategoryAction,
  updateCategoryAction
} from "../reducer/categoryAction";
import { combineValidators, isRequired } from "revalidate";

const validate = combineValidators({
  name: isRequired({ message: "category name required" })
});

class ProductCategoryForm extends Component {
  onSubmitForm = payload => {
    this.props.toggle();
    if (payload.id) {
      const cancel = window.confirm(
        `Do you want to save changes made to ${payload.name} ?`
      );
      if (!cancel) return;
      this.props.updateCategoryAction(payload);

      return;
    }
    this.props.createCategoryAction(payload);
  };
  render() {
    const { handleSubmit, submitting, pristine, toggle } = this.props;
    const { loading } = this.props.product;
    return (
      <div>
        <Form onSubmit={handleSubmit(this.onSubmitForm)}>
          <FormGroup>
            <Field
              name="name"
              type="text"
              placeholder="category name"
              component={TextInputWithIcon}
            />
            <Field
              name="description"
              type="text"
              placeholder="description"
              component={TextInputWithIcon}
            />
          </FormGroup>
          <ModalFooter>
            <button type="button" onClick={toggle} className="btn btn-danger">
              Close
            </button>
            <button
              type="submit"
              disabled={submitting || pristine}
              className="btn btn-primary"
            >
              Save changes
            </button>
            {loading && <SpinnerView />}
          </ModalFooter>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  createCategoryAction,
  updateCategoryAction
};
const mapStateToProps = (state, ownProps) => ({
  product: state.product,
  initialValues: ownProps.currentCategory
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: "productCategoryForm",
    enableReinitialize: true,
    validate
  })(ProductCategoryForm)
);
