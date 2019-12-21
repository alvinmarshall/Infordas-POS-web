import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchAllCompanies,
  createNewCompany,
  removeCompany,
  resetCompMessage
} from "./reducers/companyAction";
import PropTypes from "prop-types";
import { openModal } from "../../../modal/modalAction";
import { COMPANY_MODAL } from "./reducers/companyConstants";
import CompanyTable from "./CompanyTable";
import { Spinner } from "reactstrap";
import { ALERT_MODAL } from "../../../../app/common/constants/Constants";
class Company extends Component {
  state = {
    company: []
  };

  componentDidMount() {
    this.props.fetchAllCompanies();
  }

  componentDidUpdate(prevProps) {
    if (this.props.company !== prevProps.company) {
      this.setState({ company: this.props.company.companies });
    }

    if (this.props.company.message !== prevProps.company.message) {
      if (this.props.company.message) {
        this.props.openModal(ALERT_MODAL, {
          data: { message: this.props.company.message }
        });
      }
      this.props.fetchAllCompanies();
      this.props.resetCompMessage();
    }
  }

  handleDelete = data => () => {
    const cancel = window.confirm(`Do you want to remove ${data.name} ?`);
    if (!cancel) {
      return;
    }

    this.props.removeCompany(data.id);
  };

  render() {
    const { company } = this.state;
    const { openModal } = this.props;
    const { loading } = this.props.company;
    let tableContent;
    if (loading) {
      tableContent = (
        <Spinner
          color="dark"
          type="grow"
          className="mx-auto"
          style={{ width: "3rem", height: "3rem" }}
        />
      );
    } else {
      tableContent = (
        <CompanyTable
          company={company}
          openModal={openModal}
          handleDelete={this.handleDelete}
        />
      );
    }

    return (
      <div>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Company Information</h3>
                <div className="card-tools">
                  <div
                    className="input-group input-group-sm"
                    style={{ width: 150 }}
                  >
                    <div className="input-group-append">
                      <button
                        onClick={() => {
                          openModal(COMPANY_MODAL);
                        }}
                        className="btn btn-default"
                      >
                        <i className="fas fa-plus" /> Add Company
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* /.card-header */}
              {tableContent}

              {/* /.card-body */}
            </div>
            {/* /.card */}
          </div>
        </div>
      </div>
    );
  }
}

Company.propTypes = {
  fetchAllCompanies: PropTypes.func.isRequired
};

const action = {
  fetchAllCompanies,
  createNewCompany,
  openModal,
  removeCompany,
  resetCompMessage
};

const mapState = state => ({
  company: state.company
});

export default connect(mapState, action)(Company);
