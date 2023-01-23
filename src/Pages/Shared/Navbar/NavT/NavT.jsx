import React from "react";
import {
  FaFacebookSquare,
  FaGlobe,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
const NavT = () => {
  return (
    <div className="bg-primary py-2">
      <div className="w-11/12 mx-auto flex justify-between items-center">
        <div className="flex space-x-4 text-xl text-secondary justify-center">
          <FaFacebookSquare />
          <FaInstagram />
          <FaYoutube />
        </div>
        <div className="flex items-center">
          <FaGlobe className="text-secondary" />
          <select className="border-none outline-none rounded-none bg-primary text-secondary font-bold">
            <option disabled selected className="bg-secondary text-white  ">
              Language
            </option>
            <option className="bg-secondary text-white">En</option>
            <option className="bg-secondary text-white">Bn</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default NavT;
