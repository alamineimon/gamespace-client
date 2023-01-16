import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import "./NavbarBottom.css";

const NavbarBottom = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="mt-4">
      <div className="navbarBottomBG p-3">
        <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="relative flex items-center justify-center">
            <ul className="items-center justify-center hidden space-x-8 lg:flex">
              <li>
                <Link
                  to="/"
                  className="font-bold uppercase tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="font-bold uppercase tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/game"
                  className="font-bold uppercase tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Game
                </Link>
              </li>

              <li>
                <Link
                  to="/aboute"
                  className="font-bold uppercase tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/blog"
                  className="font-bold uppercase tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/support"
                  className="font-bold uppercase tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  to="/htmlgames"
                  className="font-bold uppercasetracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  HTML Games
                </Link>
              </li>
            </ul>

            {/* <fieldset className=" inline-flex items-center space-y-">
              <label htmlFor="Search" className="hidden">
                Search
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <BiSearch className="text-1xl absolute justify-center items-center cursor-pointer"></BiSearch>
                </span>
                <input
                  type="search"
                  name="Search"
                  placeholder="Search..."
                  className="bg-white/10 focus:bg-white/25 text-gray-800 focus:outline-none focus:shadow-outline rounded-3xl pl-7 pr-3 py-1 focus:text-white"
                />
              </div>
            </fieldset> */}
            <div className="lg:hidden">
              <button
                aria-label="Open Menu"
                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg className="w-5 text-gray-100" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>
              {isMenuOpen && (
                <div className="absolute top-0 left-0 w-full z-10 ">
                  <div className="p-5 bg-blue-700 border border-gray-400 rounded shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div></div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-500  focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg
                            className="w-5 text-gray-100"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul className="space-y-4">
                        <li>
                          <Link
                            to="/home"
                            className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Home
                          </Link>
                        </li>

                        <li>
                          <Link
                            to="/shop"
                            className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Shop
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/game"
                            className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Game
                          </Link>
                        </li>

                        <li>
                          <Link
                            to="/aboute"
                            className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Aboute
                          </Link>
                        </li>

                        <li>
                          <Link
                            to="/blog"
                            className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Blog
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/support"
                            className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Support
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/htmlgame"
                            className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            HTML Game
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarBottom;
