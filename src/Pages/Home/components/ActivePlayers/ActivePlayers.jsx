import React from "react";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Shared/Loader/Loader";
import "./ActivePlayer.css";
import PlayersCard from "./PlayersCard";

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
      <p className="text-3xl text-yellow-400 font-bold text-center uppercase">
        Active Player
      </p>
      <div className="grid lg:grid-cols-8  grid-cols-4 mt-12 lg:px-16 sm:px-32 gap-6">
        {players.map((player, i) => (
          <PlayersCard key={i} player={player} />
        ))}
      </div>
      
    </div>
  );
};

export default ActivePlayers;
