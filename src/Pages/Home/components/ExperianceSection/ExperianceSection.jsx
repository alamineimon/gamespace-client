import React from "react";
import { Link } from "react-router-dom";
import "./ExperianceSection.css";
// import { AiFillGift, AiOutlineShoppingCart } from "react-icons/ai";
// import { CgGames } from "react-icons/cg";
const ExperianceSection = () => {
  return (
    <div className="py-20 featureBg flex justify-between">
      <div className="w-1/2 relative pl-6 pt-2">
        <hr className="bg-red-500 h-2" />
        <p className="h-4 w-16 right-0 absolute bg-red-500"></p>
        <p className="text-5xl mt-16 font-black mb-6 ml-16">EXPERIENCE</p>
        <p className="text-5xl mb-6 mt-6 ml-16 font-extrabold text-yellow-600">
          STRONG TEAM PLAY
        </p>
        <p className="text-xl ml-16 mb-12">
          Nullam quis ante. Maecenas ullamcorper, dui et placerat feugiat, eros
          pede varius nisi, condimentum viverra felis nunc et lorem. In auctor
          lobortis lacus. Phasellus gravida semper nisi. Aliquam lobortis.
        </p>
        <div className="ml-16 flex ">
          <p className="">
            <Link className=" uppercase underline hover:text-yellow-500">
              Find team player
            </Link>
          </p>
          <p className="ml-6 uppercase underline hover:text-yellow-500">
            <Link>Find community player</Link>
          </p>
        </div>
      </div>
      <div className="w-1/2  p-8 relative flex">
        <div class="parallelogram1 absolute"></div>
        <div class="parallelogram2 absolute"></div>
      </div>
    </div>
  );
};

export default ExperianceSection;
