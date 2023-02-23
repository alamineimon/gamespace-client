import React from "react";
import { useContext } from "react";
import { BsPersonPlusFill } from "react-icons/bs";
import {
  FaEdit,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import defaultAvtar from "../../../assets/images/gamingAvatar.webp";
import { AuthContext } from "../../../context/AuthProvider";
const BannerPart = ({
  userinfo,
  posts,
  setEditProfile,
  sendFriendRequest,
  isFriend,
}) => {
  const { name, email } = userinfo;
  const { user } = useContext(AuthContext);
  return (
    <div className=" bg-dashboardCards rounded-2xl font-rajdhani lg:col-span-4 relative border-l border-t border-white/20 w-full ">
      <div className="relative w-full">
        <img
          src="https://i.ibb.co/85dmt1X/profilebg3.webp"
          alt=""
          className="w-full lg:max-h-[45vh] object-cover object-top rounded-t-2xl "
        />
        <div className="hexagon absolute -bottom-8 left-2/4 -translate-x-2/4 w-32 h-32 lg:h-52 lg:w-52 bg-dashboardCards">
          <div className="m-1 lg:m-3 bg-gradient-to-br from-sky-400 to-blue-900  hexagon ">
            <div className="m-1 lg:p-3 hexagon ">
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
      <div className="pb-8 grid grid-cols-4 lg:grid-cols-3 mt-8 px-5 ">
        <div className="friend flex justify-start col-span-2 lg:col-span-1  items-end space-x-5 order-2 lg:order-1 ">
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
        <div className="text-center order-1 lg:order-2 col-span-4 lg:col-span-1">
          <h2 className="text-xl lg:text-2xl font-bold capitalize text-white ">
            {name}
          </h2>
          <h3>{email}</h3>
        </div>
        <div className="social flex space-x-2 md:space-x-5 justify-end col-span-2 lg:col-span-1 items-center place-self-top order-3 ">
          {userinfo?.facebook && (
            <a href={userinfo?.facebook} target="_blank" rel="noreferrer">
              <FaFacebookF className="text-3xl lg:text-4xl cursor-pointer hover:translate-y-1 transition-transform p-2 text-white  rounded bg-[#275077]" />
            </a>
          )}
          {userinfo?.instagram && (
            <a href={userinfo?.instagram} target="_blank" rel="noreferrer">
              <FaInstagram className="text-3xl lg:text-4xl cursor-pointer hover:translate-y-1 transition-transform p-2 text-white rounded bg-[#275077]" />
            </a>
          )}
          {userinfo?.twitter && (
            <a href={userinfo?.twitter} target="_blank" rel="noreferrer">
              <FaTwitter className="text-3xl lg:text-4xl cursor-pointer hover:translate-y-1 transition-transform p-2 text-white   rounded bg-[#275077]" />
            </a>
          )}
          {userinfo?.youTube && (
            <a href={userinfo?.youTube} target="_blank" rel="noreferrer">
              {" "}
              <FaYoutube className="text-3xl lg:text-4xl cursor-pointer hover:translate-y-1 transition-transform p-2 text-white  rounded bg-[#275077]" />
            </a>
          )}
        </div>
      </div>
      {email === user?.email ? (
        <label htmlFor="editProfileModal" onClick={() => setEditProfile(true)}>
          <FaEdit
            className="absolute top-2 right-2  text-xl cursor-pointer hover:text-primary"
            title="edit profile"
          />
        </label>
      ) : (
        <>
          {isFriend ? (
            ""
          ) : (
            <>
              {userinfo?.friendRequest?.includes(user?.email) ? (
                <button className="flex justify-center items-center btn btn-secondary btn-sm right-5 absolute top-6 cursor-pointer rounded-md ">
                  <IoIosCheckmarkCircle className="text-primary mr-2 text-xl"></IoIosCheckmarkCircle>{" "}
                  Friend req sent
                </button>
              ) : (
                <button
                  onClick={sendFriendRequest}
                  className="flex justify-center items-center bg-white hover:bg-primary p-2 right-5 absolute top-6 cursor-pointer rounded-md text-black"
                >
                  <BsPersonPlusFill className="text-black mr-2 text-xl"></BsPersonPlusFill>{" "}
                  <p>Connect</p>
                </button>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default BannerPart;
