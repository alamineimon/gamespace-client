import React, { useContext, useRef, useState } from "react";
import { BsArrowsFullscreen } from "react-icons/bs";
import {
  ScrollRestoration,
  useLoaderData,
  useNavigate,
} from "react-router-dom";
import { MdFavorite } from "react-icons/md";
import { AuthContext } from "../../context/AuthProvider";
const PlayGamesSingle = () => {
  const htmlGame = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const iframeRef = useRef(null);
  const handleFullscreen = () => {
    iframeRef.current.requestFullscreen();
  };
  const {
    _id,
    gameName,
    authorName,
    gameLink,
    category,
    description,
    favorites,
  } = htmlGame;
  const [fav, setFav] = useState(favorites?.includes(user?.email));
  const handleFavorite = () => {
    if (!user) {
      return navigate("/login");
    }
    fetch(
      `http://localhost:9000/handleFavorite/${_id}?email=${user?.email}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFav(!fav);
      });
  };
  return (
    <section className="py-10">
      <div className="w-11/12 mx-auto  space-y-2">
        <div className="grid xl:grid-cols-8 gap-5 ">
          <div className="col-span-2 hidden lg:block  "></div>
          <div className="col-span-4 p-3 space-y-3 ">
            <div className="space-y-4 text-center">
              <h1 className="text-2xl lg:text-2xl font-bold text-mainHeading">
                {gameName}
              </h1>
              <h3>
                <span className="text-white font-bold">Author: </span>
                {authorName}
              </h3>
            </div>
            <div className="bg-neutral  p-3 space-y-2">
              <iframe
                ref={iframeRef}
                src={gameLink}
                width="100%"
                height="400px"
                title="hellooooo"
                className="mx-auto"
              ></iframe>
              <div className="flex items-center space-x-5">
                <MdFavorite
                  onClick={handleFavorite}
                  title="add to favorite"
                  className={`${
                    fav
                      ? "text-red-500 scale-125 cursor-pointer text-lg hover:text-red-500 transition-transform"
                      : "cursor-pointer text-lg hover:text-red-500 hover:scale-125 transition-transform"
                  }`}
                />
                <button onClick={handleFullscreen}>
                  <BsArrowsFullscreen
                    className="hover:text-green-500"
                    title="fullscreen"
                  />
                </button>
              </div>
            </div>
            <div className="space-y-3">
              <h3>
                <span className="text-white font-bold ">Category:</span>{" "}
                {category}
              </h3>
              <p>
                <span className="text-white font-bold ">Description:</span>{" "}
                {description}
              </p>
            </div>
          </div>
          <div className="col-span-2  lg:block text-left space-y-5"></div>
        </div>
      </div>
      <ScrollRestoration />
    </section>
  );
};

export default PlayGamesSingle;
