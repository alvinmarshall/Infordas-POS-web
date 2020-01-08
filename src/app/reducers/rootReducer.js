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

import { combineReducers } from "redux";
import authReducer from "../../components/Auth/reducers/authReducer";
import errorReducer from "../../components/error/reducer/errorReducer";
import dashboardReducer from "../../components/Content/Dashboard/reducer/dashboardReducer";
import companyReducer from "../../components/Content/set-up/Company/reducers/companyReducer";
import modalReducer from "../../components/modal/modalReducer";
import { reducer as FormReducer } from "redux-form";
import employeeReducer from "../../components/Content/Employee/reducers/employeeReducer";
import rankReducer from "../../components/Content/set-up/Rank/reducers/rankReducer";
import accountReducer from "../../components/Content/account/reducer/accountReducer";
import productReducer from "../../components/Content/inventory/Product/reducer/productReducer";
import purchaseReducer from "../../components/Content/inventory/Purchase/reducer/purchaseReducer";
import crmReducer from "../../components/Content/CRM/reducer/crmReducer";
import invoiceReducer from "../../components/Content/inventory/Invoice/reducer/invoiceReducer";

export default combineReducers({
  auth: authReducer,
  error: errorReducer,
  dashboard: dashboardReducer,
  company: companyReducer,
  modals: modalReducer,
  form: FormReducer,
  employee: employeeReducer,
  rank: rankReducer,
  account: accountReducer,
  product: productReducer,
  inventory: purchaseReducer,
  crm:crmReducer,
  cart:invoiceReducer
});
