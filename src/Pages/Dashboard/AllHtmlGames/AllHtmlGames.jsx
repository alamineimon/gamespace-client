import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loader from "../../Shared/Loader/Loader";
import HtmlCards from "./HtmlCards";

const AllHtmlGames = () => {
  const { data: htmlgames, isLoading } = useQuery({
    queryKey: ["play-games"],
    queryFn: async () => {
      const res = await fetch(`https://gamespace-server.vercel.app/play-games`);
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loader />;
  }
  return (
    <section>
      <h1>All games</h1>
      <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-5">
        {htmlgames?.map((game, i) => (
          <HtmlCards key={game._id} game={game} />
        ))}
      </div>
    </section>
  );
};

export default AllHtmlGames;
