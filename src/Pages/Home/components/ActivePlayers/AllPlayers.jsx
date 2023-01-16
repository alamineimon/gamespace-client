import { useQuery } from '@tanstack/react-query';
import React from 'react'
import Loader from '../../../Shared/Loader/Loader';

const AllPlayers = () => {
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
      {players.map((player, i) => (
        <img src={player.img} className="h-16 w-16 rounded-full border-2 border-red-500" alt="" />
      ))}
    </div>
  </div>
  )
}

export default AllPlayers