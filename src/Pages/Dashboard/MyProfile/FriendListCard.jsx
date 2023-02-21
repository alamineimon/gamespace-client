import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import defaultAvtar from "../../../assets/images/gamingAvatar.webp";
import { AuthContext } from "../../../context/AuthProvider";
const FriendListCard = ({ friend }) => {
  const { name, email, photoURL } = friend;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const visitProfile = () => {
    if (user?.email === email) {
      return navigate("/dashboard/profile");
    }
    navigate(`/playerProfile/${email}`);
  };
  return (
    <div className="flex space-x-3  ">
      <div className="w-14">
        <img
          src={photoURL ? photoURL : defaultAvtar}
          alt={name}
          className="w-full rounded-full"
        />
      </div>
      <div>
        <h2
          onClick={visitProfile}
          className="text-mainHeading font-semibold cursor-pointer"
        >
          {name}
        </h2>
        <h3 className="text-xs">{email}</h3>
      </div>
    </div>
  );
};

export default FriendListCard;
