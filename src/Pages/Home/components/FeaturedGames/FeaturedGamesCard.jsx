import React, { useRef, useState } from "react";
import { FaVideo } from "react-icons/fa";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import VideoModal from "../../../Shared/VideoModal/VideoModal";

const FeaturedGamesCard = ({ game }) => {

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
    <div className="card card-compact cursor-pointer bg-secondary group border border-white/20 hover:border-primary rounded">
    <figure className="relative">
      <ReactPlayer
        ref={playerRef}
        onClick={() => setUrl(videolink)}
        url={url}
        controls={false}
        playing={playP}
        width="100%"
        height="300px"
        light={img}
        onPause={handlePause}
        onPlay={handlePlay}
        onClickPreview={handleclickprev}
        playIcon={
          <FaVideo className="absolute top-[7%] -right-10 group-hover:right-3 transition-all duration-100 w-10 h-10 p-2  bg-black/75 hover:bg-primary hover:text-neutral cursor-pointer  group-hover:block rounded-full" />
        }
      />
    </figure>
    <div className="card-body ">
      <h2 className="card-title text-mainHeading font-bold text-xl lg:text-2xl">
        {title}
      </h2>
      <p className="text-textP mb-12">
        {description ? description?.slice(0, 100) + " ..." : "description"}
      </p>
      <div className="card-actions justify-between items-end mb-3">
        <h6 className="text-xl lg:text-3xl font-bold text-mainHeading">
          $ {price}
        </h6>
        <Link
          to={`/downloadGames/${_id}`}
          // className="py-3 text-secondary hover:translate-y-1  relative px-5 rounded-none font-bold bg-primary uppercase"
          className="btn btn-primary btn-sm font-bold gameCardBtnClip"
        >
          Details
        </Link>
      </div>
    </div>
  </div>
  );
};

export default FeaturedGamesCard;
