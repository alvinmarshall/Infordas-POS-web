import React, { Component } from "react";
import { APP_VERSION } from "../../app/common/constants/Constants";

export default class BaseFooter extends Component {
  render() {
    return (
      <div>
        <footer className="main-footer">
          <div className="float-right d-none d-sm-block">
            <b>Version</b> {APP_VERSION}
          </div>
          <strong>
            {` Copyright © 2014-${new Date().getFullYear()}`}{" "}
            <a href="#f">iNFORDAS GHANA</a>.
          </strong>{" "}
          All rights reserved.
        </footer>
      </div>
    );
  }
}
