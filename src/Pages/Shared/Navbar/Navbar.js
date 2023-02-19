import React from "react";
import "./Nav.css";
import defaultAvtar from "../../../assets/images/gamingAvatar.webp";
import NavT from "./NavT/NavT";
import NavB from "./NavB/NavB";
import NavbarBottom from "./NavbarBottom/NavbarBottom";
import NavbarTop from "./NavbarTop/NavbarTop";

const Navbar = () => {
  return (
    <nav >
      {/* <NavT /> */}
      <NavbarTop/>
      <NavbarBottom/>
      {/* <NavB defaultAvtar={defaultAvtar} /> */}
    </nav>
  );
};

export default Navbar;
