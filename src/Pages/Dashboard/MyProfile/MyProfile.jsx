import { useQuery } from "@tanstack/react-query";
import axios from "../../../axios";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import "../MyProfile/MyProfile.css";
import AboutMe from "./AboutMe";
import AddPost from "./AddPost";
import FriendList from "./FriendList";
import FriendRequest from "./FriendRequest";
import Loader from "../../Shared/Loader/Loader";
import BannerPart from "./BannerPart";
import PostCards from "./PostCards";
import CommentModal from "./CommentModal";
import { useState } from "react";
import EditProfileModal from "./EditProfileModal";
import useTitle from "../../../Hooks/useTitle/useTitle";
const MyProfile = () => {
  useTitle("My Profile");
  const { userinfo, user, userRefetch } = useContext(AuthContext);
  const [currentPost, setCurrentPost] = useState(null);
  const [editProfile, setEditProfile] = useState(false);
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
        console.log(data);
      });
  };
  if (isLoading || friendsLoading || postsLoading) {
    return <Loader />;
  }
  return (
    <>
      <section className=" lg:max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-10 ">
        <BannerPart
          userinfo={userinfo}
          posts={posts}
          setEditProfile={setEditProfile}
        />
        <div>
          <AboutMe userinfo={userinfo} />
        </div>
        <div className="lg:col-span-2 space-y-5">
          <AddPost userinfo={userinfo} postRefetch={postRefetch} />
          {posts ? (
            posts.map((post, i) => {
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
          <div className="space-y-5 sticky top-5">
            {friendReq.length > 0 && (
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
      </section>
      {currentPost && (
        <CommentModal
          currentPost={currentPost}
          setCurrentPost={setCurrentPost}
          user={userinfo}
          handleLike={handleLike}
          postRefetch={postRefetch}
        />
      )}
      {editProfile && (
        <EditProfileModal
          setEditProfile={setEditProfile}
          userinfo={userinfo}
          userRefetch={userRefetch}
        />
      )}
    </>
  );
};

export default MyProfile;
