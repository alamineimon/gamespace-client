import React from "react";
import { useContext } from "react";
import {
  FaEdit,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import defaultAvtar from "../../../assets/images/gamingAvatar.webp";
import { AuthContext } from "../../../context/AuthProvider";
const BannerPart = ({ userinfo, posts, setEditProfile }) => {
  const { name, email } = userinfo;
  const { user } = useContext(AuthContext);
  return (
    <div className=" bg-dashboardCards rounded-2xl font-rajdhani col-span-4 relative border-l border-t border-white/20 ">
      <div className="relative">
        <img
          src="https://i.ibb.co/85dmt1X/profilebg3.webp"
          alt=""
          className="w-full max-h-[45vh] object-cover object-top rounded-t-2xl "
        />
        <div className="hexagon absolute -bottom-8 left-2/4 -translate-x-2/4 h-52 w-52 bg-dashboardCards">
          <div className="m-3 bg-gradient-to-br from-sky-400 to-blue-900  hexagon ">
            <div className="p-3 hexagon ">
              <img
                src={userinfo?.photoURL ? userinfo.photoURL : defaultAvtar}
                className="w-full h-full hexagon"
                alt=""
                onError={(e) => (e.target.src = defaultAvtar)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pb-8 grid grid-cols-3 mt-8 px-5 ">
        <div className="friend flex justify-start  items-end space-x-5">
          {userinfo?.friends && (
            <div className="text-center">
              <h6 className="text-xl lg:text-2xl text-white font-bold">
                {userinfo?.friends.length}
              </h6>
              <p>{userinfo?.friends.length > 1 ? "Friends" : "Friend"}</p>
            </div>
          )}
          {posts && (
            <div className="text-center ">
              <h6 className="text-xl lg:text-2xl text-white font-bold">
                {posts?.length}
              </h6>
              <p>Posts</p>
            </div>
          )}
        </div>
        <div className="text-center">
          <h2 className="text-xl lg:text-2xl font-bold capitalize text-white ">
            {name}
          </h2>
          <h3>{email}</h3>
        </div>
        <div className="social flex space-x-5 justify-end  items-end">
          {userinfo?.facebook && (
            <FaFacebookF className="text-xl lg:text-4xl cursor-pointer hover:translate-y-1 transition-transform p-2 text-white  rounded bg-[#275077]" />
          )}
          {userinfo?.instagram && (
            <FaInstagram className="text-xl lg:text-4xl cursor-pointer hover:translate-y-1 transition-transform p-2 text-white rounded bg-[#275077]" />
          )}
          {userinfo?.twitter && (
            <FaTwitter className="text-xl lg:text-4xl cursor-pointer hover:translate-y-1 transition-transform p-2 text-white   rounded bg-[#275077]" />
          )}
          {userinfo?.youTube && (
            <FaYoutube className="text-xl lg:text-4xl cursor-pointer hover:translate-y-1 transition-transform p-2 text-white  rounded bg-[#275077]" />
          )}
        </div>
      </div>
      {email === user?.email && (
        <label htmlFor="editProfileModal" onClick={() => setEditProfile(true)}>
          <FaEdit
            className="absolute top-2 right-2  text-xl cursor-pointer hover:text-primary"
            title="edit profile"
          />
        </label>
      )}
    </div>
  );
};

export default BannerPart;
