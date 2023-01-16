import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { CgGames } from "react-icons/cg";
import Loader from "../../../Shared/Loader/Loader";
import GamesCards from "./GamesCards";

const GameSlider = () => {
  const { data: games, isLoading } = useQuery({
    queryKey: ["games"],
    queryFn: async () => {
      const res = await fetch("games.json");
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loader/>
  }
  return (
    <div className="bg-white z-0">
      <div className="bg-white w-[90%] mx-auto py-20">
        <div className="flex justify-center">
          <CgGames className="text-6xl text-blue-700" />
        </div>
        <h1 className="text-2xl lg:text-4xl text-slate-900 font-bold uppercase mb-5 text-center">
          Games collection
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {games.map((game, i) => (
            <GamesCards key={i} game={game} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameSlider;
