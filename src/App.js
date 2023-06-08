import React from "react";
import StaffList from "./components/StaffListComponent";
import StaffDetail from "./components/StaffDetailComponent";
import Header from "./components/HeaderComponent";
import Footer from "./components/FooterComponent";
import Department from "./components/DepartmentComponent";
import Salary from "./components/SalaryComponent";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import { STAFFS, DEPARTMENTS } from "./shared/staffs";
import "./App.css";

function App() {
  const StaffWithId = () => {
    const params = useParams();
    return (
      <StaffDetail
        selectedStaff={
          STAFFS.filter((staff) => staff.id === parseInt(params.staffId))[0]
        }
      />
    );
  };
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/staff" element={<StaffList staffs={STAFFS} />} />
        <Route path="/staff/:staffId" element={<StaffWithId />} />
        <Route
          path="/department"
          element={<Department departments={DEPARTMENTS} />}
        />
        <Route path="salary" element={<Salary staffs={STAFFS} />} />
        <Route path="*" element={<Navigate to="/staff" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
