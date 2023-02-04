import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";

const HtmlCards = ({ game }) => {
  const { gameName, thumbnail } = game;
  return (
    <div className="bg-neutral hover:scale-105 group border border-black hover:border-primary">
      <div className="w-full h-28 relative overflow-hidden">
        <img
          src={thumbnail}
          alt={gameName}
          className="w-full h-full object-cover"
        />
        <div className="absolute flex bg-black/90 space-x-3 justify-center h-full items-center bottom-0 w-full opacity-0 group-hover:opacity-100 ">
          <FaEdit className="hover:text-sky-500" />
          <AiFillDelete className="hover:text-primary" />
        </div>
      </div>
      <div className="p-2 text-xs text-center">
        <p>{gameName}</p>
      </div>
    </div>
  );
};

export default HtmlCards;
