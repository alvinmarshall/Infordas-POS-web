import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../reducers/authAction";
class Login extends Component {
  state = {
    user: {
      username: "",
      password: ""
    },
    errors: {}
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      window.location.href = "/dashboard"
    }
  }
  onFormSubmit = e => {
    e.preventDefault();
    this.props.loginUser(this.state.user);
  };
  onInputChange = e => {
    const _user = this.state.user;
    _user[e.target.name] = e.target.value;
    this.setState({
      user: _user
    });
  };

  render() {
    const { user } = this.state;
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
              <form onSubmit={this.onFormSubmit}>
                <div className="input-group mb-3">
                  <input
                    name="username"
                    type="text"
                    className="form-control"
                    placeholder="username"
                    value={user.email}
                    onChange={this.onInputChange}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={user.password}
                    onChange={this.onInputChange}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
                <p className="mb-2 text-center">
                  <a href="forgot-password.html">I forgot my password</a>
                </p>
                <input type="submit" className="btn btn-block btn-primary" />
              </form>
            </div>
            {/* /.login-card-body */}
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired
};

const action = {
  loginUser
};

const mapState = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapState, action)(Login);
