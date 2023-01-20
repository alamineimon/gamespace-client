import React from "react";
import "./Features.css";
import { FaHeadphones } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { AiFillTrophy, AiOutlineDownload, AiOutlineTeam } from "react-icons/ai";
import { BsHandIndexThumb, BsFillChatQuoteFill } from "react-icons/bs";
import { TbDeviceGamepad2 } from "react-icons/tb";

const Features = () => {
  return (
    <div className="features lg:h-[600px] h-[1050px]">
        <h1 className="text-center text-3xl text-yellow-300 font-bold uppercase">
          Fantastic Features
        </h1>
        <hr  className="bg-yellow-300 h-1 mx-auto mt-2 w-48 mb-12 "/>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 lg:px-32">
          <div className="flex p-2  mr-2">
            <AiOutlineDownload className="mr-2 text-5xl text-yellow-400"></AiOutlineDownload>
            <div>
              <h4 className="text-white text-xl font-semibold">
                Download Games
              </h4>
              <p className="text-gray-400 font-bold">
              You can browse and download your games.
            </p>
          </div>
        </div>
        <div className="flex p-2  mr-2 ">
          <TbDeviceGamepad2 className="mr-2 text-5xl text-yellow-400"></TbDeviceGamepad2>
          <div>
            <h4 className="text-white text-xl font-semibold">
              Play HTML5 Games
            </h4>
            <p className="text-gray-400 font-bold">
              You can play your favorite games.
            </p>
          </div>
        </div>
        <div className="flex p-2  mr-2 ">
          <BsFillChatQuoteFill className="mr-2 text-5xl text-yellow-400"></BsFillChatQuoteFill>
          <div>
            <h4 className="text-white text-xl font-semibold">Real-Time Chat</h4>
            <p className="text-gray-400 font-bold">
              You can communicate your teammates here.
            </p>
          </div>
        </div>
        <div className="flex p-2  mr-2 ">
          <BsHandIndexThumb className="mr-2 text-5xl text-yellow-400"></BsHandIndexThumb>
          <div>
            <h4 className="text-white text-xl font-semibold">
              One click install demo
            </h4>
            <p className="text-gray-400 font-bold">
              You can download your favorite games by one click.
            </p>
          </div>
        </div>
        <div className="flex p-2  mr-2 ">
          <FaHeadphones className="mr-2 text-5xl text-yellow-400"></FaHeadphones>
          <div>
            <h4 className="text-white text-xl font-semibold">
              Custom team pages
            </h4>
            <p className="text-gray-400 font-bold">
              You can create a custome team for your teammates.
            </p>
          </div>
        </div>
        <div className="flex p-2  mr-2 ">
          <AiOutlineTeam className="mr-2 text-5xl text-yellow-400"></AiOutlineTeam>
          <div>
            <h4 className="text-white text-xl font-semibold">
              Custom User pages
            </h4>
            <p className="text-gray-400 font-bold">
              You can create a custome team for your teammates.
            </p>
          </div>
        </div>
        <div className="flex p-2  mr-2 ">
          <AiFillTrophy className="mr-2 text-6xl text-yellow-400"></AiFillTrophy>
          <div>
            <h4 className="text-white text-xl font-semibold">
              Create Tournaments
            </h4>
            <p className="text-gray-400 font-bold">
              You can create turnaments.
            </p>
          </div>
        </div>
        <div className="flex p-2  mr-2 ">
          <BiSupport className="mr-2 text-5xl text-yellow-400"></BiSupport>
          <div>
            <h4 className="text-white text-xl font-semibold">
              Real-Time Chat Support
            </h4>
            <p className="text-gray-400 font-bold">
              We provide a real-time chat support system.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
