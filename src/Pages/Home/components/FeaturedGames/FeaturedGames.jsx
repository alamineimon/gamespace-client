import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loader from "../../../Shared/Loader/Loader";
import FeaturedGamesCard from "./FeaturedGamesCard";

const FeaturedGames = () => {
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
    <section className="bg-bg2 py-10">
      <div className="w-11/12 mx-auto">
        <h1 className="text-3xl text-center mb-6 lg:text-5xl capitalize font-semibold">
          Trending Games
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {games.slice(0, 3).map((game, i) => (
            <FeaturedGamesCard key={i} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGames;
