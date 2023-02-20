import React from "react";
import FriendListCard from "./FriendListCard";

const FriendList = ({ user, friends }) => {
  return (
    <div className="bg-dashboardCards p-5 rounded-2xl font-rajdhani sticky top-5 max-w-xs ml-auto border-l border-t border-white/20 ">
      <h2 className="text-lg font-semibold text-mainHeading mb-5">Friends</h2>
      <div className="space-y-3">
        {friends ? (
          friends.map((friend, i) => {
            return <FriendListCard key={i} friend={friend} />;
          })
        ) : (
          <p>No friends</p>
        )}
      </div>
    </div>
  );
};

export default FriendList;
