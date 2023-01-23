import React from "react";
import { Link, NavLink } from "react-router-dom";
import { GiBoltShield } from "react-icons/gi";
const NavB = () => {
  let activeClassName =
    "border-4 border-primary   text-primary  px-5 py-2 hover:text-primary";
  let notActiveClassName =
    "border-4 border-transparent hover:text-accent mx-5 my-2";
  const navlinks = (
    <>
      {[
        ["Home", "/"],
        ["about", "/about"],
        ["shop", "/shop"],
        ["game", "/game"],
        ["Blog", "/blog"],
        ["support", "/support"],
        ["Play !", "/play-games"],
      ].map(([title, url]) => {
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
    <div className="bg-bg1 py-2">
      <div className="navbar w-11/12 mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navlinks}
            </ul>
          </div>
          <Link className="text-xl lg:text-2xl flex space-x-3">
            <GiBoltShield className="text-5xl text-white" />
            <div className="text-white">
              <span className="font-gaming">Game Space</span>
              <span className="text-xs text-primary block font-bold capitalize">
                Any Game, Any time, Any place
              </span>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" flex px-1 font-bold uppercase">{navlinks}</ul>
        </div>
        <div className="navbar-end">
          <Link to="/login" className="btn btn-primary font-bold rounded-none">
            Get started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavB;
