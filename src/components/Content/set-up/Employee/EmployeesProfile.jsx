import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getEmployeesProfileAction } from "../../Employee/reducers/employeeAction";
import CardProfile from "./CardProfile";
import { Spinner } from "reactstrap";
import { resetAccountMessageAction } from "../../account/reducer/accountAction";
class EmployeesProfile extends Component {
  state = {
    profiles: []
  };

  componentDidMount() {
    this.props.getEmployeesProfileAction();
  }

  componentDidUpdate(prevProps) {
    if (this.props.employee.profiles !== prevProps.employee.profiles) {
      this.setState({
        profiles: this.props.employee.profiles
      });
    }
    if (
      this.props.account &&
      this.props.account.message !== prevProps.account.message
    ) {
      if (this.props.account.message) {
        alert(this.props.account.message);
      }
      this.props.resetAccountMessageAction();
    }
  }

  render() {
    const { profiles } = this.state;
    const { loading } = this.props.employee;
    let cardContent;
    if (profiles.length === 0 || loading) {
      cardContent = (
        <Spinner
          color="dark"
          type="grow"
          className="mx-auto"
          style={{ width: "3rem", height: "3rem" }}
        />
      );
    } else {
      cardContent =
        profiles &&
        profiles.map((data, index) => <CardProfile key={index} data={data} />);
    }
    return (
      <div>
        <div className="card card-solid">
          <div className="card-body pb-0">
            <div className="row d-flex align-items-stretch">
              {/* card profile */}
              {cardContent}
            </div>
          </div>
          {/* /.card-footer */}
        </div>
      </div>
    );
  }
}

EmployeesProfile.propTypes = {
  getEmployeesProfileAction: PropTypes.func.isRequired
};

const action = {
  getEmployeesProfileAction,
  resetAccountMessageAction
};
const mapState = state => ({
  employee: state.employee,
  account: state.account
});
export default connect(mapState, action)(EmployeesProfile);
