import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import StaffList from "./components/StaffListComponent";
import { STAFFS } from "./shared/staffs";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
        </div>
      </Navbar>
      <div className="container">
        <StaffList staffs={STAFFS} />
      </div>
    </div>
  );
}

export default App;
