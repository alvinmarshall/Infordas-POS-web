import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Landing extends Component {
  render() {
    return (
      <div>
        <Link to="/login" className="nav-link">
          <button>
            <i className="far fa-circle nav-icon" />
            <p>Enter</p>
          </button>
        </Link>
      </div>
    );
  }
}
