import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { Link, useLoaderData, useLocation } from "react-router-dom";
import GameComment from "./GameComment";
import BookingModal from "../../../Modal/BookingModal/BookingModal";
import useTitle from "../../../../Hooks/useTitle/useTitle";
import { AuthContext } from "../../../../context/AuthProvider";

const GameDetails = () => {
  const gameDetails = useLoaderData();
  const [rightSideGame, setRightSideGame] = useState();
  const { user } = useContext(AuthContext);
  const location = useLocation();

  const from = location.from?.state.pathname || "/";

  const {
    _id,
    imgBG,
    title,
    ratings,
    imgScreenshot,
    releaseDate,
    totalPlayer,
    description,
    price,
    img,
    videolink,
  } = gameDetails;
  useTitle(`GameDetails/${title}`);
  const { data: showAllGame, refetch } = useQuery({
    queryKey: ["downloadGames"],
    queryFn: async () => {
      const res = await fetch(
        "https://gamespace-server.vercel.app/downloadGames",
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const data = await res.json();

      return data;
    },
  });

  return (
    <div className="text-white">
      <div className="">
        <img
          src={imgBG}
          className=" w-full h-[400px] md:h-[450] lg:h-[500px] object-contain bg-secondary"
          alt=""
        />
      </div>

      <div className=" px-5 md:px-10 z-10 -mt-32 relative mx-auto mb-5 lg:mb-10 space-y-5">
        <div className="w-44 md:w-60 border mx-auto z-10 ">
          <img src={img} className="w-full border" alt="" />
        </div>
        <div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold hover:underline cursor-pointer text-center ">
            {title}{" "}
          </h1>
        </div>
      </div>
      <div className="bg-gray-800 pt-6 pb-4">
        <div className="md:flex justify-between mx-5 md:mx-10 gap-5 md:gap-20 lg:gap-44 space-y-5">
          <div className="w-full md:w-6/6 lg:w-6/6 ">
            <div className="space-y-3">
              <div className="flex justify-between">
                <h1 className="text-2xl md:text-3xl font-bold">Overview</h1>

                {user ? (
                  <div>
                    <label
                      htmlFor="bookingModal"
                      className="py-3 hover:translate-y-1 text-white  relative px-5 rounded-none font-bold bg-yellow-500 uppercase cursor-pointer "
                    >
                      Add to Cart
                    </label>
                    <BookingModal
                      gameDetails={gameDetails}
                      refetch={refetch}
                    ></BookingModal>
                  </div>
                ) : (
                  <Link
                    to="/login"
                    className="py-3 hover:translate-y-1 text-white  relative px-5 rounded-none font-bold bg-yellow-500 uppercase cursor-pointer "
                  >
                    Add to Cart
                  </Link>
                )}
              </div>

              <hr className="text-gray-400" />
            </div>
            <div className="grid grid-cols-2 pt-5">
              <div className="space-y-2">
                <p>Title : </p>
                <p>Number of Players : </p>
                <p>Ratings : </p>
                <p>Release Date : </p>
                <p>Price : </p>
                <p>Videolink : </p>
                <p>Description : </p>
              </div>
              <div className="space-y-2">
                <p>{title} </p>
                <p>{totalPlayer}</p>
                <p>{ratings}</p>
                <p>{releaseDate}</p>
                <p className="font-bold  text-xl">
                  $ <span className="text-amber-500">{price}</span>
                </p>
                <a
                  href={videolink}
                  target="_blank"
                  className="hover:underline text-blue-600 text-sm md:text-lg"
                  alt=""
                  rel="noreferrer"
                >
                  {videolink ? videolink.slice(0, 29) : "videolink"}
                </a>
                <p className="text-justify">{description} </p>
              </div>
            </div>
            <div className="space-y-3 mt-8">
              <h1 className="text-2xl md:text-3xl font-bold">
                Screenshots (05)
              </h1>
              <hr className="text-gray-400" />
            </div>
            <div className="">
              <Carousel infiniteLoop autoPlay interval={3000} showArrows={true}>
                {imgScreenshot?.map((desplayGame, i) => (
                  <div className="hero w-full h-52 ">
                    <div className="hero-content text-center text-neutral-content">
                      <div className="flex h-full w-full ">
                        <img
                          src={desplayGame?.screenshot}
                          className="w-full bg-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
            <GameComment
              setRefetch={refetch}
              detailsId={_id}
              rightSideGame={rightSideGame}
            ></GameComment>
          </div>
          <div className="w-full md:w-6/12">
            <div className="w-full bg-yellow-600 mt-5 md:mt-0 ">
              <div className="p-4 space-x-4">
                {showAllGame?.map((displayGame, i) => (
                  <Link
                    to={`/downloadGames/${displayGame?._id}`}
                    onClick={() => setRightSideGame(displayGame?._id)}
                  >
                    <div className="grid grid-cols-4 lg:grid-cols-2 items-center gap-4">
                      <div className="col-span-1 lg:col-span-1 md:w-full">
                        <img
                          src={displayGame?.img}
                          className="w-full h-full object-cover"
                          alt=""
                        />
                      </div>
                      <div className="col-span-3 lg:col-span-1">
                        <h5 className="text-xl md:text-sm lg:text-xl hover:underline">
                          {displayGame?.title}
                        </h5>
                      </div>
                    </div>
                    <hr className="mt-5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
