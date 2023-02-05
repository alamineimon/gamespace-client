import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-hot-toast";
import Loader from "../../Shared/Loader/Loader";
import HtmlCards from "./HtmlCards";

const AllHtmlGames = () => {
  const {
    data: htmlgames,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["play-games"],
    queryFn: async () => {
      const res = await fetch(`https://gamespace-server.vercel.app/play-games`);
      const data = await res.json();
      return data;
    },
  });
  const deleteGame = (id) => {
    fetch(`https://gamespace-server.vercel.app/deleteHtmlGame/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Deleted successfully");
          refetch();
        }
      });
  };
  if (isLoading) {
    return <Loader />;
  }
  return (
    <section>
      <h1>All games</h1>
      <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-5">
        {htmlgames?.map((game, i) => (
          <HtmlCards key={game._id} game={game} deleteGame={deleteGame} />
        ))}
      </div>
    </section>
  );
};

export default AllHtmlGames;
