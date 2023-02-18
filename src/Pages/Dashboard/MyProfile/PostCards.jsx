import React from "react";
import { AiTwotoneLike } from "react-icons/ai";
import { FaGlobe, FaUserFriends } from "react-icons/fa";
import { MdAddComment } from "react-icons/md";
import defaultAvtar from "../../../assets/images/gamingAvatar.webp";
const PostCards = ({ post, user, setCurrentPost, handleLike }) => {
  const { postText, postTime, authorName, authorImage, privacy, _id } = post;
  return (
    <div className="bg-dashboardCards rounded-2xl font-rajdhani py-5 space-y-5 hover:brightness-125 max-w-xl mx-auto">
      <div className="flex justify-between px-5 border-white/20">
        <div className="flex space-x-2 items-center">
          <div className="w-12 bg-white/10 hexagon p-1">
            <img
              src={authorImage ? authorImage : defaultAvtar}
              className="hexagon w-full"
              alt={authorName}
            />
          </div>
          <div>
            <h3 className="font-semibold text-white flex items-center ">
              {authorName}
              {privacy === "public" ? (
                <FaGlobe
                  title="Shared with public"
                  className="ml-2 text-sm text-gray "
                />
              ) : (
                <FaUserFriends
                  title="Shared with friends"
                  className="ml-2 text-sm text-gray "
                />
              )}
            </h3>
            <p className="text-sm">{postTime}</p>
          </div>
        </div>
      </div>
      <div className="px-5 space-y-2 text-white">
        <p>{postText}</p>
        {post?.imageUrl ? (
          <img src={post?.imageUrl} className="rounded-md w-full" alt="" />
        ) : (
          <></>
        )}
      </div>
      <div className="flex justify-between space-x-5 mx-5 border-t py-2 border-white/10 ">
        <div className="flex space-x-2 items-center ">
          <div className=" flex justify-start items-center ">
            <AiTwotoneLike
              className={`${
                post?.likes?.includes(user?.email)
                  ? "text-blue-500 text-4xl cursor-pointer p-2 rounded-full bg-blue-500/10 "
                  : "text-white/30 text-4xl cursor-pointer p-2 rounded-full hover:bg-blue-500/10 hover:text-blue-500"
              } `}
              title="Like"
              onClick={() => handleLike(_id)}
            />
            <span className="ml-1">
              {post?.quantity ? (
                post.quantity
              ) : (
                <span className="text-xs">Be the first one</span>
              )}
            </span>
          </div>
          <div className=" flex justify-start items-center ">
            <label htmlFor="commentBox">
              <MdAddComment
                onClick={() => setCurrentPost(post)}
                className="text-white/30 text-4xl cursor-pointer p-2 rounded-full hover:bg-green-500/10 hover:text-green-500"
                title="comments"
              />
            </label>
            <span className="ml-1">{post?.reviews?.length}</span>
          </div>
        </div>
        <div className="flex items-center space-x-5">
          <span>{post?.quantity ? post?.quantity : "0"} Likes</span>
          <span>
            {post?.comments ? post?.comments : "0"}
            {post?.comments > 1 ? " comments" : " comment"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostCards;
