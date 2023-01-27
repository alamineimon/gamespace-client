import React from "react";

const PlayGamesHeader = () => {
  return (
    <section className="py-10 lg:py-20 bg-secondary">
      <div className="w-11/12 mx-auto text-center space-y-5">
        <h1 className="text-2xl lg:text-4xl capitalize text-mainHeading font-bold">
          Play Exciting Games live!
        </h1>
        <p className="w-full lg:w-2/4 mx-auto text-textP">
          An HTML5 game allows play directly in modern web browsers without the
          need for <br /> third party plugins.
        </p>
      </div>
    </section>
  );
};

export default PlayGamesHeader;
