import React from "react";
import "./Features.css";
import { FaHeadphones } from "react-icons/fa";
import { BiWebcam } from "react-icons/bi";
import { AiFillTrophy } from "react-icons/ai";
import { BsHandIndexThumb } from "react-icons/bs";


const Features = () => {
  return (
    <div className="features">
      <div className="w-9/12 mx-auto">
        <h1 className="text-center text-3xl text-yellow-300 font-bold uppercase">
          Fantastic Features
        </h1>
        <hr  className="bg-yellow-300 h-1 mx-auto mt-2 w-64 mb-12 "/>
        <div className="flex flex-col lg:flex-row justify-between my-4">
          <div className="flex p-2 lg:w-1/2 mr-2">
            <BsHandIndexThumb className="mr-2 text-5xl text-yellow-400"></BsHandIndexThumb>
            <div>
              <h4 className="text-white text-xl font-semibold">
                One click install demo
              </h4>
              <p className="text-gray-400 font-bold">
                Lorem ipsum dolor sit amet. Lorem, ipsum dolor.
              </p>
            </div>
          </div>
          <div className="flex p-2 lg:w-1/2 mr-2">
            <FaHeadphones className="mr-2 text-5xl text-yellow-400"></FaHeadphones>
            <div></div>
            <div>
              <h4 className="text-white text-xl font-semibold">
                Custom team pages
              </h4>
              <p className="text-gray-400 font-bold">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Veritatis, officia.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between my-4">
          <div className="flex p-2 lg:w-1/2 mr-2">
            <BiWebcam className="mr-2 text-5xl text-yellow-400"></BiWebcam>
            <div>
              <h4 className="text-white text-xl font-semibold">
                Custom User pages
              </h4>
              <p className="text-gray-400 font-bold">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Veritatis, officia.
              </p>
            </div>
          </div>
          <div className="flex p-2 lg:w-1/2 mr-2">
            <AiFillTrophy className="mr-2 text-6xl text-yellow-400"></AiFillTrophy>
            <div>
              <h4 className="text-white text-xl font-semibold">
                Create Tournaments
              </h4>
              <p className="text-gray-400 font-bold">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Veritatis, officia. Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* extra play and download section */}

    </div>
  );
};

export default Features;
