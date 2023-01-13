import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
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
    return <div>Loading</div>;
  }
  return (
    <div className="bg-white">
      <div className="bg-white w-[90%] mx-auto py-20">
        <h1 className="text-2xl lg:text-4xl text-slate-900 font-bold uppercase mb-5">
          Games collection
        </h1>
        <div className="grid grid-cols-4 gap-5">
          {games.map((game, i) => (
            <GamesCards key={i} game={game} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameSlider;
