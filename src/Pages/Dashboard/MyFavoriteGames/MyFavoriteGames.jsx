import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import useTitle from "../../../Hooks/useTitle/useTitle";
import Title2 from "../../Shared/DashTitle/Title2";
import Loader from "../../Shared/Loader/Loader";
import FavCards from "./FavCards";

const MyFavoriteGames = () => {
  useTitle("Favorite Game");
  const { user } = useContext(AuthContext);
  const { data: favGames, isLoading } = useQuery({
    queryKey: ["favoriteGames", "user"],
    queryFn: async () => {
      const res = await fetch(
        `https://gamespace-server.vercel.app/favoriteGames?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const data = await res.json();
      console.log(data);
      return data;
    },
  });

  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <div className="w-11/12 mx-auto py-10">
      <Title2 colored={"Games"}>Favorite</Title2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-5">
        {favGames?.map((favG, i) => {
          return <FavCards key={i} favG={favG} />;
        })}
      </div>
    </div>
  );
};

export default MyFavoriteGames;
