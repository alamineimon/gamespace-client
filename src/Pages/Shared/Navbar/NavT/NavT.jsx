import React from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
const NavT = () => {
  return (
    <div className="bg-primary py-2">
      <div className="w-11/12 mx-auto">
        <div className="flex space-x-4 text-2xl text-secondary justify-center">
          <MdFacebook />
          <FaInstagram />
          <FaYoutube />
        </div>
      </div>
    </div>
  );
};

export default NavT;
