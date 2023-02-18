import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { BsTwitter, BsYoutube } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { AiFillCaretLeft, AiFillCamera } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import "./UserProfile.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import Loader from "../Shared/Loader/Loader";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import defaultAvtar from "../../assets/images/gamingAvatar.webp";
import { AuthContext } from "../../context/AuthProvider";

const UserProfile = () => {
  const { user, loading } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  // const [current, setCurrent] = useState(false);
  const imageHostingKey = "f71054c9a0ba3277364d756c3417b18e";
  const navigate = useNavigate();

  const {
    data: profiles,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["profile", "user"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:9000/profileUpdate/${user?.email}`);      
      const data = await res.json();
      return data;
    },
  });

  const handelUpdateUser = (data) => {
    const image = data.photoURL[0];
    const formData = new FormData();
    formData.append("image", image);
    fetch(`https://api.imgbb.com/1/upload?key=${imageHostingKey}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgbb) => {
        if (imgbb.success) {
          const profile = {
            name: profiles.name,
            email: profiles.email,
            bio: data.bio,
            facebook: data.facebook,
            instagram: data.instagram,
            youTube: data.youTube,
            twitter: data.twitter,
            photoURL: imgbb.data.url,
          };
         
          fetch(
            `http://localhost:9000/profileUpdate/${profiles?._id}`,
            {
              method: "PATCH",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(profile),
            }
          )
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              if (result.acknowledged) {
                navigate("/userProfile");
                // setCurrent(false)
                refetch();
                reset();
                toast.success("Updated Seccess", { autoClose: "1000" });
              }
            });
        }
      });
  };

  if (isLoading || loading) {
   return <Loader />;
  }

  return (
    <div className="bg-black">
      <div className="relative">
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
                src={profiles?.photoURL ? profiles.photoURL : defaultAvtar}
                alt=""
                onError={(e) => (e.target.src = defaultAvtar)}
              />
            </div>
          </div>
          <div className="ml-5 md:ml-10">
            <h1 className="text-2xl md:text-4xl text-white font-bold shadow-xl ">
              {profiles?.name}
            </h1>
            <h4 className="text-xl md:text-2xl text-yellow-400 mt-1 md:mt-2 shadow-xl">
              Advance Player
            </h4>
          </div>
        </div>
        <label
          htmlFor="my-modal-4"
          className="flex justify-center items-center bg-white1 p-2 right-5 w-24 absolute top-6 cursor-pointer rounded-md text-black"
        >
          <BiEdit className="text-black mr-2 text-xl"></BiEdit> <p>Edit</p>
        </label>

        {/*  ================= Open Modal ===================== */}
        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <label htmlFor="my-modal-4" className="modal cursor-pointer ">
          <label
            className="modal-box relative rounded-xl w-10/12 md:w-8/12 "
            htmlFor=""
          >
            <form onSubmit={handleSubmit(handelUpdateUser)}>
              <div className="flex items-center justify-center mb-5">
                {profiles?.photoURL ? (
                  <>
                    <div className="flex mr-6 space-between relative">
                      <img
                        className="rounded-full w-16 h-16 md:h-28 md:w-28"
                        src={profiles?.photoURL}
                        alt=""
                      />
                      <label
                        htmlFor="image"
                        className="block mb-2 text-sm absolute bottom-1 right-0 cursor-pointer"
                      >
                        <AiFillCamera className="text-3xl bg-gray text-black rounded-full p-1"></AiFillCamera>
                      </label>
                    </div>
                    <div>
                      <input
                        type="file"
                        {...register("photoURL")}
                        className="hidden"
                        id="image"
                        accept="image/*"
                      />
                      {errors.photoURL && (
                        <p className="text-orange-400 mt-2">
                          {errors.photoURL?.message}
                        </p>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex mr-6 space-between relative">
                      <img
                        className="rounded-full h-28 w-28"
                        src="https://i.ibb.co/bRZmT6x/blank-profile-picture-973460-340.webp"
                        alt=""
                      />
                      <label
                        htmlFor="image"
                        className="block mb-2 text-sm absolute bottom-1 right-0 cursor-pointer"
                      >
                        <AiFillCamera className="text-3xl bg-gray text-black rounded-full p-1"></AiFillCamera>
                      </label>
                    </div>
                    <div>
                      <input
                        type="file"
                        {...register("photoURL", {
                          required: "photoURL is required",
                        })}
                        className="hidden"
                        id="image"
                        accept="image/*"
                      />
                      {errors.photoURL && (
                        <p className="text-orange-400 mt-2">
                          {errors.photoURL?.message}
                        </p>
                      )}
                    </div>
                  </>
                )}
              </div>
              <div className="md:flex gap-5 mt-5">
                <div className="form-control w-full border bordered-primary">
                  <input
                    type="name"
                    name="name"
                    {...register("name")}
                    placeholder="User Name"
                    className="input input-primary border bordered-primary  rounded-none w-full text-gray-400 px-5"
                    disabled
                    defaultValue={profiles?.name}
                  />
                  {errors.name && (
                    <p className="text-orange-400 mt-2">
                      {errors.name?.message}
                    </p>
                  )}
                </div>
                <div className="form-control w-full mt-8 md:mt-0 border bordered-primary">
                  <input
                    type="email"
                    name="email"
                    {...register("email")}
                    placeholder="Email or Phone"
                    className="input input-primary rounded-none border bordered-primary w-full text-gray-400 px-5"
                    disabled
                    defaultValue={profiles?.email}
                  />
                  {errors.email && (
                    <p className="text-orange-400 mt-2">
                      {errors.email?.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="md:flex gap-5 mt-5">
                <div className="form-control w-full">
                  <input
                    type="text"
                    name="facebook"
                    {...register("facebook")}
                    placeholder="facebook URL"
                    className="input input-primary rounded-none border bordered-primary w-full text-gray-400 px-5"
                    defaultValue={profiles?.facebook}
                  />
                </div>
                <div className="form-control w-full mt-8 md:mt-0 ">
                  <input
                    type="text"
                    name="instagram"
                    {...register("instagram")}
                    placeholder="instagram URL"
                    className="input input-primary rounded-none border bordered-primary w-full text-gray-400 px-5"
                    defaultValue={profiles?.instagram}
                  />
                </div>
              </div>
              <div className="md:flex gap-5 mt-5">
                <div className="form-control w-full  ">
                  <input
                    type="text"
                    name="youTube"
                    {...register("youTube")}
                    placeholder="youTube URL"
                    className="input input-primary rounded-none border bordered-primary w-full text-gray-400 px-5"
                    defaultValue={profiles?.youTube}
                  />
                </div>
                <div className="form-control w-full mt-8 md:mt-0 ">
                  <input
                    type="text"
                    name="twitter"
                    {...register("twitter")}
                    placeholder="twitter URL"
                    className="input input-primary rounded-none border bordered-primary w-full text-gray-400 px-5"
                    defaultValue={profiles?.twitter}
                  />
                </div>
              </div>
              <div className="form-control w-full  mt-8">
                <textarea
                  type="text"
                  name="bio"
                  rows="3"
                  {...register("bio")}
                  placeholder="Message"
                  className=" input-primary rounded-none bg-transparent border bordered-primary w-full text-gray-400 p-5"
                  defaultValue={profiles?.bio}
                ></textarea>
              </div>
              <button className="hover:bg-yellow-500 rounded border-2 mt-5 border-yellow-500 text-yellow-500 hover:text-white text-lg uppercase font-semibold w-full py-2 cursor-pointer">
                Update
              </button>
              <div></div>
            </form>
          </label>
        </label>
        {/*  ================= Close Modal ===================== */}
        <div className="flex justify-center w-full m-auto my-8 absolute bottom-0 space-x-10">
          <div>
            <Link>
              {" "}
              <FaFacebookF className="text-4xl bg-primary p-2 text-neutral cursor-pointer">
                {profiles?.facebook}
              </FaFacebookF>{" "}
            </Link>
            <hr className="border-2 border-white mt-2" />
          </div>
          <div>
            <Link>
              <FiInstagram className="text-4xl text-neutral bg-primary p-2 cursor-pointer">
                {profiles?.instagram}
              </FiInstagram>
            </Link>
            <hr className="border-2 border-white mt-2" />
          </div>
          <div>
            <Link>
              {" "}
              <BsYoutube className="text-4xl text-neutral bg-primary p-2 cursor-pointer">
                {profiles?.youTube}
              </BsYoutube>
            </Link>
            <hr className="border-2 border-white mt-2" />
          </div>
          <div>
            <Link target={"_blanck"}>
              <BsTwitter className="text-4xl text-neutral bg-primary p-2 cursor-pointer">
                {profiles?.twitter}
              </BsTwitter>
            </Link>
            <hr className="border-2 border-white mt-2" />
          </div>
        </div>
      </div>

      <p className="w-10/12 md:w-8/12 text-center my-4 mx-auto text-xl font-semibold p-2 ">
        Gaming is really a workout for our mind disguised as fun. Studies have
        shown that playing video games regularly may increase grey matter in the
        brain and boost brain connectivity.(Gray matter is associated with
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
        className="swiper_container w-2/4 mx-auto"
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/KXXNyM0/download.jpg" alt="slide_image" />
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
          <img src="https://i.ibb.co/cDtRXRT/images-1.jpg" alt="slide_image" />
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
  );
};

export default UserProfile;
