import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthProvider";
import Loader from "../../../Shared/Loader/Loader";
import FeaturedGamesCard from "./FeaturedGamesCard";

const FeaturedGames = () => {
  const { theme } = useContext(AuthContext);
  const { data: games, isLoading } = useQuery({
    queryKey: ["games"],
    queryFn: async () => {
      const res = await fetch(
        "https://gamespace-server.vercel.app/downloadGames"
      );
      const data = await res.json();
      return data;
    },
  });
  console.log(games);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <section
      className={`py-10 ${
        theme === "dark" ? "bg-black1 text-white1" : "bg-white1 text-black1"
      }`}
    >
      <div className="w-11/12 mx-auto">
        <h1
          className={`text-3xl text-center mb-6 lg:text-5xl capitalize font-semibold ${
            theme === "dark" ? "text-white1" : "text-black1"
          }`}
        >
          Trending Games
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {games?.slice(2, 5)?.map((game, i) => (
            <FeaturedGamesCard key={i} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGames;
