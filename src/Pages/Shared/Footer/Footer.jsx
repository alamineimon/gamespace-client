import React from "react";
import { useContext } from "react";
import {
  FaDiscord,
  FaFacebook,
  FaGoogle,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdOutlineKeyboardArrowUp } from "react-icons/md"
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const Footer = () => {
  const { theme } = useContext(AuthContext);
  return (
    <div >
      <div className={`mx-auto overflow-hidden text-gray-400 ${theme === "dark" ? "bg-black" : "bg-gray"}`}>
        <footer className="w-11/12 m-auto py-8 flex flex-wrap justify-between md:justify-around gap-3">
          <div className="">
            <h1 className={`font-bold mb-2 ${theme === "dark" ? "text-white1" : "text-black1"}`}>Players community</h1>
            <p className="h-1 w-16 rounded-t-2xl bg-white"></p>
            <div className="my-8 text-left">
              <ul className="text-gray-400">
                <li className={`${theme === "dark" ? "text-gray" : "text-black1"}`}>Regular Players</li>
                <li className={`${theme === "dark" ? "text-gray" : "text-black1"}`}>HTML Game player</li>
                <li className={`${theme === "dark" ? "text-gray" : "text-black1"}`}>Game Space player</li>
                <li className={`${theme === "dark" ? "text-gray" : "text-black1"}`}>Live Stream with community</li>
              </ul>
            </div>
          </div>
          <div className="">
            <h1 className={`text-gray-400 font-bold mb-2 ${theme === "dark" ? "text-white1" : "text-black1"}`}>Players community</h1>
            <p className="h-1 w-16 rounded-t-2xl bg-white"></p>
            <div className="my-8 text-left">
              <ul className="text-gray-400">
                <li className={`${theme === "dark" ? "text-gray" : "text-black1"}`}>News</li>
                <li className={`${theme === "dark" ? "text-gray" : "text-black1"}`}>Team</li>
                <li className={`${theme === "dark" ? "text-gray" : "text-black1"}`}>Partners</li>
              </ul>
            </div>
          </div>
          <div className=" left-4 ">
            <h1 className={`text-gray-400 font-bold mb-2 ${theme === "dark" ? "text-white1" : "text-black1"}`}>Players community</h1>
            <p className="h-1 w-16  rounded-t-2xl bg-white"></p>
            <div className="my-8  ">
              <ul className="text-gray-400">
                <div className="flex  items-center">
                  <FaFacebook /> <li className={`${theme === "dark" ? "text-gray" : "text-black1"}`}>gamespace_community</li>
                </div>
                <div className="flex  items-center">
                  <FaYoutube /> <li className={`${theme === "dark" ? "text-gray" : "text-black1"}`}>gamespace_tv</li>
                </div>
                <div className="flex  items-center">
                  <FaDiscord /> <li className={`${theme === "dark" ? "text-gray" : "text-black1"}`}>gamespace_live</li>
                </div>
              </ul>
            </div>
          </div>
        </footer>
        <footer>
          <div className="flex justify-center items-center mb-4">
            <Link to="/">
              <img

                className=" h-20 w-32 "
                src="https://i.ibb.co/2s1VHmq/game-Space-Dark.png"
                alt=""
              />
            </Link>
          </div>
          <div className="w-11/12 md:w-7/12 m-auto flex justify-center items-center text-justify pb-10">
            <p className={`text-gray-400 ${theme === "dark" ? "text-gray" : "text-black1"}`}>
              Handcrafted by and for Gamers @ 2023 . Game Space by Themosaurus.
              All related conntent, characters, names and materials that
              could be part of an existing work, are the exclusive property of
              their authors.</p>
          </div>
        </footer>
        <footer className={`text-gray-400 flex justify-center items-center pb-5 ${theme === "dark" ? "text-gray" : "text-black1"}`}>
          <p className="mr-3"> Privacy Policy </p>
          <p className="mr-3"> Terms of Service</p>
          <Link to="/register">
            <p> Register</p>
          </Link>
        </footer>
        <footer className="text-gray-400 flex justify-center items-center ">
          <div className="flex items-center  gap-6 text-[#dedee2]">
            <FaFacebook className={`hover:text-yellow-600 ${theme === "dark" ? "text-gray" : "text-black1"}`} title="Facebook" />
            <FaTwitter
              className={`hover:text-yellow-600 ${theme === "dark" ? "text-gray" : "text-black1"}`}
              title="Twitter"
            ></FaTwitter>
            <FaPinterest
              className={`hover:text-yellow-600 ${theme === "dark" ? "text-gray" : "text-black1"}`}
              title="Pinterest"
            ></FaPinterest>
            <FaGoogle
              className={`hover:text-yellow-600 ${theme === "dark" ? "text-gray" : "text-black1"}`}
              title="Google"
            ></FaGoogle>
          </div>
        </footer>
          <div className="text-end">
              <a href="#mainmenu" className='flex justify-end items-end gap-1 text-sm font-bold -mt-5 mb-5 pr-10'>
                <p>Back To Top</p>
                <MdOutlineKeyboardArrowUp className='text-2xl text-blue-200 cursor-pointer'></MdOutlineKeyboardArrowUp>
              </a>
            </div>
       
      </div>
    </div>
  );
};

export default Footer;
