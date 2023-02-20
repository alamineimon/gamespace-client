import { useQuery } from "@tanstack/react-query";
import axios from "../../../axios";
import React from "react";
import TrendingGamesCard from "./TrendingGamesCard";
import Loader from "../../Shared/Loader/Loader";

const TrendingGames = () => {
  const { data: trendingGames, isLoading } = useQuery({
    queryKey: ["popularGames"],
    queryFn: async () => {
      const { data } = await axios.get(`/popularGames`);
      return data;
    },
  });
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="bg-dashboardCards rounded-2xl font-rajdhani py-5 space-y-5 px-5 sticky top-5 max-w-sm border-l border-t border-white/20 ">
      <h2 className="text-xl font-bold text-mainHeading">Trending Games</h2>
      {trendingGames ? (
        trendingGames?.map((games) => {
          return <TrendingGamesCard key={games?._id} games={games} />;
        })
      ) : (
        <h1>No games found</h1>
      )}
    </div>
  );
};

export default TrendingGames;
