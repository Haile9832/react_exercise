import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

const RenderSalary = ({ staff }) => {
  return (
    <div className="col-12  col-sm-6 col-lg-4">
      <div className="m-1 border border-gray p-1 ">
        <h4 >{staff.name}</h4>
        <div>{`Mã nhân viên: ${staff.id}`}</div>
        <div>{`Hệ số lương: ${staff.salaryScale}`}</div>
        <div>{`Số ngày làm thêm: ${staff.overTime}`}</div>
        <div className="text-center m-1 p-1 border border-grey">{`Lương: ${(
          staff.salaryScale * 3000000 +
          staff.overTime * 200000
        ).toFixed()}`}</div>
      </div>
    </div>
  );
};
const Salary = ({ staffs }) => {
  const renderSalary = staffs.map((staff) => {
    return <RenderSalary staff={staff} key={staff.id} />;
  });
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/staff">Nhân viên</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Bảng lương</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="row">{renderSalary}</div>
    </div>
  );
};

export default Salary;
