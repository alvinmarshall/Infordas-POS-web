import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { combineValidators, isRequired } from "revalidate";
import { Form, ModalFooter } from "reactstrap";
import TextInputWithIcon from "../../../../app/common/forms/TextInputWithIcon";
import {
  createNewCompany,
  fetchAllCompanies,
  updateCompany,
  resetCompMessage
} from "./reducers/companyAction";
import PropTypes from "prop-types";

const validate = combineValidators({
  name: isRequired({ message: "company name is required" }),
  location: isRequired({ message: "provide a location" }),
  address: isRequired({ message: "postal address is required" }),
  contact: isRequired({ message: "company's contact is required" })
});

class CompanyForm extends Component {
  onFormSubmit = payload => {
    this.props.toggle();
    if (payload && payload.id) {
      this.props.updateCompany(payload);
      this.props.toggle();
      return;
    }
    this.props.createNewCompany(payload);
  };

  render() {
    const { handleSubmit, toggle, submitting, pristine } = this.props;
    return (
      <Form onSubmit={handleSubmit(this.onFormSubmit)}>
        {/* name */}
        <Field
          name="name"
          placeholder="Company Name"
          type="text"
          icon="fas fa-building"
          component={TextInputWithIcon}
        />
        {/* location */}
        <Field
          name="location"
          placeholder="Location"
          type="text"
          required
          icon="fas fa-map"
          component={TextInputWithIcon}
        />
        {/* address */}
        <Field
          name="address"
          placeholder="Address"
          type="text"
          required
          icon="fas fa-store"
          component={TextInputWithIcon}
        />
        {/* contact */}
        <Field
          name="contact"
          placeholder="Contact"
          type="text"
          icon="fas fa-phone"
          component={TextInputWithIcon}
        />
        {/* email */}
        <Field
          name="email"
          placeholder="Email"
          type="text"
          icon="fas fa-envelope"
          component={TextInputWithIcon}
        />

        {/* Website */}
        <Field
          name="website"
          placeholder="Website"
          type="text"
          icon="fas fa-globe"
          component={TextInputWithIcon}
        />

        <ModalFooter>
          <button type="button" onClick={toggle} className="btn btn-danger">
            Close
          </button>
          <button
            type="submit"
            disabled={submitting || pristine}
            id="btn_create_company"
            className="btn btn-primary"
          >
            Save changes
          </button>
        </ModalFooter>
      </Form>
    );
  }
}

CompanyForm.propTypes = {
  createNewCompany: PropTypes.func.isRequired,
  fetchAllCompanies: PropTypes.func.isRequired,
  updateCompany: PropTypes.func,
  resetCompMessage: PropTypes.func
};

const mapDispatchToProps = {
  createNewCompany,
  fetchAllCompanies,
  updateCompany,
  resetCompMessage
};

const mapStateToProps = (state, ownProps) => ({
  initialValues: ownProps.companyData,
  company: state.company
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({ form: "companyForm", enableReinitialize: true, validate })(
    CompanyForm
  )
);
