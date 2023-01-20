import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loader from "../../../Shared/Loader/Loader";
import HtmlGamesCards from "./HtmlGamesCards";

const HtmlGames = () => {
  const { data: htmlGames, isLoading } = useQuery({
    queryKey: ["htmlGames"],
    queryFn: async () => {
      const res = await fetch("HtmlGames.json");
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loader />;
  }
  return (
    <section className="py-10 lg:py-20 bg-bg2">
      <div className="w-11/12 grid lg:grid-cols-3 gap-5 mx-auto">
        {htmlGames.map((htmlgame, i) => (
          <HtmlGamesCards key={i} game={htmlgame} />
        ))}
      </div>
    </section>
  );
};

export default HtmlGames;
