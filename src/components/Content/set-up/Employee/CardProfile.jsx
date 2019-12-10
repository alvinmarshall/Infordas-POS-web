import React from "react";
import { NavLink } from "react-router-dom";
import { downloadUrl } from "../../../../app/common/constants/Constants";

const CardProfile = ({ data }) => {
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
              <b>Contact</b> <span className="float-right">{data.contact}</span>
            </li>
            <li className="list-group-item text-truncate">
              <b>Email</b> <span className="float-right">{data.email}</span>
            </li>
            <li className="list-group-item text-truncate">
              <b>Address</b> <span className="">{data.address}</span>
            </li>
            <li className="list-group-item text-truncate">
              <b>Shift Hours</b> <span className="float-right">{data.hours}</span>
            </li>
          </ul>
          <NavLink
            to={{ pathname: "/add-employee", profile: data }}
            className="btn btn-primary btn-block"
          >
            <b>View Profile</b>
          </NavLink>
        </div>
        {/* /.card-body */}
      </div>
    </div>
  );
};

export default CardProfile;
