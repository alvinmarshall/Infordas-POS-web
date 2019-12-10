import React, { Component } from "react";

export default class BaseFooter extends Component {
  render() {
    return (
      <div>
        <footer className="main-footer">
          <div className="float-right d-none d-sm-block">
            <b>Version</b> 0.1.0
          </div>
          <strong>
            Copyright © 2014-2019 <a href="http://adminlte.io">iNFORDAS GHANA</a>.
          </strong>{" "}
          All rights reserved.
        </footer>
      </div>
    );
  }
}
