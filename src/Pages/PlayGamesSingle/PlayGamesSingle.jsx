import { useQuery } from "@tanstack/react-query";
import React from "react";

const PlayGamesSingle = () => {
  const { data: htmlGames, isLoading } = useQuery({
    queryKey: ["htmlGames"],
    queryFn: async () => {
      const res = await fetch("HtmlGames.json");
      const data = await res.json();
      return data;
    },
  });
  const { gameName, authorName, gameLink, thumbnail, category, description } =
    htmlGames[0];
  return (
    <section className="py-10 lg:py-20">
      <div className="w-11/12 mx-auto text-center space-y-5">
        <h1 className="text-2xl lg:text-4xl font-bold text-mainHeading">
          {gameName}
        </h1>
        <h3>{authorName}</h3>
        <iframe
          src={gameLink}
          width="100%"
          height="854"
          title="hellooooo"
          frameborder="0"
        ></iframe>
      </div>
    </section>
  );
};

export default PlayGamesSingle;
