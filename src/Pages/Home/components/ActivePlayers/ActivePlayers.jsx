import React from "react";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Shared/Loader/Loader";
import "./ActivePlayer.css";
import PlayersCard from "./PlayersCard";
import { Link } from "react-router-dom";

const ActivePlayers = () => {
  const { data: players, isLoading } = useQuery({
    queryKey: ["players"],
    queryFn: async () => {
      const res = await fetch("team.json");
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="py-6 pt-10 bg-gray-400 activePlayer ">
      <p className="text-2xl md:text-3xl text-yellow-400 font-bold text-center uppercase">
        Active Player
      </p>
      <div className="grid lg:grid-cols-8 grid-cols-4 mt-12 px-6 gap-6 justify-items-center">
        {players.slice(0, 16).map((player, i) => (
          <PlayersCard key={i} player={player} />
        ))}
      </div>

      <div className="flex justify-center items-center mt-16 ">
        <Link
          to="/allplayers"
          className="hover:bg-yellow-500 rounded border-2 border-yellow-500 text-yellow-500 hover:text-white text-md md:text-lg uppercase font-semibold px-8 py-2"
        >
          more players 
        </Link>
      </div>

    </div>
  );
};

export default ActivePlayers;
