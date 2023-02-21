import { useQuery } from "@tanstack/react-query";
import axios from "../../axios";
import React from "react";
import { useLoaderData } from "react-router-dom";
import BannerPart from "../Dashboard/MyProfile/BannerPart";
import AboutMe from "../Dashboard/MyProfile/AboutMe";
import PostCards from "../Dashboard/MyProfile/PostCards";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import FriendList from "../Dashboard/MyProfile/FriendList";
import Loader from "../Shared/Loader/Loader";
import { useState } from "react";
import CommentModal from "../Dashboard/MyProfile/CommentModal";
import useTitle from "../../Hooks/useTitle/useTitle";

const PlayerProfile = () => {
  const user = useLoaderData();
  useTitle(`Profile/${user.name}`)
  const { userinfo: currentUser } = useContext(AuthContext);
  const [currentPost, setCurrentPost] = useState(null);

  //get all post of this user
  const {
    data: posts,
    isLoading: postsLoading,
    refetch: postRefetch,
  } = useQuery({
    queryKey: ["getpost", user?.email],
    queryFn: async () => {
      const { data } = await axios.get(`/getposts?email=${user?.email}`);
      return data;
    },
  });

  //handle like button
  const handleLike = (id) => {
    fetch(
      `https://gamespace-server.vercel.app/posts/like/${id}?email=${currentUser?.email}`,
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
        console.log(data);
      });
  };
  //get friendList
  const { data: friends, isLoading: friendsLoading } = useQuery({
    queryKey: ["getFriends", user?.email],
    queryFn: async () => {
      const { data } = await axios.get(`/friends?email=${user?.email}`);
      return data;
    },
  });
  if (friendsLoading || postsLoading) {
    return <Loader />;
  }
  return (
    <section className="bg-[#0e1015] ">
      <div className=" max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-5 p-10 ">
        <BannerPart userinfo={user} posts={posts} setEditProfile={""} />
        <div>
          <AboutMe userinfo={user} />
        </div>
        <div className="lg:col-span-2 space-y-5">
          {posts ? (
            posts.map((post, i) => {
              return (
                <PostCards
                  key={i}
                  post={post}
                  user={user}
                  setCurrentPost={setCurrentPost}
                  handleLike={handleLike}
                />
              );
            })
          ) : (
            <p>No post found</p>
          )}
        </div>
        <div className="space-y-5">
          <FriendList friends={friends} />
        </div>
      </div>
      {currentPost && (
        <CommentModal
          currentPost={currentPost}
          setCurrentPost={setCurrentPost}
          user={currentUser}
          handleLike={handleLike}
          postRefetch={postRefetch}
        />
      )}
    </section>
  );
};

export default PlayerProfile;
