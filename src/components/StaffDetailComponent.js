import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";

const StaffDetail = ({ selectedStaff }) => {
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/staff">Nhân viên</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{selectedStaff.name}</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="row">
        <div className="col-lg-3 col-sm-4 col-12">
          <img src={selectedStaff.image} />
        </div>
        <div className="col-lg-9 col-sm-8 col-12">
          <h3>Họ và tên: {selectedStaff.name}</h3>
          <div>Ngày sinh: {dateFormat(selectedStaff.doB, "dd/mm/yyyy")}</div>
          <div>
            Ngày vào công ty:{" "}
            {dateFormat(selectedStaff.startDate, "dd/mm/yyyy")}
          </div>
          <div>Phòng ban: {selectedStaff.department.name}</div>
          <div>Số ngày nghỉ còn lại: {selectedStaff.annualLeave}</div>
          <div>Số ngày đã làm thêm: {selectedStaff.overTime}</div>
        </div>
      </div>
    </div>
  );
};

export default StaffDetail;
