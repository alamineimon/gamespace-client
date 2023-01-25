import React from "react";
import { Link } from "react-router-dom";
import "./ExperianceSection.css";
// import { AiFillGift, AiOutlineShoppingCart } from "react-icons/ai";
// import { CgGames } from "react-icons/cg";
const ExperianceSection = () => {
  return (
    <div className="py-20 featureBg lg:flex block justify-between">
      <div className="lg:w-1/2 relative pl-6 pt-2">
        <hr className="bg-red-500 h-2" />
        <p className="h-4 w-16 right-0 absolute bg-red-500"></p>
        <p className="lg:text-5xl text-4xl mt-16 font-black mb-6 ml-16">EXPERIENCE</p>
        <p className="lg:text-5xl text-3xl lg:text-left text-center mb-6 mt-6 lg:ml-16 ml-10 font-extrabold text-yellow-600">
          STRONG TEAM PLAY
        </p>
        <p className="text-xl ml-16 mb-12">
          Nullam quis ante. Maecenas ullamcorper, dui et placerat feugiat, eros
          pede varius nisi, condimentum viverra felis nunc et lorem. In auctor
          lobortis lacus. Phasellus gravida semper nisi. Aliquam lobortis.
        </p>
        <div className="ml-16 lg:mb-0 mb-10  lg:flex block lg:justify-start justify-center ">
          <p className="">
            <Link className=" uppercase underline hover:text-yellow-500">
              Find team player
            </Link>
          </p>
          <p className="lg:ml-6 uppercase underline hover:text-yellow-500">
            <Link>Find community player</Link>
          </p>
        </div>
      </div>
      <div className="w-1/2 hidden p-8 relative lg:flex">
        <div className="parallelogram1 absolute"></div>
        <div className="parallelogram2 absolute"></div>
      </div>
    </div>
  );
};

export default ExperianceSection;
