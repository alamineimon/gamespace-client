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
        <a href="https://www.facebook.com/GameSpace7777" target={'_blank'} alt="/">  <FaFacebookSquare className="hover:text-blue-600" /></a>
        <a href="https://www.facebook.com/GameSpace7777" target={'_blank'} alt="/"> <FaInstagram className="hover:text-blue-600" /></a>
        <a href="https://www.youtube.com/watch?v=f8GE3F2UttU" target={'_blank'} alt="/"><FaYoutube className="hover:text-red-700" /></a>
        
         
          
        </div>
        <div className="flex items-center">
          <FaGlobe className="text-secondary" />
          <select className="border-none outline-none rounded-none bg-primary text-secondary font-bold">
            <option className="bg-secondary text-white" value="">
              Language
            </option>
            <option className="bg-secondary text-white" value="En">
              En
            </option>
            <option className="bg-secondary text-white" value="Bn">
              Bn
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default NavT;
