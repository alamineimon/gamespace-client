import React from "react";
import "./Nav.css";
import defaultAvtar from "../../../assets/images/gamingAvatar.webp";
import NavbarTop from "./NavbarTop/NavbarTop";

const Navbar = () => {
  return (
    <nav>
      <NavbarTop defaultAvtar={defaultAvtar} />
    </nav>
  );
};

export default Navbar;
