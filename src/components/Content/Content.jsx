import React, { Component } from "react";
import { Switch } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Company from "./set-up/Company/Company";
import Rank from "./set-up/Rank/Rank";
import PrivateRoute from "../Auth/route/PrivateRoute";
import NewEmployee from "./set-up/Employee/NewEmployee";
import EmployeesProfile from "./set-up/Employee/EmployeesProfile";
import Product from "./Product/Product";

export default class Content extends Component {
  render() {
    return (
      <section className="content">
        <Switch>
          <PrivateRoute path="/dashboard" exact component={Dashboard} />
          <PrivateRoute path="/company" exact component={Company} />
          <PrivateRoute path="/rank" exact component={Rank} />
          <PrivateRoute path="/add-employee" exact component={NewEmployee} />
          <PrivateRoute path="/profiles" exact component={EmployeesProfile} />
          <PrivateRoute path="/product" exact component={Product} />
        </Switch>
      </section>
    );
  }
}
