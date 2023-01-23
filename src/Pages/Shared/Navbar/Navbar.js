import React from "react";
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
