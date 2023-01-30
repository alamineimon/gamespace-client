import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GiBoltShield } from "react-icons/gi";
import { HiMenuAlt1 } from "react-icons/hi";
import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthProvider";
import './NavB.css'
const NavB = () => {
  const { user, logOut, theme, setTheme } = useContext(AuthContext);
  // Toggle dark mode/light mode
  const [mode, setMode] = useState(true);
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      setMode(true)
    } else {
      setMode(false);
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  let activeClassName =
    "bg-primary lg:border-4 text-secondary lg:border-primary lg:bg-transparent lg:text-primary  lg:px-5 py-2 lg:hover:text-primary rounded-none";
  let notActiveClassName =
    "lg:border-4 lg:border-transparent hover:text-accent lg:mx-5  rounded-none py-2";
  const navlinks = (
    <>
      {[
        ["Home", "/"],
        ["about", "/about"],
        ["shop", "/shop"],
        ["support", "/support"],
        ["2D Games", "/2dgames"],
        ["HTML Games", "/playGames"],
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
    <div className={`py-1 sm:py-2 ${theme === "dark" ? "bg-black1 text-white1" : "bg-white1 text-black1"}`}>
      <div className={"navbar w-11/12 mx-auto px-0"}>
        <div className="navbar-start">
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
          <Link className="text-xs md:text-xl lg:text-2xl flex space-x-3 items-center pl-2">
            <GiBoltShield className={`text-2xl md:text-5xl text-white ${theme ==="light" && "text-black"}`} />
            <div className="text-white">
              <span className={`font-gaming ${theme==="light" && "text-black"}`}>Game Space</span>
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
          {!user ? (
            <>
            <Link
              to="/login"
              className="btn btn-primary btn-xs md:btn-sm font-bold rounded-none"
            >
              Get started
            </Link>
            <button
            className={`font-semibold mr-10 ${theme === "dark" ? "bg-white" : "bg-black"} ${theme === "dark" ? "text-black" : "text-white"} py-2 px-4 rounded-lg ease-in duration-100 my-4 md:my-0 ml-2`}
            onClick={toggleTheme}
          >
            {mode === true ? "light" : "dark"}
          </button>
          </>
          ) : (
            <div className="flex items-center">
              <div className="dropdown dropdown-end ">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img alt="" src={user?.photoURL} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary rounded-box w-52"
                >
                  <li>
                    <Link to="/profile" className="justify-between">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link>Settings</Link>
                  </li>
                  <li>
                    <p onClick={logOut}>Logout</p>
                  </li>
                </ul>
              </div>
              <p className="font-bold text-sm">
                Hi{" "}
                <span className="text-primary">
                  {user?.displayName?.split(" ")[0]}
                  <button
                      className={`font-semibold mr-10 ${theme === "dark" ? "bg-white1 text-black1" : "bg-black1 text-white1"} py-2 px-4 rounded-lg ease-in duration-100 my-4 md:my-0 ml-2`}
                      onClick={toggleTheme}
                    >
                      {mode === true ? "light" : "dark"}
                  </button>
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavB;
