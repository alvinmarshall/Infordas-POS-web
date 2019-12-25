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

import React, { Component } from "react";
import { Switch } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Company from "./set-up/Company/Company";
import Rank from "./set-up/Rank/Rank";
import PrivateRoute from "../Auth/route/PrivateRoute";
import NewEmployee from "./set-up/Employee/NewEmployee";
import EmployeesProfile from "./set-up/Employee/EmployeesProfile";
import Product from "./inventory/Product/Product";
import ProductBrand from "./inventory/Product/brand/ProductBrand";
import ProductCategory from "./inventory/Product/category/ProductCategory";
import PurchaseProduct from "./inventory/Purchase/PurchaseProduct";
import CrmSupplier from "./CRM/CrmSupplier";
import CrmCustomer from "./CRM/CrmCustomer";

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
          <PrivateRoute path="/product-category" component={ProductCategory} />
          <PrivateRoute path="/product-brand" component={ProductBrand} />
          <PrivateRoute path="/purchase-product" component={PurchaseProduct} />
          <PrivateRoute path="/crm-Client" component={CrmCustomer} />
          <PrivateRoute path="/crm-Supplier" component={CrmSupplier} />

        </Switch>
      </section>
    );
  }
}
