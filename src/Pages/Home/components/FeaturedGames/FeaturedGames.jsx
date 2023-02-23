import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
import { HiLightningBolt } from "react-icons/hi";
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

  if (isLoading) {
    return <Loader />;
  }
  return (
    <section className={"py-10 bg-black text-white "}>
      <div className="flex justify-center">
      
          <HiLightningBolt className="text-6xl text-primary" />
        </div>
      <div className="w-11/12 mx-auto">
      <h1 className="text-2xl lg:text-4xl text-mainHeading font-bold uppercase mb-5 text-center">
          <span>Treading</span> <span className="text-primary">Games</span>
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
