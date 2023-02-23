import React from "react";
import {
  FaDiscord,
  FaFacebook,
  FaPinterestSquare,
  FaYoutube,
} from "react-icons/fa";
import {
  AiFillTwitterSquare,
  AiFillGoogleSquare,
  AiFillFacebook,
} from "react-icons/ai";
import { GiBoltShield } from "react-icons/gi";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div
        className={`mx-auto overflow-hidden text-gray-400 bg-black1`}
      >
        <footer className="w-11/12 m-auto py-8 flex flex-wrap justify-between md:justify-around gap-3">
          <div className="">
            <h1
              className={`font-bold mb-2`}
            >
              Quick Links
            </h1>
            <p className="h-1 w-16 rounded-t-2xl bg-white"></p>
            <div className="my-8 text-left">
              <ul className="text-gray-400">
                <li>
                  <Link to='/allplayers'>
                    Active Players
                  </Link>
                </li>
                <li>
                  <Link to="/playGames">
                    HTML Games
                  </Link>
                </li>
                <li>
                  <Link to="/2dgames">
                    2D Games
                  </Link>
                </li>
                <li>
                  <Link to="/livestream">
                    Live Stream 
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="">
            <h1>
              Players community
            </h1>
            <p className="h-1 w-16 rounded-t-2xl bg-white"></p>
            <div className="my-8 text-left">
              <ul className="text-gray-400">
                <li>
                  News
                </li>
                <li>
                  Team
                </li>
                <li>
                  Partners
                </li>
              </ul>
            </div>
          </div>
          <div className=" left-4 ">
            <h1>
              Social Media
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
                    <li>
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
                    <li>
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
                    <li>
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
                className={`text-2xl md:text-5xl text-white`}
              />
              <div className="text-white">
                <span
                  className={`font-gaming`}
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
              className={`text-gray-400 text-center`}
            >
              Handcrafted by and for Gamers @ 2023 . Game Space by Themosaurus.
              All related conntent, characters, names and materials that could
              be part of an existing work, are the exclusive property of their
              authors.
            </p>
          </div>
        </footer>
        <footer
          className={`text-gray-400 flex justify-center items-center pb-5`}
        >
          <p className="mr-3"> Privacy Policy </p>
          <p className="mr-3"> Terms of Service</p>
          <Link to="/register">
            <p> Register</p>
          </Link>
        </footer>
        <footer className="text-gray-400 flex md:justify-center pl-7 items-center ">
          {/* social media icons */}
          <div className="hidden lg:flex items-center justify-center ">
            <a
              href="https://www.facebook.com/GameSpace7777/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <AiFillFacebook
                className="text-primary text-xl hover:text-white mr-3"
                title="Facebook"
              />
            </a>
            <a
              href="https://www.facebook.com/GameSpace7777/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <AiFillTwitterSquare
                className="text-primary text-xl hover:text-white mr-3"
                title="Twitter"
              />
            </a>
            <a
              href="https://www.facebook.com/GameSpace7777/"
              target="_blank"
              rel="noreferrer"
            >
              <FaPinterestSquare
                className="text-primary text-xl hover:text-white mr-3"
                title="Pinterest"
              />
            </a>
            <a
              href="https://www.facebook.com/GameSpace7777/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <AiFillGoogleSquare
                className="text-primary text-xl hover:text-white"
                title="Google"
              />
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
