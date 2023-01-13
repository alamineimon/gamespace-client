import React from "react";
import { AiFillGift, AiOutlineShoppingCart } from "react-icons/ai";
import { CgGames } from "react-icons/cg";
const FeatureSection = () => {
  return (
    <div className=" bg-blue-700 py-20">
      <div className="w-11/12 mx-auto flex justify-center items-center space-x-5">
        <div className="flex p-5 bg-blue-500 w-1/3 justify-center items-center space-x-3 rounded">
          <AiOutlineShoppingCart className="text-9xl text-white" />
          <div>
            <h1 className="text-white text-3xl font-semibold">Buy Games</h1>
            <p className="text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, repellendus!
            </p>
          </div>
        </div>
        <div className="flex p-5 bg-blue-500 w-1/3 justify-center items-center space-x-3 rounded">
          <CgGames className="text-9xl text-white" />
          <div>
            <h1 className="text-white text-3xl font-semibold">Play Games</h1>
            <p className="text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, repellendus!
            </p>
          </div>
        </div>
        <div className="flex p-5 bg-blue-500 w-1/3 justify-center items-center space-x-3 rounded">
          <AiFillGift className="text-9xl text-white" />
          <div>
            <h1 className="text-white text-3xl font-semibold">Gift Games</h1>
            <p className="text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, repellendus!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
