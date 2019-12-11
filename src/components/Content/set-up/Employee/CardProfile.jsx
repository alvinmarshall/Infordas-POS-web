import React from "react";
import { NavLink } from "react-router-dom";
import { downloadUrl } from "../../../../app/common/constants/Constants";
import { openModal } from "../../../modal/modalAction";
import { ACCOUNT_MODAL } from "../../account/reducer/accountConstants";
import { connect } from "react-redux";

const CardProfile = ({ data,openModal }) => {
  return (
    <div className="col-md-4">
      <div className="card card-primary card-outline">
        <div className="card-body box-profile">
          <div className="text-center">
            <img
              className="profile-user-img img-circle "
              height="100"
              width="100"
              src={
                data.imageUrl
                  ? `${downloadUrl}=${data.imageUrl}`
                  : "../../dist/img/user1-128x128.jpg"
              }
              alt="user"
            />
          </div>
          <h3 className="profile-username text-center">{data.fullName}</h3>
          <p className="text-muted text-center">Status: {data.status}</p>
          <ul className="list-group list-group-unbordered mb-3">
            <li className="list-group-item">
              <b>Contact:</b> <span>{data.contact}</span>
            </li>
            <li className="list-group-item text-truncate">
              <b>Email:</b> <span>{data.email}</span>
            </li>
            <li className="list-group-item text-truncate">
              <b>Address:</b> <span>{data.address}</span>
            </li>
            <li className="list-group-item text-truncate">
              <b>Shift Hours:</b> <span>{data.hours}</span>
            </li>
          </ul>
          <div className="btn-group float-right">
            <NavLink
              to={{ pathname: "/add-employee", profile: data }}
              className="btn btn-secondary btn-sm"
            >
              <b>View Profile</b>
            </NavLink>
            <button
              onClick={() => openModal(ACCOUNT_MODAL, { data: data })}
              className="btn btn-info btn-sm"
            >
              Set User Account
            </button>
            <NavLink
              to={{ pathname: "/add-employee", profile: data }}
              className="btn btn-danger btn-sm"
            >
              <b>
                {data.status === "Active" ? "DeActivate" : "Activate"} User
                Account
              </b>
            </NavLink>
          </div>
        </div>
        {/* /.card-body */}
      </div>
    </div>
  );
};

const action = {
  openModal
};
export default connect(null, action)(CardProfile);
