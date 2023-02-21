import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { GiBoltShield } from "react-icons/gi";
import { BiFoodMenu } from "react-icons/bi";
import { HiMenuAlt1 } from "react-icons/hi";
import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthProvider";
import "./NavB.css";
import { useSelector, useDispatch } from "react-redux";



const NavB = ({ defaultAvtar }) => {
  const { email } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { theme, setTheme, userinfo } = useContext(AuthContext);
  const location = useLocation();
  let currentPath = location.pathname.split("/")[1];
  // Toggle dark mode/light mode
  const [mode, setMode] = useState(true);
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      setMode(true);
    } else {
      setMode(false);
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

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
      className={`py-1 min-h-[8vh] sm:py-2 ${
        theme === "dark" ? "bg-black1 text-white1" : "bg-white1 text-black1"
      }`}
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
        <div className="navbar-center hidden lg:flex">
          <ul className=" flex px-1 font-bold uppercase">{navlinks}</ul>
        </div>
        <div className="navbar-end">
          {!email ?

            <Link
              to="/login"
              className="btn btn-primary btn-xs md:btn-sm font-bold rounded-none"
            >
              Get started
            </Link>
            :

            <label className="swap swap-rotate ml-3">
              <input
                type="checkbox"
                className={`ml-3${theme === "dark"
                  ? "bg-white1 text-black1"
                  : "bg-black1 text-white1"
                  }ease-in duration-100 my-4`}
                onClick={toggleTheme}
              />
              <svg
                className="swap-off fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              <svg
                className="swap-on fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          }
        </div>
      </div>
    </div>
  );
};

export default NavB;
