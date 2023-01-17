import { useQuery } from "@tanstack/react-query";
import React from "react";
import { CgGames } from "react-icons/cg";
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
    <div className="bg-base-100 z-0">
      <div className=" w-[90%] mx-auto py-20">
        <div className="flex justify-center">
          <CgGames className="text-6xl text-primary" />
        </div>
        <h1 className="text-2xl lg:text-4xl text-mainHeading font-bold uppercase mb-5 text-center">
          Games <span className="text-primary">collection</span>
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
