import React from "react";
import { useNavigate } from "react-router-dom";
import defaultAvtar from "../../../assets/images/gamingAvatar.webp";
const FriendRequestCard = ({ friend, handleFriendReq }) => {
  const { name, email, photoURL, _id } = friend;
  const navigate = useNavigate();
  const visitProfile = () => {
    navigate(`/users/${_id}`);
  };

  return (
    <div className="flex space-x-3">
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
        <div>
          <button
            onClick={() => handleFriendReq("accept", email)}
            className="btn btn-xs btn-primary"
          >
            Accept
          </button>{" "}
          <button
            onClick={() => handleFriendReq("delete", email)}
            className="btn btn-xs btn-error"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default FriendRequestCard;
