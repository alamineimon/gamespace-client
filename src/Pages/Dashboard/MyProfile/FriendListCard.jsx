import React from "react";
import { useNavigate } from "react-router-dom";
import defaultAvtar from "../../../assets/images/gamingAvatar.webp";
const FriendListCard = ({ friend }) => {
  const { name, email, photoURL, _id } = friend;
  const navigate = useNavigate();
  const visitProfile = () => {
    navigate(`/users/${_id}`);
  };
  return (
    <div className="flex space-x-3 ">
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
