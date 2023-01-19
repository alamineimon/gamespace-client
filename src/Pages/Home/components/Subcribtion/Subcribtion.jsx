import React from "react";
import './Subcribtion.css'
import bgVideo2 from "../../../../assets/videos/bg2.mp4";
import { SiMinutemailer } from 'react-icons/si';

const Subcribtion = () => {
  return (
    <div className="">
      <div className="landingPage my-7">
        <video src={bgVideo2} autoPlay muted loop className="videoBg"></video>
      </div>
      <div className="flex justify-center ">
        <div className="flex justify-center rounded-t-full items-center pt-8 bg-black w-2/3 ">
          <div className="mr-20  text-2xl">
            <span className="text-white font-bold">Our </span>
            <span className="text-yellow-400 font-bold">Newsletter</span>
          </div>
          <div className="flex justify-center items-center ml-10">
            <fieldset className="w-full space-y-1 dark:text-gray-100">
              <label for="Enter your email" className="hidden">
                Enter your email
              </label>
              <div className="w-[350px]" >
                
                <input
                  type="search"
                  name="Search"
                  placeholder="Enter your email"
                  className="w-full py-3 doangel pl-4  mb-1 text-sm  focus:outline-none "
                />
              </div>
            </fieldset>
            <div className=" doangel flex justify-center items-center  text-black  font-bold bg-yellow-500 file-input-bordered">

            <button className="   text-black  font-bold bg-yellow-500 file-input-bordered py-3 pl-3 pr-2">
              SUBSCRIBE
            </button>
              <p className="pr-2 text-lg"><SiMinutemailer/></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subcribtion;
