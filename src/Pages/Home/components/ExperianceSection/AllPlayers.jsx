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
    <p className="text-2xl md:text-3xl text-yellow-500 font-bold text-center uppercase">
      All Players
    </p>
    <div className="grid lg:grid-cols-8 grid-cols-4 mt-12 px-6 gap-6 justify-items-center">
      {players?.map((player, i) => (
        <img src={player.img} className="h-16 w-16 hover:bg-yellow-300 hover:border-yellow-500 cursor-pointer rounded-full border-2 border-red-500" alt="" />
      ))}
    </div>
  </div>
  )
}

export default AllPlayers