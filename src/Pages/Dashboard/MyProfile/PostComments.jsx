import React from "react";
import defaultAvtar from "../../../assets/images/gamingAvatar.webp";
const PostComments = ({ comment }) => {
  return (
    <div className="mt-3">
      <div key={comment._id}>
        <div className="flex space-x-2 items-center">
          <div className="w-12 bg-white/10 hexagon p-1">
            <img
              src={comment?.photoURL ? comment?.photoURL : defaultAvtar}
              className="hexagon w-12"
              alt={comment?.commentorName}
            />
          </div>
          <div>
            <h3 className="font-semibold text-white flex items-center  ">
              {comment?.commentorName}
            </h3>
            <p className="text-xs">{comment?.commentTime}</p>
          </div>
        </div>
        <p className="text-sm ml-14 text-white">{comment?.commentTxt}</p>
      </div>
    </div>
  );
};

export default PostComments;
