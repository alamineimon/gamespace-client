import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
import { FiTrendingUp } from "react-icons/fi";
import { AuthContext } from "../../../../context/AuthProvider";
import Loader from "../../../Shared/Loader/Loader";
import PopularGamesCards from "./PopularGamesCards";

const PopularGames = () => {
  const { theme } = useContext(AuthContext);
  const { data: games, isLoading } = useQuery({
    queryKey: ["popularGames"],
    queryFn: async () => {
      const res = await fetch(
        `https://gamespace-server.vercel.app/popularGames`
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loader />;
  }
  return (
    <section className="pt-10 lg:pt -20 bg-secondary">
      <div className="w-11/12 mx-auto">
        <div className="flex justify-center">
          <FiTrendingUp className="text-6xl text-primary" />
        </div>
        <h1 className="text-2xl lg:text-4xl text-mainHeading font-bold uppercase mb-5 text-center">
          <span
            className={`${theme === "dark" ? "text-white1" : "text-black1"}`}
          >
            Popular
          </span>{" "}
          <span className="text-primary">Games</span>
        </h1>
        <div className="grid md:grid-cols-2 gap-5 lg:grid-cols-4">
          {games?.map((games, i) => {
            return <PopularGamesCards key={i} games={games} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularGames;
