import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../context/AuthProvider";
import Loader from "../../../Shared/Loader/Loader";
import "./ExperianceSection.css";
import PlayersCard from "./PlayersCard";

const ExperianceSection = () => {
  const { data: players, isLoading } = useQuery({
    queryKey: ["players"],
    queryFn: async () => {
      const res = await fetch("https://gamespace-server.vercel.app/users");
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="featureBg">
      <div className="py-20 lg:flex block justify-between">
        <div className="lg:w-1/2 relative px-6 pt-2 md:ml-16">
          <hr className="bg-red-500 h-2" />
          <p className="h-4 w-16 right-6 absolute bg-red-500"></p>
          <p
            className={`md:text-4xl text-3xl mt-16`}
          >
            EXPERIENCE
          </p>
          <p className="md:text-4xl text-3xl my-2 md:my-6 font-extrabold text-yellow-600">
            STRONG TEAM PLAY
          </p>
          <p
            className={`text-md md:text-xl mb-12`}
          >
            An example of successful teamwork is effective active listening
            skills. Maintaining eye contact when others are talking, having open
            and friendly body language, and responding appropriately to the
            questions and comments of others establishes a professional work
            environment and shows good teamwork.
          </p>
        </div>

        <div className="w-1/2 hidden p-8 relative lg:flex">
          <div className="parallelogram1 absolute"></div>
          <div className="parallelogram2 absolute"></div>
        </div>
      </div>
      <div>
        <div className="grid lg:grid-cols-8 grid-cols-4 px-6 gap-6 justify-items-center">
          {players?.slice(0, 16)?.map((player, i) => (
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
    </div>
  );
};

export default ExperianceSection;
