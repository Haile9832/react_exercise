import React from "react";
import dateFormat from "dateformat";

const StaffDetail = ({ selectedStaff }) => {
  console.log(selectedStaff);
  return (
    <div>
      <h3>Họ và tên: {selectedStaff.name}</h3>
      <div>Ngày sinh: {dateFormat(selectedStaff.doB, "dd/mm/yyyy")}</div>
      <div>
        Ngày vào công ty: {dateFormat(selectedStaff.startDate, "dd/mm/yyyy")}
      </div>
      <div>Phòng ban: {selectedStaff.department.name}</div>
      <div>Số ngày nghỉ còn lại: {selectedStaff.annualLeave}</div>
      <div>Số ngày đã làm thêm: {selectedStaff.overTime}</div>
    </div>
  );
};

export default StaffDetail;
