import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";

const AboutMe = ({ userinfo }) => {
  const { bio, email, name } = userinfo;
  const { user } = useContext(AuthContext);
  return (
    <div className="bg-dashboardCards p-5 rounded-2xl font-rajdhani flex flex-col space-y-5 sticky top-5 border-l border-t border-white/20 ">
      <h2 className="text-lg font-semibold text-mainHeading">
        About {user?.email === email ? "Me" : name}
      </h2>
      <p>{bio}</p>
      {userinfo?.joinedFrom && <p>Joined from: {userinfo?.joinedFrom}</p>}

      {userinfo?.website && <p className="flex ">Website:</p>}
    </div>
  );
};

export default AboutMe;
