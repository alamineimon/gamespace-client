import { useQuery } from "@tanstack/react-query";
import axios from "../../../axios";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import Loader from "../../Shared/Loader/Loader";
import CommentModal from "../MyProfile/CommentModal";
import PostCards from "../MyProfile/PostCards";
import FriendRequest from "../MyProfile/FriendRequest";
import FriendList from "../MyProfile/FriendList";
import TrendingGames from "./TrendingGames";
import AddPost from "../MyProfile/AddPost";
import useTitle from "../../../Hooks/useTitle/useTitle";
const CommunityFeed = () => {
  const [currentPost, setCurrentPost] = useState(null);
  const { userinfo, user } = useContext(AuthContext);
  const {
    data: allposts,
    isLoading: postsLoading,
    refetch: postRefetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const { data } = await axios.get(`/posts`);
      return data;
    },
  });
  useTitle("Community");
  // get friendReq
  const {
    data: friendReq,
    isLoading,
    refetch: reqRefetch,
  } = useQuery({
    queryKey: ["getFriendRequsts", user?.email],
    queryFn: async () => {
      const { data } = await axios.get(
        `/getFriendRequsts?email=${user?.email}`
      );
      return data;
    },
  });
  //get friendList
  const {
    data: friends,
    isLoading: friendsLoading,
    refetch: friendRefetch,
  } = useQuery({
    queryKey: ["getFriends", user?.email],
    queryFn: async () => {
      const { data } = await axios.get(`/friends?email=${user?.email}`);
      return data;
    },
  });

  const handleLike = (id) => {
    fetch(
      `https://gamespace-server.vercel.app/posts/like/${id}?email=${user?.email}`,
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
      });
  };
  if (isLoading || postsLoading || friendsLoading) {
    return <Loader />;
  }
  return (
    <section className="bg-[#0e1015]">
      <div className="w-11/12 mx-auto py-10 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <div className="">
          <TrendingGames />
        </div>
        <div className="lg:col-span-2 space-y-5">
          <AddPost userinfo={userinfo} postRefetch={postRefetch} />
          {allposts ? (
            allposts?.map((post, i) => {
              return (
                <PostCards
                  key={i}
                  post={post}
                  user={userinfo}
                  setCurrentPost={setCurrentPost}
                  handleLike={handleLike}
                />
              );
            })
          ) : (
            <p>No post found</p>
          )}
        </div>
        <div>
          <div className="space-y-5">
            {friendReq?.length > 0 && (
              <FriendRequest
                user={user}
                friendReq={friendReq}
                reqRefetch={reqRefetch}
                friendRefetch={friendRefetch}
              />
            )}

            <FriendList friends={friends} />
          </div>
        </div>
      </div>

      {currentPost && (
        <CommentModal
          currentPost={currentPost}
          setCurrentPost={setCurrentPost}
          user={userinfo}
          handleLike={handleLike}
          postRefetch={postRefetch}
        />
      )}
    </section>
  );
};

export default CommunityFeed;
