import React from "react";
import "./Nav.css";
import defaultAvtar from "../../../assets/images/gamingAvatar.webp";
import NavT from "./NavT/NavT";
import NavB from "./NavB/NavB";

const Navbar = () => {
  return (
    <nav>
      <NavT />
      <NavB defaultAvtar={defaultAvtar} />
    </nav>
  );
};

export default Navbar;
