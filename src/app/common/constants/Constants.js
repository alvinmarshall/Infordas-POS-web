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

export const genderOption = [
  { key: "0", value: "" },
  { key: "1", value: "Male" },
  { key: "2", value: "Female" }
];

export const maritalOption = [
  { key: "0", value: "" },
  { key: "1", value: "Single" },
  { key: "2", value: "Married" },
  { key: "3", value: "Other" }
];

export const statusOption = [
  { key: "2", value: "InActive" },
  { key: "1", value: "Active" }
];

export const BASE_URL = "http://localhost:3001";
export const downloadUrl = `${BASE_URL}/files/download?url`;

export const ALERT_MODAL = "AlertModal";
export const CRM_TYPE = { customer: "customer", supplier: "supplier" };
