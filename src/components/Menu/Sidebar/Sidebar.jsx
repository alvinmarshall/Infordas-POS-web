// Copyright 2019 Bik_krl
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React from "react";
import { NavLink } from "react-router-dom";
import PropType from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../Auth/reducers/authAction";
const Sidebar = ({ user, logoutUser }) => {
  return (
    <div>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a href="../../index3.html" className="brand-link">
          <img
            src="../../dist/img/AdminLTELogo.png"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">Infordas POS</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="../../dist/img/user1-128x128.jpg"
                className="img-circle elevation-2"
                alt="User"
              />
            </div>
            <div className="info">
              <a href="#f" className="d-block">
                {user.username}
              </a>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class
       with font-awesome or any other icon font library */}
              <li className="nav-item has-treeview">
                <NavLink to="/dashboard" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>
                    Dashboard
                    <i className="right fas fa-angle-left" />
                  </p>
                </NavLink>
              </li>

              <li className="nav-header">Admin access</li>
              <li className="nav-item has-treeview">
                <a href="#f" className="nav-link">
                  <i className="nav-icon fas fa-cogs" />
                  <p>
                    Set-Up
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <NavLink to="/company" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Company</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/branch" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Branch</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/rank" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Rank</p>
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink to="add-employee" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>New Employee</p>
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink to="/f" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Customers</p>
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-item has-treeview">
                <a href="fake_url" className="nav-link">
                  <i className="nav-icon fas fa-user-tie" />
                  <p>
                    Employee
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <NavLink to="/profiles" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Profiles</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <a href="#d" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Editors</p>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-header">Inventory</li>
              <li className="nav-item has-treeview">
                <a href="fake_url" className="nav-link">
                  <i className="nav-icon fas fa-cart-plus" />
                  <p>
                    Sales
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="#d" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Sale</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#d" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Orders</p>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item has-treeview">
                <a href="fake_url" className="nav-link">
                  <i className="nav-icon fas fa-shopping-bag" />
                  <p>
                    Inventory
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <NavLink to="/product-brand" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Brand</p>
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink to="/product-category" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Category</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/product" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Product</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/purchase" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Purchase</p>
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-item has-treeview">
                <a href="fake_url" className="nav-link">
                  <i className="nav-icon fas fa-users" />
                  <p>
                    Customers
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="#d" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Profiles</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#d" className="nav-link">
                      <i className="far fa-circle nav-icon text-danger" />
                      <p>Debtors</p>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-header">User Options</li>
              <li className="nav-item has-treeview">
                <a href="fake_url" className="nav-link">
                  <i className="nav-icon fas fa-cog" />
                  <p>
                    Settings
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="#f" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Profile</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a onClick={() => logoutUser()} className="nav-link">
                      <i className="far fa-circle nav-icon text-danger" />
                      <p>Logout</p>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    </div>
  );
};
Sidebar.propType = {
  username: PropType.string.isRequired,
  logoutUser: PropType.func
};
const mapDispatchToProps = {
  logoutUser
};
export default connect(null, mapDispatchToProps)(Sidebar);
