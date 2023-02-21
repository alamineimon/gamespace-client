import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
import { CgGames } from "react-icons/cg";

import "swiper/css";
import "swiper/css/effect-coverflow";
import { AuthContext } from "../../../../context/AuthProvider";
import useTitle from "../../../../Hooks/useTitle/useTitle";
import Loader from "../../../Shared/Loader/Loader";
import GamesCards from "./GamesCards";

const GameSlider = () => {
  useTitle('Shop');
  const { data: games, isLoading } = useQuery({
    queryKey: ["downloadGames"],
    queryFn: async () => {
      const res = await fetch(
        `https://gamespace-server.vercel.app/downloadGames`
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div
      className={`z-0 bg-black1 text-white1`}
    >
      <div className=" w-[90%] mx-auto py-16">
        <div className="flex justify-center">
          <CgGames className="text-6xl text-primary" />
        </div>
        <h1 className="text-2xl lg:text-4xl text-mainHeading font-bold uppercase mb-5 text-center">
          <span>
            Games
          </span>{" "}
          <span className="text-primary">collection</span>
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3  2xl:grid-cols-4 gap-5">
          {games?.map((game, i) => (
            <GamesCards key={i} game={game} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameSlider;
