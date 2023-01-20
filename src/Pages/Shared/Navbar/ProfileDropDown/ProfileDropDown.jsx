import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { BsArrowRightShort } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../context/AuthProvider";
import "./ProfileDropDown.css";

const ProfileDropDown = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isReadOnly, setIsReadOnly] = useState(false)
  const navigate = useNavigate();

  

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast("Logout successfully");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      id="sub-menu-wrap"
      className="bg-blue-400 absolute z-50 top-[85px] p-5  right-1 w-[300px]"
    >
      <div className="sub-menu">
        <Link to='/profile' onClick={() => setIsReadOnly(prev => !prev)}>
          <div className="flex justify-start mb-6 items-center cursor-pointer">
            {user?.photoURL ? (
              <Link to="/profile">
                <img
                  className="h-12 rounded-full"
                  src={user?.photoURL}
                  alt=""
                />
              </Link>
            ) : (
              <Link to="/profile">
                <img
                  className="h-12 rounded-full"
                  src="https://i.ibb.co/bRZmT6x/blank-profile-picture-973460-340.webp"
                  alt=""
                />
              </Link>
            )}
            <div className="ml-4">
              <p>{user?.displayName}</p>
              <p className="text-sm">{user?.email}</p>
            </div>
          </div>
        </Link>
        <hr />

        <p className="flex mt-6 cursor-pointer">
          <img
            className="h-8 p-1 mr-3 bg-white rounded-full"
            src="https://i.ibb.co/cX6Z03G/profile.png"
            alt=""
          />
          <div className="flex items-center">
            <h2 className=" hover:mr-2 ">
              <Link to="/profile" className=" hover:font-semibold ">
                Edite Profile
              </Link>
            </h2>
            <span>
              <BsArrowRightShort className=" hover:mr-2 "></BsArrowRightShort>
            </span>
          </div>
        </p>

        <p className="flex mt-6 cursor-pointer">
          <img
            className="h-8 p-1 mr-3 bg-white rounded-full"
            src="https://i.ibb.co/8B3pj1W/setting.png"
            alt=""
          />
          <div className="flex items-center">
            <p className=" hover:font-semibold ">Settings & Privacy</p>
            <span>
              <BsArrowRightShort className=" hover:mr-2 "></BsArrowRightShort>
            </span>
          </div>
        </p>

        <p className="flex mt-6 cursor-pointer">
          <img
            className="h-8 p-1 mr-3 bg-white rounded-full"
            src="https://i.ibb.co/myzpv5S/help.png"
            alt=""
          />
          <div className="flex items-center">
            <p className=" hover:font-semibold ">Helps & Support</p>
            <span>
              <BsArrowRightShort className=" hover:mr-2 "></BsArrowRightShort>
            </span>
          </div>
        </p>

        <p onClick={handleLogout} className="flex mt-6 cursor-pointer">
          <img
            className="h-8 p-1 mr-3 bg-white rounded-full"
            src="https://i.ibb.co/s335h1Y/logout.png"
            alt=""
          />
          <div className="flex items-center">
            <p className=" hover:font-semibold ">Logout</p>
            <span>
              <BsArrowRightShort className=" hover:mr-2 "></BsArrowRightShort>
            </span>
          </div>
        </p>
      </div>
    </div>
  );
};

export default ProfileDropDown;
