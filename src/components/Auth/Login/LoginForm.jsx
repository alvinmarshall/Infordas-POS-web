import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Form } from "reactstrap";
import TextInputWithIcon from "../../../app/common/forms/TextInputWithIcon";
import { loginUser } from "../reducers/authAction";
import PropTypes from "prop-types";
import SpinnerView from "../../spinner/SpinnerView";
import { combineValidators, isRequired } from "revalidate";

const validate = combineValidators({
  username: isRequired({ message: "username not set" }),
  password: isRequired({ message: "password not set" })
});
class LoginForm extends Component {
  state = {
    errors: null
  };
  componentDidMount() {
    this.setState({ errors: this.props.errors });
    if (this.props.auth.isAuthenticated) {
      window.location.href = "/dashboard";
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.auth.isAuthenticated !== prevProps.auth.isAuthenticated) {
      window.location.href = "/dashboard";
    }
    if (this.props.errors !== prevProps.errors) {
      this.setState({ errors: this.props.errors });
    }
  }

  onFormSubmit = values => {
    this.props.loginUser(values);
  };

  render() {
    const { handleSubmit, invalid } = this.props; // handleSubmit -- from redux-form
    const { loading } = this.props.auth;
    const { errors } = this.state;
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
                <div className="form-group">
                  {(loading && (
                    <span className="text-center">
                      {" "}
                      <SpinnerView size="sm" type="border" />
                    </span>
                  )) || (
                    <button
                      disabled={invalid}
                      type="submit"
                      className="form-control btn btn-secondary"
                    >LOGIN</button>
                  )}
                </div>
              </Form>
            </div>
            <div className="card-footer bg-secondary">
              {errors && errors.message && (
                <div className="text-center">{errors.message}</div>
              )}
            </div>
            {/* /.login-card-body */}
          </div>
        </div>
      </div>
    );
  }
}

LoginForm.propTypes = {
  loginUser: PropTypes.func.isRequired,
  error: PropTypes.object
};
const mapDispatchToProps = {
  loginUser
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.error
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({ form: "loginForm", validate })(LoginForm));
