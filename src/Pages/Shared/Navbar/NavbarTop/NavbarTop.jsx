import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GiBoltShield } from "react-icons/gi";
import headerLogo from "../../../../assets/images/logo.png";
import Button from "../../Button/Button";
import "./NavbarTop.css";
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaGoogle
} from "react-icons/fa";
import { RxLockClosed } from "react-icons/rx";
import { MdOutlineLogout } from "react-icons/md";
import { AuthContext } from "../../../../context/AuthProvider";
import ProfileDropDown from "../ProfileDropDown/ProfileDropDown";
import { useSelector } from "react-redux";


const NavbarTop = () => {
  const [open, setOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { email } = useSelector((state) => state.auth)




  return (
    <div className="h-[80px] px-6 lg:block mx-auto sm:max-w-xl md:max-w-full lg:w-full   ">
      <div className="relative flex pt-3 items-center justify-between">
        {/* social icon  */}
        <div className="hidden  lg:flex  items-center justify-center ">

          <FaFacebook
            className="hover:text-yellow-600 mr-3"
            title="Facebook"
          />
          <FaTwitter
            className="hover:text-yellow-600 mr-3"
            title="Twitter"
          ></FaTwitter>
          <FaPinterest
            className="hover:text-yellow-600 mr-3"
            title="Pinterest"
          ></FaPinterest>
          <FaGoogle
            className="hover:text-yellow-600"
            title="Google"
          ></FaGoogle>

        </div>

        {/* logo  */}
        <div>
          <Link
            to="/"
            aria-label="Games space"
            title="Games space"
            className="inline-flex items-center"
          >
            <div className="text-2xl text-white ">
              <Link
                to="/"
                className={`text-xs md:text-xl lg:text-2xl flex space-x-3 items-center pl-2 `}
              >
                <GiBoltShield
                  className="lg:text-5xl"
                />
                <div className="text-white">
                  <span
                    className="font-gaming text-mainHeading"
                  >
                    Game Space
                  </span>
                  <span className="text-xs text-primary lg:block font-bold capitalize hidden ">
                    Any Game, Any time, Any place
                  </span>
                </div>
              </Link>
            </div>
          </Link>
        </div>


        <div>
          <ul className=" items-center hidden space-x-8 lg:flex">
            {email ? (
              <>
                <div>
                  <div onClick={() => setOpen(!open)} className="user-pic">
                    {user?.photoURL ? (
                      <img className="h-12 rounded-full cursor-pointer" src={user?.photoURL} alt="" />
                    ) : (
                      <img className="h-12 rounded-full cursor-pointer"
                        src="https://i.ibb.co/bRZmT6x/blank-profile-picture-973460-340.webp"
                        alt=""
                      />
                    )}
                  </div>
                  {open && <ProfileDropDown></ProfileDropDown>}
                  {/* <div id="sub-menu-wrap">
                <div className="sub-menu">
                  <div className="user-info">
                    <img
                      src="https://i.ibb.co/bRZmT6x/blank-profile-picture-973460-340.webp"
                      alt=""
                    />
                    <p>{user?.displayName}</p>
                  </div>
                  <hr />
                  <p className="sub-menu-link">
                    <img src="https://i.ibb.co/cX6Z03G/profile.png" alt="" />
                    <p>Edite Profile</p>
                    <span> <BsArrowRightShort></BsArrowRightShort></span>
                  </p>
                  <p className="sub-menu-link">
                    <img src="https://i.ibb.co/8B3pj1W/setting.png" alt="" />
                    <p>Settings & Privacy</p>
                    <span> <BsArrowRightShort></BsArrowRightShort></span>
                  </p>
                  <p className="sub-menu-link">
                    <img src="https://i.ibb.co/myzpv5S/help.png" alt="" />
                    <p>Helps & Support</p>
                    <span> <BsArrowRightShort></BsArrowRightShort></span>
                  </p>
                  <p onClick={handleLogout} className="sub-menu-link">
                    <img src="https://i.ibb.co/s335h1Y/logout.png" alt="" />
                    <p>Logout</p>
                    <span> <BsArrowRightShort></BsArrowRightShort></span>
                  </p>
                </div>
              </div> */}
                </div>
                {/* <li>
              <button onClick={handleLogout}>LOGOUT</button>
            </li> */}
              </>
            ) : (
              <div className="lg:flex ">

                <li>

                  <Link
                    to="/login"
                    className="bg-yellow-600 flex justify-center items-center text-white sm:mb-16 text-lg uppercase hover:text-white font-semibold px-5 py-2"
                  >
                    <MdOutlineLogout className="mr-2" />
                    Sign In
                  </Link>
                </li>
                <p className="mx-3">or</p>
                <li>
                  <Link
                    to="/register"
                    className="bg-yellow-600 flex justify-center items-center text-white sm:mb-16 text-lg uppercase hover:text-white font-semibold px-5 py-2"
                  >
                    <RxLockClosed className="mr-2" />
                    Sign Up
                  </Link>
                </li>
              </div>
            )}
          </ul>
        </div>
        <div className="lg:hidden">
          {user?.uid ? (
            <>
              <div>
                <div onClick={() => setOpen(!open)} className="user-pic">
                  {user?.photoURL ? (
                    <img className="h-10 rounded-full cursor-pointer" src={user?.photoURL} alt="" />
                  ) : (
                    <img className="h-10 rounded-full cursor-pointer"
                      src="https://i.ibb.co/bRZmT6x/blank-profile-picture-973460-340.webp"
                      alt=""
                    />
                  )}
                </div>
                {open && <ProfileDropDown></ProfileDropDown>}
                {/* <div id="sub-menu-wrap">
                <div className="sub-menu">
                  <div className="user-info">
                    <img
                      src="https://i.ibb.co/bRZmT6x/blank-profile-picture-973460-340.webp"
                      alt=""
                    />
                    <p>{user?.displayName}</p>
                  </div>
                  <hr />
                  <p className="sub-menu-link">
                    <img src="https://i.ibb.co/cX6Z03G/profile.png" alt="" />
                    <p>Edite Profile</p>
                    <span> <BsArrowRightShort></BsArrowRightShort></span>
                  </p>
                  <p className="sub-menu-link">
                    <img src="https://i.ibb.co/8B3pj1W/setting.png" alt="" />
                    <p>Settings & Privacy</p>
                    <span> <BsArrowRightShort></BsArrowRightShort></span>
                  </p>
                  <p className="sub-menu-link">
                    <img src="https://i.ibb.co/myzpv5S/help.png" alt="" />
                    <p>Helps & Support</p>
                    <span> <BsArrowRightShort></BsArrowRightShort></span>
                  </p>
                  <p onClick={handleLogout} className="sub-menu-link">
                    <img src="https://i.ibb.co/s335h1Y/logout.png" alt="" />
                    <p>Logout</p>
                    <span> <BsArrowRightShort></BsArrowRightShort></span>
                  </p>
                </div>
              </div> */}
              </div>
              {/* <li>
              <button onClick={handleLogout}>LOGOUT</button>
            </li> */}
            </>
          ) : (
            <li>
              <Link
                to="/login"
                className="bg-yellow-600 ml-16 text-white sm:mb-16 text-lg uppercase hover:text-white font-semibold px-8 py-2"
              >
                Join
              </Link>
            </li>
          )}
          {/* <button
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
          </button> */}
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
