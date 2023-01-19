import React from "react";
import "./Features.css";
import { FaHeadphones } from "react-icons/fa";
import { BiWebcam, BiRun } from "react-icons/bi";
import { AiFillTrophy } from "react-icons/ai";
import { BsHandIndexThumb } from "react-icons/bs";
import { ImDownload } from "react-icons/im";

const Features = () => {
  return (
    <div className="features">
      <div className="w-9/12 mx-auto">
        <h1 className="text-center text-3xl text-yellow-300 font-bold mb-12 uppercase mt-6">
          Fantastic Features
        </h1>
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
      <div className="flex flex-col lg:flex-row w-3/4 mx-auto mb-8">
        <div className="relative md:w-1/2 mb-2 md:mb-0">
        <div className="features-image lg:mr-2">
          <img
            src="https://img.freepik.com/free-photo/world-collapse-doomsday-scene-digital-painting_456031-63.jpg?size=626&ext=jpg&ga=GA1.1.207808977.1658386615&semt=sph"
            alt=""
            className="w-full rounded-xl h-80"
          />
        </div>
        <div className="absolute top-20 w-full text-center">
          <BiRun className="text-5xl w-full mx-auto text-yellow-300"></BiRun>
          <h5 className="text-2xl font-semibold font-serif text-black">Play Games</h5>
          <p className="text-white">Lorem ipsum dolor sit amet.</p>
          <button className="btn btn-warning btn-sm mt-4">Play</button>
        </div>
        </div>
        <div className="relative md:w-1/2">
        <div className="features-image-two">
          <img
            src="https://img.freepik.com/free-photo/cruel-war-scenes-digital-painting_456031-162.jpg?size=626&ext=jpg&ga=GA1.1.207808977.1658386615&semt=sph"
            alt=""
            className="w-full rounded-xl h-80"
          />
        </div>
        <div className="absolute top-20 w-full text-center">
        <ImDownload className="text-4xl w-full mx-auto text-black"></ImDownload>
          <h5 className="text-2xl font-semibold font-serif text-white">Download Games</h5>
          <p className="text-black">Lorem ipsum dolor sit amet.</p>
          <button className="btn btn-outline btn-secondary btn-sm mt-4">Download</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
