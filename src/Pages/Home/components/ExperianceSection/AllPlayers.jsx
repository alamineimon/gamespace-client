import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { Link } from 'react-router-dom';
import Loader from '../../../Shared/Loader/Loader';

const AllPlayers = () => {
  const { data: players, isLoading } = useQuery({
    queryKey: ["players"],
    queryFn: async () => {
      const res = await fetch("https://gamespace-server.vercel.app/users", {
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
      });
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
      <div className="grid lg:grid-cols-8 grid-cols-4 px-6 gap-6 justify-items-center">
        {players?.map((player, i) => (
          <Link to={`/users/${player?._id}`} title={`${player?.name}`}>
            <img src={player.photoURL} className="h-16 w-16 cursor-pointer hover:bg-yellow-300 rounded-full border-2 border-red-500 hover:border-yellow-500" alt="" />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default AllPlayers