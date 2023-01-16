import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
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
      <p className="text-3xl text-blue-400 font-bold text-center uppercase">
        Active Player
      </p>
      <div className="grid grid-cols-8 mt-12 px-16 gap-6">
        {players.slice(0, 16).map((player, i) => (
          <PlayersCard key={i} player={player} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-16 ">
        <Link to='/allplayers' className="hover:bg-blue-700 rounded border-2 border-blue-500 text-white text-lg uppercase font-semibold px-8 py-2">
          more players
        </Link>
      </div>
    </div>
  );
};

export default ActivePlayers;
