import React, { Component } from "react";

export default class EmployeeDetail extends Component {
  render() {
    return (
      <div>
        <div className="row">
          {/* col */}
          <div className="col-md-12">
            {/* card */}
            <div className="card card-primary card-outline">
              {/* header */}
              <div className="card-header">
                <h3 className="card-title">
                  <i className="fas fa-edit" />
                  Employee Details
                </h3>
                <h5 align="right">
                  <button
                    type="button"
                    className="btn btn-warning bg-gradient-primary"
                    align="right"
                    data-toggle="modal"
                    data-target="#modal-default"
                  >
                    <i className="fas fa-plus text-white" /> Add Employee
                  </button>
                </h5>
              </div>
              {/* end header */}
              {/* body */}
              <div className="card-body">
                {/* row */}
                <div className="row">
                  {/* col */}
                  <div className="col-sm-3">
                    {/* form */}
                    <form
                      id="form_image_upload"
                      action
                      method="post"
                      className="form-group"
                      encType="multipart/form-data"
                      name="uploadimage"
                    >
                      {/* card */}
                      <div className="card" style={{ width: "15rem" }}>
                        <img
                          className="card-img-top"
                          src="../../dist/img/photo2.png"
                          id="output"
                        />
                        {/* body */}
                        <div className="card-body">
                          <div className="custom-file">
                            <input
                              id="logo"
                              name="file"
                              type="file"
                              className="custom-file-input"
                              accept="image/*"
                              onchange="handleUpload(event)"
                            />
                            <label
                              htmlFor="logo"
                              className="custom-file-label text-truncate"
                            >
                              Select image
                            </label>
                          </div>
                        </div>
                        <div className="card-footer">
                          <button
                            className="btn btn-info btn-block"
                            id="btn_image_upload"
                          >
                            Upload
                          </button>
                        </div>
                        {/* end body */}
                      </div>
                      {/* end card */}
                    </form>
                    {/* end form */}
                  </div>
                  {/* end col image */}
                  {/* col */}
                  <div className="col-sm-9">
                    {/* accordion */}
                    <div id="accordion">
                      {/* form */}
                      <form id="form_personal_info" action>
                        {/* card 1*/}
                        <div className="card">
                          {/* header */}
                          <div className="card-header bg-info">
                            <h4>
                              <a
                                className="card-link text-white"
                                data-toggle="collapse"
                                href="#collapseOne"
                              >
                                Personal Information
                              </a>
                            </h4>
                          </div>
                          {/* end header */}
                          {/* parent accordion */}
                          <div
                            id="collapseOne"
                            className="collapse show"
                            data-parent="#accordion"
                          >
                            {/* body */}
                            <div className="card-body">
                              {/* identifier */}
                              <div className="input-group-sm mb-3">
                                <div className="input-group-prepend">
                                  <span className="input-group-text bg-primary text-white">
                                    <i className="fas fa-fw fa-hashtag alt" />
                                    Identifier
                                  </span>
                                  <input
                                    className="form-control"
                                    disabled
                                    id="employee_uuid"
                                    defaultValue
                                    type="text"
                                  />
                                </div>
                              </div>
                              {/* end identifier */}
                              {/*  name*/}
                              <div className="form-group row">
                                <label
                                  htmlFor="name"
                                  className="col-sm-2 col-form-label"
                                >
                                  Name
                                </label>
                                <div className="col-sm-10">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="employee_name"
                                    required
                                    placeholder="Name"
                                  />
                                </div>
                              </div>
                              {/* end  name */}
                              {/*  DOB*/}
                              <div className="form-group row">
                                <label
                                  htmlFor="dob"
                                  className="col-sm-2 col-form-label"
                                >
                                  DOB
                                </label>
                                <div className="col-sm-10">
                                  <input
                                    type="date"
                                    className="form-control"
                                    id="employee_dob"
                                    required
                                    placeholder="dd/mm/yyyy"
                                  />
                                </div>
                              </div>
                              {/* end DOB */}
                              {/*  gender*/}
                              <div className="form-group row">
                                <label
                                  htmlFor="gender"
                                  className="col-sm-2 col-form-label"
                                >
                                  Gender
                                </label>
                                <div className="col-sm-10">
                                  <select
                                    className="form-control"
                                    id="employee_gender"
                                    type="text"
                                    required
                                  >
                                    <option value={0} />
                                    <option value={1}>Male</option>
                                    <option value={2}>Female</option>
                                  </select>
                                </div>
                              </div>
                              {/* end gender */}
                              {/* contact */}
                              <div className="form-group row">
                                <label
                                  htmlFor="contact"
                                  className="col-sm-2 col-form-label"
                                >
                                  Contact
                                </label>
                                <div className="col-sm-10">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="employee_contact"
                                    placeholder="contact"
                                  />
                                </div>
                              </div>
                              {/* end contact */}
                              {/* email */}
                              <div className="form-group row">
                                <label
                                  htmlFor="email"
                                  className="col-sm-2 col-form-label"
                                >
                                  Email
                                </label>
                                <div className="col-sm-10">
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="employee_email"
                                    placeholder="email"
                                  />
                                </div>
                              </div>
                              {/* end email */}
                              {/* address */}
                              <div className="form-group row">
                                <label
                                  htmlFor="address"
                                  className="col-sm-2 col-form-label"
                                >
                                  Address
                                </label>
                                <div className="col-sm-10">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="employee_address"
                                    placeholder="box address"
                                  />
                                </div>
                              </div>
                              {/* end address */}
                              {/* mariage status */}
                              <div className="form-group row">
                                <label
                                  htmlFor="status"
                                  className="col-sm-2 col-form-label"
                                >
                                  Marital Status
                                </label>
                                <div className="col-sm-10">
                                  <select
                                    className="form-control"
                                    id="employee_marital_status"
                                    type="text"
                                    required
                                  >
                                    <option id={0} />
                                    <option id={1}>Single</option>
                                    <option id={2}>Married</option>
                                    <option id={3}>Other</option>
                                  </select>
                                </div>
                              </div>
                              {/* end mariage status */}
                            </div>
                            {/* end body */}
                            {/* footer */}
                            <div className="card-footer">
                              <div className="text-right">
                                <button
                                  id="btn_personal_info"
                                  className="btn btn-info"
                                >
                                  Add
                                </button>
                              </div>
                            </div>
                            {/* end footer */}
                          </div>
                          {/* end parent accordion */}
                        </div>
                        {/* end card 1*/}
                      </form>
                      {/* end form 1*/}
                      {/* form 2 */}
                      <form id="form_company_info" action>
                        {/* card 2*/}
                        <div className="card">
                          <div className="card-header bg-primary">
                            <h4>
                              <a
                                className="card-link text-white"
                                data-toggle="collapse"
                                href="#collapseTwo"
                              >
                                Company Information
                              </a>
                            </h4>
                          </div>
                          {/* parent accordion */}
                          <div
                            id="collapseTwo"
                            className="collapse"
                            data-parent="#accordion"
                          >
                            {/* body */}
                            <div className="card-body">
                              {/* shift hours */}
                              <div className="form-group row">
                                <label
                                  htmlFor="hours"
                                  className="col-sm-2 col-form-label"
                                >
                                  Shift-Hours
                                </label>
                                <div className="col-sm-10">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="employee_hours"
                                    placeholder="in hours"
                                  />
                                </div>
                              </div>
                              {/* end shift hours */}
                              {/* status */}
                              <div className="form-group row">
                                <label
                                  htmlFor="status"
                                  className="col-sm-2 col-form-label"
                                >
                                  Status
                                </label>
                                <div className="col-sm-10">
                                  <select
                                    className="form-control"
                                    id="employee_status"
                                    type="text"
                                    required
                                  >
                                    <option value={0} />
                                    <option value={1}>Active</option>
                                    <option value={2}>In Active</option>
                                  </select>
                                </div>
                              </div>
                              {/* end status */}
                              {/* position */}
                              <div className="form-group row">
                                <label
                                  htmlFor="position"
                                  className="col-sm-2 col-form-label"
                                >
                                  Position
                                </label>
                                <div className="col-sm-10">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="employee_position"
                                    placeholder="position"
                                  />
                                </div>
                              </div>
                              {/* end position */}
                              {/* department */}
                              <div className="form-group row">
                                <label
                                  htmlFor="department"
                                  className="col-sm-2 col-form-label"
                                >
                                  Department
                                </label>
                                <div className="col-sm-10">
                                  <select
                                    className="form-control"
                                    id="employee_department"
                                    type="text"
                                  >
                                    <option value={0}>
                                      TODO (ADD A DEPARTMENT)
                                    </option>
                                  </select>
                                </div>
                              </div>
                              {/* end department */}
                              {/* division */}
                              <div className="form-group row">
                                <label
                                  htmlFor="division"
                                  className="col-sm-2 col-form-label"
                                >
                                  Division
                                </label>
                                <div className="col-sm-10">
                                  <select
                                    className="form-control"
                                    id="employee_division"
                                    type="text"
                                  >
                                    <option id={0}>
                                      TODO (ADD A Division)
                                    </option>
                                  </select>
                                </div>
                              </div>
                              {/* end division */}
                            </div>
                            {/* end body */}
                            {/* footer */}
                            <div className="card-footer">
                              <div className="text-right">
                                <button
                                  id="btn_company_info"
                                  className="btn btn-info"
                                >
                                  Add
                                </button>
                              </div>
                            </div>
                            {/* end footer */}
                          </div>
                          {/* end parent accordion */}
                        </div>
                        {/* end card 2*/}
                      </form>
                      {/* end form 2 */}
                      {/* form 3 */}
                      <form id="form_additional_info" action>
                        {/* card 3 */}
                        <div className="card">
                          {/* header */}
                          <div className="card-header bg-success">
                            <h4>
                              <a
                                className="card-link text-white"
                                data-toggle="collapse"
                                href="#collapseThree"
                              >
                                Additional Information
                              </a>
                            </h4>
                          </div>
                          {/* end header */}
                          {/* parent accordion */}
                          <div
                            id="collapseThree"
                            className="collapse"
                            data-parent="#accordion"
                          >
                            {/* body */}
                            <div className="card-body">
                              {/* ssid */}
                              <div className="form-group row">
                                <label
                                  htmlFor="ssid"
                                  className="col-sm-2 col-form-label"
                                >
                                  SSID
                                </label>
                                <div className="col-sm-10">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="employee_ssid"
                                    placeholder="ssid"
                                  />
                                </div>
                              </div>
                              {/* end ssid */}
                              {/* religion */}
                              <div className="form-group row">
                                <label
                                  htmlFor="religion"
                                  className="col-sm-2 col-form-label"
                                >
                                  Religion
                                </label>
                                <div className="col-sm-10">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="employee_religion"
                                    placeholder="religion"
                                  />
                                </div>
                              </div>
                              {/* end religion */}
                              {/* residence */}
                              <div className="form-group row">
                                <label
                                  htmlFor="residence"
                                  className="col-sm-2 col-form-label"
                                >
                                  Residence
                                </label>
                                <div className="col-sm-10">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="employee_residence"
                                    placeholder="residence"
                                  />
                                </div>
                              </div>
                              {/* end residence */}
                              {/* salary */}
                              <div className="form-group row">
                                <label
                                  htmlFor="salary"
                                  className="col-sm-2 col-form-label"
                                >
                                  Salary
                                </label>
                                <div className="col-sm-10">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="employee_salary"
                                    placeholder="salary"
                                  />
                                </div>
                              </div>
                              {/* end salary */}
                              {/* account */}
                              <div className="form-group row">
                                <label
                                  htmlFor="account"
                                  className="col-sm-2 col-form-label"
                                >
                                  AccountNo
                                </label>
                                <div className="col-sm-10">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="employee_account"
                                    placeholder="account number"
                                  />
                                </div>
                              </div>
                              {/* end account */}
                              {/* children */}
                              <div className="form-group row">
                                <label
                                  htmlFor="children"
                                  className="col-sm-2 col-form-label"
                                >
                                  Children
                                </label>
                                <div className="col-sm-10">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="employee_children"
                                    placeholder="seperate names with commas"
                                  />
                                </div>
                              </div>
                              {/* end children */}
                            </div>
                            {/* end body */}
                            {/* footer */}
                            <div className="card-footer">
                              <div className="text-right">
                                <button
                                  id="btn_additional_info"
                                  className="btn btn-info"
                                >
                                  Add
                                </button>
                              </div>
                            </div>
                            {/* end footer */}
                          </div>
                          {/* end parent accordion */}
                        </div>
                        {/* end card 3 */}
                      </form>
                      {/* end form 3 */}
                    </div>
                    {/* end accordion */}
                  </div>
                  {/* end col */}
                </div>
                {/* end row */}
              </div>
              {/* end body */}
            </div>
            {/* end card */}
          </div>
          {/* end col */}
        </div>
      </div>
    );
  }
}
