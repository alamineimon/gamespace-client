import { useQuery } from "@tanstack/react-query";
import React from "react";
// import './HtmlGames.css'
import Loader from "../../../Shared/Loader/Loader";
import HtmlGamesCards from "./HtmlGamesCards";

const HtmlGames = () => {
  const { data: htmlGames, isLoading } = useQuery({
    queryKey: ["htmlGames"],
    queryFn: async () => {
      const res = await fetch("https://gamespace-server.vercel.app/play-games", {
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
    <section className="relative bg-bg1/20 py-10 lg:py-20 bg-no-repeat bg-cover bg-center bg-fixed">
      <div className="w-11/12 grid md:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto">
        {(htmlGames || [])?.map((htmlgame, i) => (
          <HtmlGamesCards key={i} game={htmlgame} />
        ))}
      </div>
    </section>
  );
};

export default HtmlGames;
