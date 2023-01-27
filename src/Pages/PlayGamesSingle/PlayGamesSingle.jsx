import React, { useRef } from "react";
import { BsArrowsFullscreen } from "react-icons/bs";
import { useLoaderData } from "react-router-dom";
const PlayGamesSingle = () => {
  const htmlGame = useLoaderData();
  const iframeRef = useRef(null);
  const handleFullscreen = () => {
    iframeRef.current.requestFullscreen();
  };

  const { gameName, authorName, gameLink, thumbnail, category, description } =
    htmlGame;
  return (
    <section className="py-10 lg:py-20">
      <div className="w-11/12 mx-auto text-center space-y-5">
        <h1 className="text-2xl lg:text-4xl font-bold text-mainHeading">
          {gameName}
        </h1>
        <h3>{authorName}</h3>
        <div className="grid lg:grid-cols-8 gap-5">
          <div className="col-span-2 hidden lg:block"></div>
          <div className="col-span-4 p-3 bg-bg2 space-y-3">
            <iframe
              ref={iframeRef}
              src={gameLink}
              width="100%"
              height="400px"
              title="hellooooo"
              className="mx-auto"
            ></iframe>
            <button onClick={handleFullscreen}>
              <BsArrowsFullscreen />
            </button>
          </div>
          <div className="col-span-2 hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
};

export default PlayGamesSingle;
