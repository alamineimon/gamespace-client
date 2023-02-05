import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";

const HtmlCards = ({ game, deleteGame }) => {
  const { _id, gameName, thumbnail } = game;
  return (
    <div className="bg-neutral group border hover:border-primary">
      <div className="w-full h-28 relative overflow-hidden">
        <img
          src={thumbnail}
          alt={gameName}
          className="w-full h-full object-cover"
        />
        <div className="absolute flex bg-black/50 space-x-3 justify-center h-full items-center bottom-0 w-full opacity-0 group-hover:opacity-100 backdrop-blur ">
          <FaEdit className=" translate-y-5 group-hover:translate-y-0 transition-transform bg-primary hover:bg-white hover:text-primary cursor-pointer  text-white p-2 w-8 h-8 " />
          <AiFillDelete
            onClick={() => deleteGame(_id)}
            className=" translate-y-5 group-hover:translate-y-0 transition-transform bg-primary hover:bg-white hover:text-primary cursor-pointer  text-white p-2 w-8 h-8 "
          />
        </div>
      </div>
      <div className="p-2 text-xs text-center">
        <p>{gameName}</p>
      </div>
    </div>
  );
};

export default HtmlCards;
