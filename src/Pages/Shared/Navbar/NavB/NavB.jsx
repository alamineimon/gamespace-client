import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { GiBoltShield } from "react-icons/gi";
import { BiFoodMenu } from "react-icons/bi";
import { HiMenuAlt1 } from "react-icons/hi";

import "./NavB.css";

const NavB = () => {
  const location = useLocation();
  let currentPath = location.pathname.split("/")[1];


  let activeClassName =
    "bg-primary lg:border-4 text-secondary lg:border-primary lg:bg-primary lg:text-neutral rounded-sm lg:px-5 py-2 lg:hover:text-neutral text-sm ";
  let notActiveClassName =
    "lg:border-4 lg:border-transparent hover:text-accent lg:mx-5  py-2 text-sm";
  const navlinks = (
    <>
      {[
        ["Home", "/"],
        ["shop", "/shop"],
        ["Live", "/livestream"],
        ["2D Games", "/2dgames"],
        ["HTML Games", "/playGames"],
        ["Community", "/communityfeed"],
      ]?.map(([title, url]) => {
        return (
          <li key={url}>
            <NavLink
              to={url}
              className={({ isActive }) =>
                isActive ? activeClassName : notActiveClassName
              }
            >
              {title}
            </NavLink>
          </li>
        );
      })}
    </>
  );
  return (
    <div
      className={`py-1 min-h-[8vh] sm:py-2`}
    >
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
        <div className="navbar-center hidden lg:flex">
          <ul className=" flex px-1 font-bold uppercase">{navlinks}</ul>
        </div>

      </div>
    </div>
  );
};

export default NavB;
