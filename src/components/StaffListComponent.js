import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const RenderStaff = ({ staff }) => {
  return (
    <div className="col-lg-2 col-sm-4 col-6 p-2">
      <Link to={`/staff/${staff.id}`} className="text-decoration-none">
        <div className="border border-black text-center cursor-poiter">
          <img src={staff.image} width="100%" height="100px" />
          <div>{staff.name}</div>
        </div>
      </Link>
    </div>
  );
};
const StaffList = ({ staffs }) => {
  const staffList = staffs.map((staff) => {
    return (
      <Fragment key={staff.id}>
        <RenderStaff staff={staff} />
      </Fragment>
    );
  });
  return (
    <div className="container">
      <div className="">
        <h2 className="row border-bottom border-grey m-1">Nhân viên</h2>
        <div className="row">{staffList}</div>
      </div>
    </div>
  );
};

export default StaffList;
