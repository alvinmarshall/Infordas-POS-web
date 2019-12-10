import React, { Component } from "react";
import Navbar from "../Menu/Navbar/Navbar";
import { connect } from "react-redux";
import Sidebar from "../Menu/Sidebar/Sidebar";
import BaseFooter from "../Footer/BaseFooter";
import Content from "../Content/Content";

class MainApp extends Component {
  state = {
    currentUser: {}
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.state) {
      this.setState({
        currentUser: nextProps.state.auth.user
      });
    }
  }

  render() {
    const { currentUser } = this.state;
    const path = window.location.pathname.split("/")[1]

    return (
      <div>
        <div className="wrapper">
          <Navbar />
          <Sidebar user={currentUser} />
          <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <h1>{`User: ${currentUser.name || ""}`}</h1>
                  </div>
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                      <li className="breadcrumb-item">
                        <a href="fake_url">Home</a>
                      </li>
                      <li className="breadcrumb-item active">
                        {path}
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
              {/* /.container-fluid */}
            </section>
            {/* Main content */}
            <Content />
            {/* /.content */}
          </div>

          <BaseFooter />
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  state: state
});
export default connect(mapState)(MainApp);
