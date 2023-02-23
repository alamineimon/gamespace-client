import React, { useContext, useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { GiBoltShield } from "react-icons/gi";
import "./NavbarTop.css";
import { RxLockClosed } from "react-icons/rx";
import { MdOutlineLogout } from "react-icons/md";
import { AuthContext } from "../../../../context/AuthProvider";
import { useDispatch, useSelector } from "react-redux";
import auth from "../../../../Firebase/firebase.config";
import { signOut } from "@firebase/auth";
import { logout } from "../../../../slice/auth/authSlice";
import { BiFoodMenu } from "react-icons/bi";
import { HiMenuAlt1 } from "react-icons/hi";
import { FaPinterestSquare } from "react-icons/fa";
import {
  AiOutlineFacebook,
  AiFillTwitterSquare,
  AiFillGoogleSquare,
} from "react-icons/ai";
import Loader from "../../Loader/Loader";

const NavbarTop = ({ defaultAvtar }) => {
  const { userinfo, logOut, user, userLoading } = useContext(AuthContext);
  const location = useLocation();
  let currentPath = location.pathname.split("/")[1];

  let activeClassName =
    "font-bold uppercase tracking-wide transition-colors duration-200 text-primary";
  let notActiveClassName =
    "font-bold uppercase tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400";
  const navlinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? activeClassName : notActiveClassName
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            isActive ? activeClassName : notActiveClassName
          }
        >
          Shop
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/livestream"
          className={({ isActive }) =>
            isActive ? activeClassName : notActiveClassName
          }
        >
          Live stream
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/2dgames"
          className={({ isActive }) =>
            isActive ? activeClassName : notActiveClassName
          }
        >
          2D games
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/playGames"
          className={({ isActive }) =>
            isActive ? activeClassName : notActiveClassName
          }
        >
          html gmaes
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/communityfeed"
          className={({ isActive }) =>
            isActive ? activeClassName : notActiveClassName
          }
        >
          Community
        </NavLink>
      </li>
    </>
  );
  if (userLoading) {
    return <Loader />;
  }
  return (
    <div className=" lg:block mx-auto  md:max-w-full lg:w-full   ">
      <div className={` sm:py-2 bg-black1 text-white1`}>
        <div id="mainmenu" className={"navbar w-11/12 mx-auto px-0"}>
          <div className="navbar-start">
            {currentPath === "dashboard" ? (
              <label
                htmlFor="dashboard"
                className="drawer-button lg:hidden text-2xl mr-3 "
              >
                <BiFoodMenu />
              </label>
            ) : (
              <></>
            )}
            <div className="dropdown ">
              <label tabIndex={0} className=" lg:hidden cursor-pointer ">
                <HiMenuAlt1 className="text-xl text-white hover:text-primary hover:border border-primary" />
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-6  shadow bg-base-200  w-52  font-bold uppercase text-sm border border-primary rounded-none"
              >
                {navlinks}
              </ul>
            </div>
            {/* social media icons */}
            <div className="hidden  lg:flex  items-center justify-center ">
              <a
                href="https://www.facebook.com/GameSpace7777/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <AiOutlineFacebook
                  className="text-primary hover:text-white mr-3"
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
                  className="text-primary hover:text-white mr-3"
                  title="Twitter"
                />
              </a>
              <a
                href="https://www.facebook.com/GameSpace7777/"
                target="_blank"
                rel="noreferrer"
              >
                <FaPinterestSquare
                  className="text-primary hover:text-white mr-3"
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
                  className="text-primary hover:text-white"
                  title="Google"
                />
              </a>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className=" flex px-1 font-bold uppercase">
              <Link
                to="/"
                className={`text-xs md:text-xl lg:text-2xl flex space-x-3 items-center pl-2 `}
              >
                <GiBoltShield className={`text-2xl md:text-5xl text-white`} />
                <div className="text-white">
                  <span className={`font-gaming`}>Game Space</span>
                  <span className="text-xs text-primary lg:block font-bold capitalize hidden ">
                    Any Game, Any time, Any place
                  </span>
                </div>
              </Link>
            </ul>
          </div>
          <div className="navbar-end">
            {!user ? (
              <>
                <Link
                  to="/login"
                  className="btn btn-primary btn-xs md:btn-sm mr-4 text-secondary font-bold rounded-none"
                >
                  {" "}
                  <MdOutlineLogout className="mr-2" />
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="btn btn-primary btn-xs md:btn-sm text-secondary font-bold rounded-none"
                >
                  <RxLockClosed className="mr-2" />
                  Sign Up
                </Link>
              </>
            ) : (
              <div className={`flex items-center `}>
                <div
                  className={`dropdown dropdown-end ${
                    currentPath === "dashboard" && "hidden"
                  } `}
                >
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar mr-2"
                  >
                    {user.uid ? (
                      <div className="w-10 rounded-full">
                        <img
                          alt=""
                          src={
                            userinfo?.photoURL
                              ? userinfo?.photoURL
                              : defaultAvtar
                          }
                          onError={(e) => (e.target.src = defaultAvtar)}
                        />
                        <div className="avatar border-4 border-primary rounded-full placeholder">
                          <div className="bg-neutral-focus text-neutral-content rounded-full lg:w-10 w-8 h-8 lg:h-10">
                            <span className="text-xl mt-1">
                              {userinfo?.name?.slice(0, 1)}
                            </span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}
                  </label>
                  <ul
                    tabIndex={0}
                    className={`menu menu-compact dropdown-content mt-4 p-2 shadow rounded-box w-40 bg-black1 text-white1`}
                  >
                    <li className="hover:bg-primary/10 hover:text-primary">
                      <Link to="/dashboard/profile" className="justify-between">
                        Profile
                      </Link>
                    </li>
                    <li className="hover:bg-primary/10 hover:text-primary">
                      <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="hover:bg-primary/10 hover:text-primary">
                      <button onClick={logOut}>Logout</button>
                    </li>
                  </ul>
                </div>
                <p className="font-bold text-sm flex items-center ">
                  <span
                    className={`text-primary ${
                      currentPath === "dashboard" && "hidden"
                    }`}
                  >
                    {user?.displayName?.split(" ")[0]}
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* nav bottom */}
      <div className="navbarBottomBG items-center justify-center w-full mx-auto text-white z-40 py-3 hidden lg:flex">
        <ul className="items-center justify-center hidden space-x-8 lg:flex ">
          {navlinks}
        </ul>
      </div>
    </div>
  );
};

export default NavbarTop;
