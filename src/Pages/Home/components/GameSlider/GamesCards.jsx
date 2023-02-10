import React, { useRef } from "react";
import { useState } from "react";
import { FaVideo } from "react-icons/fa";
import ReactPlayer from "react-player/youtube";
import { Link } from "react-router-dom";
const GamesCards = ({ game }) => {
  const { _id, title, description, price, img, videolink } = game;
  const playerRef = useRef(null);
  const [playP, setPlayP] = useState(false);
  const [url, setUrl] = useState(videolink);
  const handlePause = () => {
    playerRef.current.showPreview();
    setPlayP(false);
  };

  const handleclickprev = () => {
    setPlayP(!playP);
  };
  const handlePlay = () => {
    setUrl(videolink);
  };

  return (
    <div className="card card-compact cursor-pointer bg-secondary rounded-none group border border-primary/20 hover:border-primary">
      <figure className="relative">
        <ReactPlayer
          ref={playerRef}
          onClick={() => setUrl(videolink)}
          url={url}
          controls={false}
          playing={playP}
          width="100%"
          height="350px"
          light={img}
          onPause={handlePause}
          onPlay={handlePlay}
          onClickPreview={handleclickprev}
          playIcon={
            <FaVideo className="absolute top-[7%] -right-10 group-hover:right-3 transition-all duration-100 w-10 h-10 p-2  bg-black/75 hover:bg-primary hover:text-neutral cursor-pointer  group-hover:block rounded-full" />
          }
        />
        {/* {videolink && (
          <label
            // onClick={() => setVideo(videolink)}
            onClick={handleClick}
            // htmlFor="see-video"
            className="absolute top-[7%] -right-10 group-hover:right-3 transition-all duration-100 p-2  bg-black/75 hover:bg-primary cursor-pointer  group-hover:block rounded-full"
          >
            <FaVideo className="text-white text-lg " />
          </label>
        )} */}
        {!playP && (
          <>
            {" "}
            <span className="absolute cursor-pointer bottom-3 left-[3%] text-sm p-2 rounded-none bg-black/75 text-white hover:text-primary backdrop-blur">
              Category 1
            </span>
            <span className="absolute cursor-pointer ml-4 bottom-3 left-[30%] text-sm p-2 rounded-none bg-black/75 text-white hover:text-primary backdrop-blur">
              Category 2
            </span>
          </>
        )}
      </figure>
      <div className="card-body ">
        <h2 className="card-title text-mainHeading font-bold">{title}</h2>
        <p className="text-textP mb-12">
          {description ? description?.slice(0, 100) + " ..." : "description"}
        </p>
        <div className="card-actions justify-between items-end mb-3">
          <h6 className="text-xl lg:text-3xl font-bold text-mainHeading">
            $ {price}
          </h6>
          <Link
            to={`/downloadGames/${_id}`}
            className="py-3 text-secondary hover:translate-y-1  relative px-5 rounded-none font-bold bg-primary uppercase"
          >
            Details
          </Link>
        </div>
      </div>
      {/* {videolink && video && (
        <VideoModal videolink={videolink} setVideo={setVideo} />
      )} */}
    </div>
  );
};

export default GamesCards;
