import axios from "../../../axios";
import React from "react";
import FriendRequestCard from "./FriendRequestCard";

const FriendRequest = ({ user, friendReq, reqRefetch, friendRefetch }) => {
  const handleFriendReq = (actionName, requestedBy) => {
    axios
      .put(
        `/friendReqAction?action=${actionName}&requestedBy=${requestedBy}&email=${user?.email}`,
        {
          data: {
            // data to be updated
          },
        }
      )
      .then((response) => {
        reqRefetch();
        friendRefetch();
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="bg-dashboardCards p-5 rounded-2xl font-rajdhani">
      <h2 className="text-lg font-semibold text-mainHeading mb-5">
        Friends request
      </h2>
      <div className="space-y-3">
        {friendReq ? (
          friendReq.map((friend, i) => {
            return (
              <FriendRequestCard
                key={i}
                friend={friend}
                handleFriendReq={handleFriendReq}
              />
            );
          })
        ) : (
          <p>No friends</p>
        )}
      </div>
    </div>
  );
};

export default FriendRequest;
