import React from "react";
import NavbarBottom from "./NavbarBottom/NavbarBottom";
import NavbarTop from "./NavbarTop/NavbarTop";
import "./Nav.css";
import NavT from "./NavT/NavT";
import NavB from "./NavB/NavB";

const Navbar = () => {
  return (
    <nav>
      <NavT />
      <NavB />
    </nav>
  );
};

export default Navbar;
