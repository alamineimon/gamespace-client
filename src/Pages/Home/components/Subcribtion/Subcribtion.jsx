import React, { useState } from "react";
import "./Subcribtion.css";
import { SiMinutemailer } from "react-icons/si";

const Subcribtion = () => {
  const [formState, setFormstate] = useState({});

  const subcribtion = (event)=>{
    event.preventDafault()
    setFormstate({...formState, [event.target.email]: event.target.value})
  }


  return (
    <div className=" ">
      <div className="flex bg-transparent justify-center">
        <div className="flex justify-around  rounded-t-full items-center bg-black w-11/12 md:w-2/3 pt-6 pb-4">
          <div className=" -space-y-2 text-lg md:text-2xl">
            <p className="text-white font-bold">Our</p>
            <p className="text-yellow-400 font-bold"> Newsletter</p>
         </div>
          <div className="flex justify-center items-center">
            <fieldset className=" space-y-1 dark:text-gray-100">
              <label htmlFor="Enter your email" className="hidden">
                Enter your email
              </label>
              <div className="w-28 md:w-48 lg:w-96">
                <input
                  onChange={subcribtion}
                  type="search"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full py-3 doangel p-4 mb-1 text-sm focus:outline-none "
                />
              </div>
            </fieldset>
            <div  className=" doangel flex justify-center items-center  text-black  font-bold bg-yellow-500 file-input-bordered">
              <button type="submit" className="lg:mr-0 mr-4 lg:w-full w-1/2 text-black text-sm lg:text-lg font-bold bg-yellow-500 file-input-bordered py-3 lg:pl-3 pr-2 ">
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
