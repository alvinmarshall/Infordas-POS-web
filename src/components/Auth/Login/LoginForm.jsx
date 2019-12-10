import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Form } from "reactstrap";
import TextInputWithIcon from "../../../app/common/forms/TextInputWithIcon";
import { loginUser } from "../reducers/authAction";
import PropTypes from "prop-types";
class LoginForm extends Component {
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      window.location.href = "/dashboard";
    }
  }

  onFormSubmit = values => {
    this.props.loginUser(values);
  };
  render() {
    const { handleSubmit } = this.props; // handleSubmit -- from redux-form
    return (
      <div className="login-page bg-dark">
        <div className="login-box">
          <div className="login-logo">
            <span>OSERBY FARMS</span>
            <a href="#f">
              <br />
              <b>OSERBY FARMS</b>
            </a>
          </div>
          {/* /.login-logo */}
          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">Sign in to start your session</p>
              <Form onSubmit={handleSubmit(this.onFormSubmit)}>
                <Field
                  type="text"
                  name="username"
                  component={TextInputWithIcon}
                  placeholder="username"
                  icon="fas fa-user"
                />

                <Field
                  name="password"
                  type="password"
                  component={TextInputWithIcon}
                  placeholder="password"
                  icon="fas fa-lock"
                />

                <p className="mb-2 text-center">
                  <a href="#f">I forgot my password</a>
                </p>
                <input type="submit" className="btn btn-block btn-primary" />
              </Form>
            </div>
            {/* /.login-card-body */}
          </div>
        </div>
      </div>
    );
  }
}

LoginForm.propTypes = {
  loginUser: PropTypes.func.isRequired
};
const action = {
  loginUser
};

const mapState = state => ({
  auth: state.auth,
  errors: state.errors
});


export default connect(
  mapState,
  action
)(reduxForm({ form: "loginForm" })(LoginForm));
