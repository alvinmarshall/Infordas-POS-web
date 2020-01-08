import React, { Component } from "react";

export default class ClientSection extends Component {
  render() {
    return (
        <div className="row invoice-info">
        <div className="col-sm-4 invoice-col">
          From
          <address>
            <strong>Admin, Inc.</strong>
            <br />
            795 Folsom Ave, Suite 600
            <br />
            San Francisco, CA 94107
            <br />
            Phone: (804) 123-5432
            <br />
            Email: info@almasaeedstudio.com
          </address>
        </div>
        {/* /.col */}
        <div className="col-sm-4 invoice-col">
          To
          <address>
            <strong>John Doe</strong>
            <br />
            795 Folsom Ave, Suite 600
            <br />
            San Francisco, CA 94107
            <br />
            Phone: (555) 539-1037
            <br />
            Email: john.doe@example.com
          </address>
        </div>
        {/* /.col */}
        <div className="col-sm-4 invoice-col">
          <b>Invoice #007612</b>
          <br />
          <br />
          <b>Order ID:</b> 4F3S8J
          <br />
          <b>Payment Due:</b> 2/22/2014
          <br />
          <b>Account:</b> 968-34567
        </div>
        {/* /.col */}
      </div>
    );
  }
}
