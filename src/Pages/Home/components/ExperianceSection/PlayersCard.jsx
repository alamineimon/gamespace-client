import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../context/AuthProvider";

const PlayersCard = ({ player }) => {
  const { user } = useContext(AuthContext);
  const { photoURL, name, email } = player;
  return (
    <Link
      to={
        email === user?.email ? `/dashboard/profile` : `/playerProfile/${email}`
      }
    >
      <img
        src={photoURL}
        className="h-16 w-16 cursor-pointer hover:bg-yellow-300 rounded-full border-2 border-red-500 hover:border-yellow-500"
        alt=""
      />
    </Link>
  );
};

export default PlayersCard;
