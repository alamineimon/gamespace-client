import React, { useState } from "react";
import { Link } from "react-router-dom";
import headerLogo from "../../../../assets/images/logo.png";
import Button from "../../Button/Button";
import "./NavbarTop.css";
import { FaFacebook, FaTwitter, FaPinterest, FaGoogle , FaGlobeAmericas } from "react-icons/fa";

const NavbarTop = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="px-4 py-3 hidden lg:block mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8 bgTransparent">
      <div className="relative flex items-center justify-between">
        <Link
          to="/"
          aria-label="Games space"
          title="Games space"
          className="inline-flex items-center"
        >
          <p className="text-2xl text-white font-bold">Game Space</p>
          {/* <img src={headerLogo} alt="headerLogo" /> */}
        </Link>
        <ul className=" items-center hidden space-x-8 lg:flex">
          <li>
            <Link className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
              <div className="flex items-center gap-6 text-[#dedee2]">
                <FaFacebook className="hover:text-yellow-600" title="Facebook" />
                <FaTwitter className="hover:text-yellow-600" title="Twitter"></FaTwitter>
                <FaPinterest className="hover:text-yellow-600" title="Pinterest"></FaPinterest>
                <FaGoogle className="hover:text-yellow-600" title="Google"></FaGoogle>
              </div>
            </Link>
          </li>
          <li>
            <div className="flex ml-6 items-center justify-center">
              <FaGlobeAmericas className="hover:text-yellow-600 text-xl text-white" title="Google"></FaGlobeAmericas>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#dedee2"
                className="w-6 h-6 mt-2 hover:bg-yellow-600 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                />
              </svg> */}

              <select className="bg-transparent text-xl cursor-pointer border-none text-[#dedee2] outline-none">
                <option
                  className="bg-[#1c1d55] hover:bg-yellow-600 cursor-pointer border-none text-xl"
                  value=""
                >
                  Languages
                </option>
                <option
                  className="bg-[#1c1d55] cursor-pointer border-none text-xl"
                  value="Bangla"
                >
                  BN
                </option>
                <option
                  className="bg-[#1c1d55] cursor-pointer border-none text-xl"
                  value="English"
                >
                  EN
                </option>
              </select>
            </div>
          </li>
          <li>
            <Link to='/login' className="bg-yellow-600 ml-16 text-white sm:mb-16 text-lg uppercase hover:text-white font-semibold px-8 py-2">
              
              Join Now
            </Link>
          </li>
        </ul>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
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
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      to="/"
                      aria-label="Company"
                      title="Company"
                      className="inline-flex items-center"
                    >
                      <img src={headerLogo} alt="header-logo" />
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
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
                      <Link className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
                        <div className="flex items-center gap-6 text-[#dedee2]">
                          <FaFacebook title="Facebook" />
                          <FaTwitter title="Twitter"></FaTwitter>
                          <FaPinterest title="Pinterest"></FaPinterest>
                          <FaGoogle title="Google"></FaGoogle>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <div className="flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#dedee2"
                          className="w-6 h-6 mt-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                          />
                        </svg>

                        <select className="bg-transparent text-xl cursor-pointer border-none text-[#dedee2] outline-none">
                          <option
                            className="bg-[#1c1d55] cursor-pointer border-none text-xl"
                            value="Languages"
                          >
                            Languages
                          </option>
                          <option
                            className="bg-[#1c1d55] cursor-pointer border-none text-xl"
                            value="Bangla"
                          >
                            Bangla
                          </option>
                          <option
                            className="bg-[#1c1d55] cursor-pointer border-none text-xl"
                            value="English"
                          >
                            English
                          </option>
                        </select>
                      </div>
                    </li>
                    <li>
                      <Link
                        to="/login"
                        aria-label="login"
                        title="login"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        <Button name={"Register"}></Button>
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
  );
};

export default NavbarTop;
