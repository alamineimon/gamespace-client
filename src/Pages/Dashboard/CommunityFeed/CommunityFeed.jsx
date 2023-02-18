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
      console.log(data);
      return data;
    },
  });

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
    fetch(`http://localhost:9000/posts/like/${id}?email=${user?.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        postRefetch();
        console.log(data);
      });
  };
  if (isLoading || postsLoading || friendsLoading) {
    return <Loader />;
  }
  return (
    <section>
      <div className="w-11/12 mx-auto py-10 grid lg:grid-cols-4 gap-5">
        <div>
          <TrendingGames />
        </div>
        <div className="col-span-2 space-y-5">
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
