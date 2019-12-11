import React from "react";
import { COMPANY_MODAL } from "./reducers/companyConstants";

const CompanyTable = ({ company, openModal, handleDelete }) => {
  return (
    <div className="card-body p-0">
      <div className="card-body table-responsive p-0">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>Address</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Website</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="col-2 text-truncate">
            {company &&
              company.map((value, index) => (
                <tr key={index}>
                  <td>{value && value.name}</td>
                  <td>{value && value.location}</td>
                  <td>{value && value.address}</td>
                  <td>{value && value.contact}</td>
                  <td>{value && value.email}</td>
                  <td>{value && value.website}</td>

                  <td>
                    <div className="btn-group">
                      <button
                        onClick={() =>
                          openModal(COMPANY_MODAL, { data: value })
                        }
                        className="btn btn-warning"
                      >
                        edit
                      </button>
                      <button
                        onClick={handleDelete(value)}
                        className="btn btn-danger"
                      >
                        delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompanyTable;
