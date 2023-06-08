import React from "react";

const RenderDepartment = ({ department }) => {
  return (
    <div className="col-lg-4 col-sm-6 col-12">
      <div className="border border-gray cursor-poiter mt-1 p-2">
        <h3 className="ps-2">{department.name}</h3>
        <div className="ps-4">{`Số lượng nhân viên: ${department.numberOfStaff}`}</div>
      </div>
    </div>
  );
};
const Department = ({ departments }) => {
  const renderDepartment = departments.map((department) => {
    return <RenderDepartment department={department} key={department.id} />;
  });
  return (
    <div className="container">
      <div className="row">{renderDepartment}</div>
    </div>
  );
};

export default Department;
