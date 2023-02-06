import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import UpdateHtmlGame from "../../Modal/UpdateHtmlGame/UpdateHtmlGame";
import Title2 from "../../Shared/DashTitle/Title2";
import Loader from "../../Shared/Loader/Loader";
import HtmlCards from "./HtmlCards";

const AllHtmlGames = () => {
  const [currentGame, setCurrentGame] = useState("");
  const {
    data: htmlgames,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["play-games"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:9000/play-games`);
      const data = await res.json();
      return data;
    },
  });
  const { data: categories, isLoading: categoryLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("http://localhost:9000/categories");
      const data = await res.json();
      return data;
    },
  });
  const deleteGame = (id) => {
    fetch(`http://localhost:9000/deleteHtmlGame/${id}`, {
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
  if (isLoading || categoryLoading) {
    return <Loader />;
  }
  return (
    <section>
      <Title2 color={"Games"}>All</Title2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-5">
        {htmlgames?.map((game, i) => (
          <HtmlCards
            key={game._id}
            game={game}
            deleteGame={deleteGame}
            setCurrentGame={setCurrentGame}
          />
        ))}
      </div>
      {currentGame && (
        <UpdateHtmlGame
          currentGame={currentGame}
          setCurrentGame={setCurrentGame}
          categories={categories}
          refetch={refetch}
        />
      )}
    </section>
  );
};

export default AllHtmlGames;
