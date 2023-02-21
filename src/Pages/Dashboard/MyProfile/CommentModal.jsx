import { useQuery } from "@tanstack/react-query";
import axios from "../../../axios";
import React from "react";
import { AiTwotoneLike } from "react-icons/ai";
import { FaGlobe, FaUserFriends, FaWindowClose } from "react-icons/fa";
import { MdAddComment } from "react-icons/md";
import Loader from "../../Shared/Loader/Loader";
import moment from "moment";
import PostComments from "./PostComments";

const CommentModal = ({ currentPost, postRefetch, user, setCurrentPost }) => {
  const {
    data: post,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["getpost"],
    queryFn: async () => {
      const { data } = await axios.get(`/getpost?id=${currentPost?._id}`);
      return data;
    },
  });
  const {
    data: comments,
    isLoading: commentsLoading,
    refetch: commentsRefetch,
  } = useQuery({
    queryKey: ["postComments"],
    queryFn: async () => {
      const { data } = await axios.get(
        `/postComments?postid=${currentPost?._id}`
      );
      return data;
    },
  });
  const handleLike = () => {
    fetch(
      `https://gamespace-server.vercel.app/posts/like/${post?._id}?email=${user?.email}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        postRefetch();
        refetch();
        console.log(data);
      });
  };
  const handleComments = (e) => {
    e.preventDefault();
    let comment = e.target.comment.value;
    const commentInfo = {
      commentTxt: comment,
      commentorName: user?.name,
      commentorEmail: user?.email,
      commentorId: user?._id,
      photoURL: user?.photoURL,
      postId: currentPost?._id,
      commentTime: moment().format("Do MMM YYYY, h:mm a"),
    };
    fetch(
      `https://gamespace-server.vercel.app/commentcommunitypost?postid=${currentPost?._id}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(commentInfo),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        commentsRefetch();
        postRefetch();
        e.target.reset();
      });
  };
  if (isLoading || commentsLoading) {
    return <Loader />;
  }
  return (
    <>
      <input type="checkbox" id="commentBox" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle ">
        <div className="modal-box relative ">
          <div className="flex justify-between p-3 border-white/20">
            <div className="flex space-x-2 items-center">
              <div className="w-12 bg-white/10 hexagon p-1">
                <img
                  src={post?.authorImage}
                  className="hexagon w-full"
                  alt={post?.authorName}
                />
              </div>
              <div>
                <h3 className="font-semibold text-white flex items-center ">
                  {post?.authorName}
                  {post?.privacy === "public" ? (
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
                <p className="text-sm">{post?.postTime}</p>
              </div>
            </div>
          </div>
          <div className="p-3 space-y-2">
            <p>{post?.postText}</p>
            {post?.imageUrl ? (
              <img src={post?.imageUrl} className="rounded-md w-full" alt="" />
            ) : (
              <></>
            )}
          </div>
          <div className="flex justify-between space-x-5 mx-2 border-t py-3 border-white/10 ">
            <div className="flex space-x-2 items-center ">
              <div className=" flex justify-start items-center ">
                <AiTwotoneLike
                  className={`${
                    post?.likes?.includes(user?.email)
                      ? "text-blue-500 text-4xl cursor-pointer p-2 rounded-full bg-blue-500/10 "
                      : "text-white/30 text-4xl cursor-pointer p-2 rounded-full hover:bg-blue-500/10 hover:text-blue-500"
                  } `}
                  title="Like"
                  onClick={handleLike}
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
                <MdAddComment
                  className="text-white/30 text-4xl cursor-pointer p-2 rounded-full hover:bg-green-500/10 hover:text-green-500"
                  title="comments"
                />

                <span className="ml-1">{post?.reviews?.length}</span>
              </div>
            </div>
            <div className="flex items-center space-x-5">
              <span>{post?.quantity ? post?.quantity : "0"} Likes</span>
              <span>
                {comments.length ? comments.length : "0"}{" "}
                {comments.length > 1 ? "comments" : "comment"}
              </span>
            </div>
          </div>
          {/* comment section start */}
          <div>
            <form
              onSubmit={handleComments}
              className="text-right border-b border-white/10 pb-3"
            >
              <textarea
                className="w-full bg-white/5 p-2 rounded"
                placeholder="Write a comment"
                required
                name="comment"
              />
              <button className="btn btn-xs">comment</button>
            </form>
            {comments.length ? (
              comments?.map((comment) => {
                return <PostComments key={comment?._id} comment={comment} />;
              })
            ) : (
              <p>No comments found</p>
            )}
          </div>
          <FaWindowClose
            onClick={() => setCurrentPost(null)}
            className="absolute top-0 right-0 cursor-pointer hover:text-red-500"
            title="close"
          />
        </div>
      </div>
    </>
  );
};

export default CommentModal;
