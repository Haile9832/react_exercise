import React, { useState } from "react";
import StaffDetail from "./StaffDetailComponent";

const StaffList = ({ staffs }) => {
  const [isStaffSelected, setIsStaffSelected] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState([]);
  const staffList = staffs.map((staff) => {
    const handleClick = () => {
      setIsStaffSelected(true);
      setSelectedStaff(staff);
    };
    return (
      <div
        key={staff.id}
        className="col-md-6 col-lg-4 p-2"
        onClick={handleClick}
      >
        <div className="border border-black text-center p-2 cursor-poiter">
          {staff.name}
        </div>
      </div>
    );
  });
  return (
    <div className="mt-4">
      <div className="row">{staffList}</div>
      {isStaffSelected ? (
        <div className="row">
          <StaffDetail selectedStaff={selectedStaff} />
        </div>
      ) : (
        <div>Bấm vào để xem thông tin nhân viên</div>
      )}
    </div>
  );
};

export default StaffList;
