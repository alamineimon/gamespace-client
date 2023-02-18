import React from "react";
import { FaPlus } from "react-icons/fa";

const AboutMe = ({ userinfo }) => {
  const { bio } = userinfo;
  return (
    <div className="bg-dashboardCards p-5 rounded-2xl font-rajdhani flex flex-col space-y-5 sticky top-5">
      <h2 className="text-lg font-semibold text-mainHeading">About Me</h2>
      <p>{bio}</p>
      <p>Joined from:</p>
      <p className="flex ">
        Website:
        <button className="btn btn-xs  flex justify-center items-center ml-5">
          <FaPlus className="mr-1" /> Add now
        </button>
      </p>
    </div>
  );
};

export default AboutMe;
