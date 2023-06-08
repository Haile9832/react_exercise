import React, { useState } from "react";
import {
  Collapse,
  Nav,
  NavItem,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from "reactstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <Navbar dark expand="md">
      <div className="container">
        <NavbarToggler onClick={() => toggleNav()} />
        <Collapse isOpen={isNavOpen} navbar>
          <NavbarBrand className="mr-auto" href="/">
            <img
              src="assets/images/logo.jfif"
              height="30"
              width="41"
              alt="World Cup"
            />
          </NavbarBrand>
          <Nav navbar>
            <NavItem>
              <NavLink className="nav-link" to="/staff">
                <span className="fa fa-home fa-lg"></span>Nhân Viên
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/department">
                <span></span>Phòng ban
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/salary">
                <span></span>Bảng lương
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
