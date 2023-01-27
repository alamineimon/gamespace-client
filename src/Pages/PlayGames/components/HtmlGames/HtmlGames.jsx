import { useQuery } from "@tanstack/react-query";
import React from "react";
import './HtmlGames.css'
import Loader from "../../../Shared/Loader/Loader";
import HtmlGamesCards from "./HtmlGamesCards";

const HtmlGames = () => {
  const { data: htmlGames, isLoading } = useQuery({
    queryKey: ["htmlGames"],
    queryFn: async () => {
      const res = await fetch("http://localhost:9000/play-games");
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loader />;
  }
  return (
    <section className="relative">
      <div className="image">
            <img src="https://img.freepik.com/premium-photo/white-haired-female-warrior-knight-stands-with-drawn-sword-dragon-against-backdrop-snow-capped-mountains-fantasy-artwork-scene-cgi-animation-3d-rendering_557878-1553.jpg?size=626&ext=jpg&ga=GA1.1.207808977.1658386615&semt=sph" alt="" className="w-full h-4/5" />
      </div>
      <div className="w-11/12 grid lg:grid-cols-3 gap-5 mx-auto absolute top-64 left-20">
        {(htmlGames || []).map((htmlgame, i) => (
          <HtmlGamesCards key={i} game={htmlgame} />
        ))}
      </div>
    </section>
  );
};

export default HtmlGames;
