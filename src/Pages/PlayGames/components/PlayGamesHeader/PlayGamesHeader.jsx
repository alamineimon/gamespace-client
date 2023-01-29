import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthProvider";

const PlayGamesHeader = () => {
  const {theme} = useContext(AuthContext);
  return (
    <section className={`py-10 lg:py-20 ${theme === "dark" ? "bg-bg1" : "bg-gray"}`}>
      <div className="w-11/12 mx-auto text-center space-y-5">
        <h1 className={`text-2xl lg:text-4xl capitalize text-mainHeading font-bold ${theme === "dark" ? "text-white1" : "text-black1"}`}>
          Play Exciting Games live!
        </h1>
        <p className={`w-full lg:w-2/4 mx-auto ${theme === "dark" ? "text-gray" : "text-black1"}`}>
        An HTML5 game allows play directly in modern web browsers without the need for <br /> third party plugins.
        </p>
      </div>
    </section>
  );
};

export default PlayGamesHeader;
