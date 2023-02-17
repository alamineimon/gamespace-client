import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { BsPersonPlusFill, BsTwitter, BsYoutube } from "react-icons/bs";
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import "./Profilepage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import {
  Link,
  ScrollRestoration,
  useLoaderData,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import defaultAvtar from "../../assets/images/gamingAvatar.webp";
import Loader from "../Shared/Loader/Loader";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-hot-toast";

const ProfileDetail = () => {
  const profileDetails = useLoaderData();
  const navigation = useNavigation();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const sendFriendRequest = async () => {
    if (!user) {
      return navigate("/login");
    }
    const res = await fetch(
      `http://localhost:9000/sendFriendRequest?from=${user?.email}&to=${profileDetails?.email}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
      }
    );
    const data = await res.json();
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
                  src={profileDetails?.photoURL}
                  alt=""
                />
              </div>
              <div className="ml-3 flex-1">
                <p className="mt-1 text-sm  capitalize text-white">
                  Friend request sent to{" "}
                  <span className="text-primary">{profileDetails.name}</span>
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

  if (navigation.state === "loading") {
    return <Loader />;
  }
  return (
    <div>
      <div className="bg-black">
        <div className="relative ">
          <img
            src="https://w0.peakpx.com/wallpaper/346/545/HD-wallpaper-clash-of-clans-town-hall-14-clash-of-clans-games-2021-games-artstation.jpg"
            alt=""
            className="w-full lg:h-[500px] object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/100"></div>
          <div className="absolute top-0 bottom-0 left-[10%] flex justify-center items-center">
            <div className="avatar border-4 border-primary rounded-full">
              <div className="w-16 md:w-32 lg:w-40 rounded-full">
                <img
                  src={
                    profileDetails?.photoURL
                      ? profileDetails.photoURL
                      : defaultAvtar
                  }
                  alt=""
                  onError={(e) => (e.target.src = defaultAvtar)}
                />
              </div>
            </div>
            <div className="ml-5 md:ml-10">
              <h1 className="text-2xl md:text-4xl text-white font-bold shadow-xl ">
                {profileDetails?.name}
              </h1>
              <h4 className="text-xl md:text-2xl text-yellow-400 mt-1 md:mt-2 shadow-xl">
                Advance Player
              </h4>
            </div>
          </div>
          <button
            onClick={sendFriendRequest}
            className="flex justify-center items-center bg-white hover:bg-primary p-2 right-5 absolute top-6 cursor-pointer rounded-md text-black"
          >
            <BsPersonPlusFill className="text-black mr-2 text-xl"></BsPersonPlusFill>{" "}
            <p>Connect</p>
          </button>

          {/*  ================= Open Modal ===================== */}

          {/*  ================= Close Modal ===================== */}
          <div className="flex justify-center w-full m-auto my-8 absolute bottom-0 space-x-10">
            <div>
              <Link>
                {" "}
                <FaFacebookF className="text-4xl bg-primary p-2 text-neutral cursor-pointer">
                  {profileDetails?.facebook}
                </FaFacebookF>{" "}
              </Link>
              <hr className="border-2 border-white mt-2" />
            </div>
            <div>
              <Link>
                <FiInstagram className="text-4xl text-neutral bg-primary p-2 cursor-pointer">
                  {profileDetails?.instagram}
                </FiInstagram>
              </Link>
              <hr className="border-2 border-white mt-2" />
            </div>
            <div>
              <Link>
                {" "}
                <BsYoutube className="text-4xl text-neutral bg-primary p-2 cursor-pointer">
                  {profileDetails?.youTube}
                </BsYoutube>
              </Link>
              <hr className="border-2 border-white mt-2" />
            </div>
            <div>
              <Link target={"_blanck"}>
                <BsTwitter className="text-4xl text-neutral bg-primary p-2 cursor-pointer">
                  {profileDetails?.twitter}
                </BsTwitter>
              </Link>
              <hr className="border-2 border-white mt-2" />
            </div>
          </div>
        </div>

        <p className="w-10/12 md:w-8/12 text-center my-4 mx-auto text-xl font-semibold p-2 ">
          Gaming is really a workout for our mind disguised as fun. Studies have
          shown that playing video games regularly may increase grey matter in
          the brain and boost brain connectivity.(Gray matter is associated with
          muscle control, memories, perception, and spatial navigation.)
        </p>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-prev",
            prevEl: ".swiper-button-next",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="profile-swiper swiper_container w-9/12 md:w-2/4 mx-auto"
        >
          <SwiperSlide>
            <img
              src="https://i.ibb.co/KXXNyM0/download.jpg"
              alt="slide_image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/tC4Ymmj/download-1.jpg"
              alt="slide_image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/rfLgVh5/download-2.jpg"
              alt="slide_image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/jhjp53z/download-4.jpg"
              alt="slide_image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/Mn3MwDk/download-5.jpg"
              alt="slide_image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/0BSktCs/images.jpg" alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/cDtRXRT/images-1.jpg"
              alt="slide_image"
            />
          </SwiperSlide>

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline">
                <AiFillCaretLeft className="text-black"></AiFillCaretLeft>
              </ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline">
                <AiFillCaretRight className="text-black"></AiFillCaretRight>
              </ion-icon>
            </div>
          </div>
        </Swiper>
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default ProfileDetail;
