import React from "react";
import { Link } from "react-router-dom";
import bgVideo from '../../../../assets/videos/bg.mp4'
import './header.css'

const Header = () => {
  return (
    // <div className="w-full h-[400px] justify-between sm:h-[900px] lg:h-[700px] w-full lg:flex overflow-hidden p-10">
    //   <div className="lg:w-1/2 sm:w-full mt-8 sm:mb-16 text-white ">
    //     <p className="text-5xl mt-12 mb-6 font-bold ml-16">
    //       All Your Game Is Here...
    //     </p>
    //     <p className="text-lg ml-16 mb-8">
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
    //       fugit laborum facilis.
    //     </p>
    //     <div>
    //       <Link className="bg-blue-700 rounded ml-16 text-white sm:mb-16 text-lg uppercase font-semibold px-12 py-3">
    //         Join Now
    //       </Link>
    //       <Link className="bg-blue-700 rounded ml-2 text-white sm:mb-16 text-lg uppercase font-semibold px-12 py-3">
    //         Browse game
    //       </Link>
    //     </div>
    //   </div>
    //   <div className="lg:w-1/2 sm:w-full lg:mt-0 sm:mt-16">
    //     <img
    //       className=" lg:h-[390px] lg:ml-12"
    //       src="https://i.ibb.co/NYhzTQK/banner-illus.png"
    //       alt=""
    //     />
    //   </div>
    // </div>
    <div className="landingPage">
      <video src={bgVideo} autoPlay muted loop className="videoBg"></video>
      <div className="bgOverlay"></div>
      <div className="textArea">
        <p className="text-8xl mt-12 mb-6 font-bold ml-16">
          All Your Games<br /> <span className="text-10xl text-yellow-600">is Here...</span> 
        </p>
        <p className="text-2xl ml-16 mb-12">
        Arcane gives you the power to create the perfect website for your  <br />
          team  and   community.A trully perfect theme for games !
        </p>
        <div className="">
        <Link className="bg-yellow-600 ml-16 text-white sm:mb-16 text-lg uppercase hover:text-white font-semibold px-8 py-2">
              
              Join Now
            </Link>
            <Link className="bg-yellow-600  ml-6 text-white sm:mb-16 text-lg uppercase hover:text-white font-semibold px-8 py-2">
              
              Browse Game
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
