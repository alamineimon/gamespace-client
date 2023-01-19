import React from "react";
import "./ExtraFeatures.css";
import { BiRun } from "react-icons/bi";
import { ImDownload } from "react-icons/im";

const ExtraFeatures = () => {
  return (
    <div className="lg:flex sm:block text-white">
      <div className="downloadGames flex justify-center items-center lg:w-1/2 sm:w-full">
        <div className="w-full text-center">
          <BiRun className="text-5xl w-full mx-auto text-yellow-300"></BiRun>
          <h5 className="text-2xl font-semibold font-serif">
            Play Games
          </h5>
          <p className="">Lorem ipsum dolor sit amet.</p>
          <button className="btn rounded-none btn-outline btn-sm mt-4">Play</button>
        </div>
      </div>
      <div className="plauHtmlGames  flex justify-center items-center lg:w-1/2 sm:w-full">
        <div className=" w-full text-center">
          <ImDownload className="text-4xl w-full mx-auto text-yellow-300"></ImDownload>
          <h5 className="text-2xl font-semibold font-serif ">
            Download Games
          </h5>
          <p className="">Lorem ipsum dolor sit amet.</p>
          <button className="btn rounded-none btn-outline btn-sm mt-4">
            Download
          </button>
        </div>
      </div>
    </div>
    // <div className="pt-32">
    //   <div className="flex flex-col lg:flex-row w-3/4 mx-auto mb-8">
    //     <div className="relative md:w-1/2 mb-2 md:mb-0">
    //       <div className="features-image lg:mr-2">
    //         <img
    //           src="https://img.freepik.com/free-photo/world-collapse-doomsday-scene-digital-painting_456031-63.jpg?size=626&ext=jpg&ga=GA1.1.207808977.1658386615&semt=sph"
    //           alt=""
    //           className="w-full rounded-xl h-80"
    //         />
    //       </div>
    //       <div className="absolute top-20 w-full text-center">
    //         <BiRun className="text-5xl w-full mx-auto text-yellow-300"></BiRun>
    //         <h5 className="text-2xl font-semibold font-serif text-black">
    //           Play Games
    //         </h5>
    //         <p className="text-white">Lorem ipsum dolor sit amet.</p>
    //         <button className="btn btn-warning btn-sm mt-4">Play</button>
    //       </div>
    //     </div>
    //     <div className="relative md:w-1/2">
    //       <div className="features-image-two">
    //         <img
    //           src="https://img.freepik.com/free-photo/cruel-war-scenes-digital-painting_456031-162.jpg?size=626&ext=jpg&ga=GA1.1.207808977.1658386615&semt=sph"
    //           alt=""
    //           className="w-full rounded-xl h-80"
    //         />
    //       </div>
    //       <div className="absolute top-20 w-full text-center">
    //         <ImDownload className="text-4xl w-full mx-auto text-black"></ImDownload>
    //         <h5 className="text-2xl font-semibold font-serif text-white">
    //           Download Games
    //         </h5>
    //         <p className="text-black">Lorem ipsum dolor sit amet.</p>
    //         <button className="btn btn-outline btn-secondary btn-sm mt-4">
    //           Download
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ExtraFeatures;
