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
import { GiBoltShield } from "react-icons/gi";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const Footer = () => {
  const { theme } = useContext(AuthContext);
  return (
    <div>
      <div
        className={`mx-auto overflow-hidden text-gray-400 ${
          theme === "dark" ? "bg-black" : "bg-gray"
        }`}
      >
        <footer className="w-11/12 m-auto py-8 flex flex-wrap justify-between md:justify-around gap-3">
          <div className="">
            <h1
              className={`font-bold mb-2 ${
                theme === "dark" ? "text-white1" : "text-black1"
              }`}
            >
              Players community
            </h1>
            <p className="h-1 w-16 rounded-t-2xl bg-white"></p>
            <div className="my-8 text-left">
              <ul className="text-gray-400">
                <li
                  className={`${
                    theme === "dark" ? "text-gray" : "text-black1"
                  }`}
                >
                  Regular Players
                </li>
                <li
                  className={`${
                    theme === "dark" ? "text-gray" : "text-black1"
                  }`}
                >
                  HTML Game player
                </li>
                <li
                  className={`${
                    theme === "dark" ? "text-gray" : "text-black1"
                  }`}
                >
                  Game Space player
                </li>
                <li
                  className={`${
                    theme === "dark" ? "text-gray" : "text-black1"
                  }`}
                >
                  Live Stream with community
                </li>
              </ul>
            </div>
          </div>
          <div className="">
            <h1
              className={`text-gray-400 font-bold mb-2 ${
                theme === "dark" ? "text-white1" : "text-black1"
              }`}
            >
              Players community
            </h1>
            <p className="h-1 w-16 rounded-t-2xl bg-white"></p>
            <div className="my-8 text-left">
              <ul className="text-gray-400">
                <li
                  className={`${
                    theme === "dark" ? "text-gray" : "text-black1"
                  }`}
                >
                  News
                </li>
                <li
                  className={`${
                    theme === "dark" ? "text-gray" : "text-black1"
                  }`}
                >
                  Team
                </li>
                <li
                  className={`${
                    theme === "dark" ? "text-gray" : "text-black1"
                  }`}
                >
                  Partners
                </li>
              </ul>
            </div>
          </div>
          <div className=" left-4 ">
            <h1
              className={`text-gray-400 font-bold mb-2 ${
                theme === "dark" ? "text-white1" : "text-black1"
              }`}
            >
              Players community
            </h1>
            <p className="h-1 w-16  rounded-t-2xl bg-white"></p>
            <div className="my-8  ">
              <ul className="text-gray-400">
                <a
                  href="https://www.facebook.com/GameSpace7777"
                  target={"_blank"}
                  alt="/"
                  rel="noreferrer"
                >
                  <div className="flex items-center space-x-1">
                    <FaFacebook />{" "}
                    <li
                      className={`${
                        theme === "dark" ? "text-gray" : "text-black1"
                      }`}
                    >
                      {" "}
                      gamespace_community
                    </li>
                  </div>
                </a>
                <a
                  href="https://www.facebook.com/GameSpace7777"
                  target={"_blank"}
                  alt="/"
                  rel="noreferrer"
                >
                  <div className="flex  items-center space-x-1">
                    <FaYoutube />{" "}
                    <li
                      className={`${
                        theme === "dark" ? "text-gray" : "text-black1"
                      }`}
                    >
                      {" "}
                      gamespace_tv
                    </li>
                  </div>
                </a>
                <a
                  href="https://www.facebook.com/GameSpace7777"
                  target={"_blank"}
                  alt="/"
                  rel="noreferrer"
                >
                  <div className="flex  items-center space-x-1">
                    <FaDiscord />{" "}
                    <li
                      className={`${
                        theme === "dark" ? "text-gray" : "text-black1"
                      }`}
                    >
                      {" "}
                      gamespace_live
                    </li>
                  </div>
                </a>
              </ul>
            </div>
          </div>
        </footer>
        <footer>
          <div className="flex justify-center items-center mb-6">
            <Link
              to="/"
              className={`text-xs md:text-xl lg:text-2xl flex space-x-3 items-center pl-2 `}
            >
              <GiBoltShield
                className={`text-2xl md:text-5xl text-white ${
                  theme === "light" && "text-black"
                }`}
              />
              <div className="text-white">
                <span
                  className={`font-gaming ${theme === "light" && "text-black"}`}
                >
                  Game Space
                </span>
                <span className="text-xs text-primary lg:block font-bold capitalize hidden ">
                  Any Game, Any time, Any place
                </span>
              </div>
            </Link>
          </div>
          <div className="w-11/12 md:w-7/12 m-auto flex justify-center items-center text-justify pb-10">
            <p
              className={`text-gray-400 text-center ${
                theme === "dark" ? "text-gray" : "text-black1"
              }`}
            >
              Handcrafted by and for Gamers @ 2023 . Game Space by Themosaurus.
              All related conntent, characters, names and materials that could
              be part of an existing work, are the exclusive property of their
              authors.
            </p>
          </div>
        </footer>
        <footer
          className={`text-gray-400 flex justify-center items-center pb-5 ${
            theme === "dark" ? "text-gray" : "text-black1"
          }`}
        >
          <p className="mr-3"> Privacy Policy </p>
          <p className="mr-3"> Terms of Service</p>
          <Link to="/register">
            <p> Register</p>
          </Link>
        </footer>
        <footer className="text-gray-400 flex md:justify-center pl-7 items-center ">
          <div className="flex items-center  gap-6 text-[#dedee2]">
            <a
              href="https://www.facebook.com/GameSpace7777"
              target={"_blank"}
              alt="/"
              rel="noreferrer"
            >
              <FaFacebook
                className={`hover:text-blue-600 ${
                  theme === "dark" ? "text-gray" : "text-black1"
                }`}
                title="Facebook"
              />
            </a>
            <a
              href="https://www.facebook.com/GameSpace7777"
              target={"_blank"}
              alt="/"
              rel="noreferrer"
            >
              <FaTwitter
                className={`hover:text-blue-600 ${
                  theme === "dark" ? "text-gray" : "text-black1"
                }`}
                title="Twitter"
              ></FaTwitter>
            </a>
            <a
              href="https://www.facebook.com/GameSpace7777"
              target={"_blank"}
              alt="/"
              rel="noreferrer"
            >
              <FaPinterest
                className={`hover:text-blue-600 ${
                  theme === "dark" ? "text-gray" : "text-black1"
                }`}
                title="Pinterest"
              ></FaPinterest>
            </a>
            <a
              href="https://www.facebook.com/GameSpace7777"
              target={"_blank"}
              alt="/"
              rel="noreferrer"
            >
              <FaGoogle
                className={`hover:text-blue-600 ${
                  theme === "dark" ? "text-gray" : "text-black1"
                }`}
                title="Google"
              ></FaGoogle>
            </a>
          </div>
        </footer>
        <div className="text-end">
          <a
            href="#mainmenu"
            className="flex justify-end items-end gap-1 text-sm font-bold -mt-5 mb-5 pr-10"
          >
            <p>Back To Top</p>
            <MdOutlineKeyboardArrowUp className="text-2xl text-blue-200 cursor-pointer"></MdOutlineKeyboardArrowUp>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
