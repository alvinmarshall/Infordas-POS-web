import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchUserCount } from "./reducer/dashboardAction";

class CardInfo extends Component {
  state = {
    countUser: 0
  };

  componentDidMount() {
    this.props.fetchUserCount();
  }

  componentDidUpdate(prevProps) {
    if (this.props.dashboard !== prevProps.dashboard) {
      this.setState({
        countUser: this.props.dashboard.numUser
      });
    }
  }

  render() {
    const numUser = this.state.countUser;
    console.log("numuser",numUser)
    const userPer = (numUser / 100) * 100 || 0;
    return (
      <div>
        <div className="row">
          <div className="col-md-3 col-sm-6 col-12">
            <div className="info-box bg-info">
              <span className="info-box-icon">
                <i className="fas fa-users" />
              </span>
              <div className="info-box-content">
                <span className="info-box-text">Total System Users</span>
                <span className="info-box-number">{numUser}</span>
                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{ width: `${userPer}%` }}
                  />
                </div>
                <span className="progress-description">
                  {`${userPer}% Active Users`}
                </span>
              </div>
              {/* /.info-box-content */}
            </div>
            {/* /.info-box */}
          </div>
          {/* /.col */}
          <div className="col-md-3 col-sm-6 col-12">
            <div className="info-box bg-success">
              <span className="info-box-icon">
                <i className="far fa-thumbs-up" />
              </span>
              <div className="info-box-content">
                <span className="info-box-text">Likes</span>
                <span className="info-box-number">41,410</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "70%" }} />
                </div>
                <span className="progress-description">
                  70% Increase in 30 Days
                </span>
              </div>
              {/* /.info-box-content */}
            </div>
            {/* /.info-box */}
          </div>
          {/* /.col */}
          <div className="col-md-3 col-sm-6 col-12">
            <div className="info-box bg-warning">
              <span className="info-box-icon">
                <i className="far fa-calendar-alt" />
              </span>
              <div className="info-box-content">
                <span className="info-box-text">Events</span>
                <span className="info-box-number">41,410</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "70%" }} />
                </div>
                <span className="progress-description">
                  70% Increase in 30 Days
                </span>
              </div>
              {/* /.info-box-content */}
            </div>
            {/* /.info-box */}
          </div>
          {/* /.col */}
          <div className="col-md-3 col-sm-6 col-12">
            <div className="info-box bg-danger">
              <span className="info-box-icon">
                <i className="fas fa-comments" />
              </span>
              <div className="info-box-content">
                <span className="info-box-text">Comments</span>
                <span className="info-box-number">41,410</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "70%" }} />
                </div>
                <span className="progress-description">
                  70% Increase in 30 Days
                </span>
              </div>
              {/* /.info-box-content */}
            </div>
            {/* /.info-box */}
          </div>
          {/* /.col */}
        </div>
      </div>
    );
  }
}

CardInfo.propTypes = {
  fetchUserCount: PropTypes.func.isRequired
};

const action = {
  fetchUserCount
};
const mapState = state => ({
  dashboard: state.dashboard
});

export default connect(mapState, action)(CardInfo);
