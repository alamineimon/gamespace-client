import { useQuery } from "@tanstack/react-query";
import axios from "../../axios";
import React, { useEffect } from "react";
import {
  ScrollRestoration,
  useLoaderData,
  useNavigate,
  useRevalidator,
} from "react-router-dom";
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
import { toast } from "react-hot-toast";

const PlayerProfile = () => {
  const user = useLoaderData();
  let revalidator = useRevalidator();

  useTitle(`Profile/${user.name}`);
  const { userinfo: currentUser } = useContext(AuthContext);
  const [currentPost, setCurrentPost] = useState(null);
  const navigate = useNavigate();
  const [isFriend, setIsFriend] = useState(false);
  const searchEmail = currentUser?.email;
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
      console.log(data);
      return data;
    },
  });
  useEffect(() => {
    if (friends?.length > 0) {
      for (let i = 0; i < friends?.length; i++) {
        if (friends[i].email === searchEmail) {
          console.log(`Found user with email ${searchEmail}:`);
          // Do something with the user object here
          return setIsFriend(true);
        }
      }
    }
  }, [friends, searchEmail]);

  const sendFriendRequest = async () => {
    if (!user) {
      return navigate("/login");
    }
    const res = await fetch(
      `https://gamespace-server.vercel.app/sendFriendRequest?from=${currentUser?.email}&to=${user?.email}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
      }
    );
    const data = await res.json();
    revalidator.revalidate();
    if (data.acknowledged) {
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? " " : "-translate-y-56 scale-50 opacity-0"
          } max-w-sm w-full bg-neutral/80 backdrop-blur shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 transition-all duration-300 border`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-center">
              <div className="flex-shrink-0 pt-0.5">
                <img
                  className="h-10 w-10 rounded-full"
                  src={user?.photoURL}
                  alt=""
                />
              </div>
              <div className="ml-3 flex-1">
                <p className="mt-1 text-sm  capitalize text-white">
                  Friend request sent to{" "}
                  <span className="text-primary">{user.name}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex ">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium hover:text-primary focus:outline-none "
            >
              Close
            </button>
          </div>
        </div>
      ));
    }
  };
  if (friendsLoading || postsLoading) {
    return <Loader />;
  }

  return (
    <section className="bg-[#0e1015] ">
      <div className=" max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-5 p-10 ">
        <BannerPart
          userinfo={user}
          posts={posts}
          setEditProfile={""}
          sendFriendRequest={sendFriendRequest}
          isFriend={isFriend}
        />
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
      <ScrollRestoration />
    </section>
  );
};

export default PlayerProfile;
