import React from "react";
import "./Subcribtion.css";
import { SiMinutemailer } from "react-icons/si";

const Subcribtion = () => {
  return (
    <div className=" ">
      <div className="flex bg-transparent justify-center ">
        <div className="lg:flex justify-center block rounded-t-full items-center pt-8 bg-black w-2/3 ">
          <div className="mr-20 lg:block flex justify-center items-center lg:ml-0 ml-20 text-2xl">
            <span className="text-white font-bold">Our </span>
            <span className="text-yellow-400 font-bold">Newsletter</span>
          </div>
          <div className="flex  ml-5  w-1/3 justify-center items-center lg:ml-10">
            <fieldset className="lg:w-full w-2/3 space-y-1 dark:text-gray-100">
              <label htmlFor="Enter your email" className="hidden">
                Enter your email
              </label>
              <div className="w-[350px]">
                <input
                  type="search"
                  name="Search"
                  placeholder="Enter your email"
                  className="w-full py-3 doangel lg:pl-4  pl-32 mb-1 text-sm  focus:outline-none "
                />
              </div>
            </fieldset>
            <div className=" doangel flex justify-center items-center  text-black  font-bold bg-yellow-500 file-input-bordered">
              <button className="lg:mr-0 mr-4  lg:w-full w-1/2 text-black  lg:text-lg text-sm font-bold bg-yellow-500 file-input-bordered py-3 lg:pl-3 pr-2">
                SUBSCRIBE
              </button>
              <p className="pr-2 text-lg">
                <SiMinutemailer />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subcribtion;
