import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { BsYoutube } from "react-icons/bs";
import { BsTwitch } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { AiOutlineMail, AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import './UserProfile.css'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

const UserProfile = () => {
  return (
    <div className="bg-black">
      {/* image overlay section */}
      <div className="relative">
        <img
          src="https://w0.peakpx.com/wallpaper/346/545/HD-wallpaper-clash-of-clans-town-hall-14-clash-of-clans-games-2021-games-artstation.jpg"
          alt=""
          className="w-full lg:h-[700px] object-cover object-top"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-black/10 to-black/100"></div>
        <span className="flex justify-center items-center bg-white1 p-2 right-5 w-24 absolute top-6 cursor-pointer rounded-md text-black">
          <BiEdit className="text-black mr-2 text-xl"></BiEdit>{" "}
          <p>Edit</p>
        </span>
        <div className="flex justify-between w-full lg:w-3/12 mx-auto my-8 absolute bottom-0 left-[60px] lg:left-[700px]">
            <div>
            <FaFacebookF className="text-4xl bg-primary p-2 text-neutral cursor-pointer"></FaFacebookF>
            <hr className="border-2 border-white mt-2" />
            </div>
            <div>
            <FiInstagram className="text-4xl text-neutral bg-primary p-2 cursor-pointer"></FiInstagram>
            <hr className="border-2 border-white mt-2" />
            </div>
            <div>
            <BsYoutube className="text-4xl text-neutral bg-primary p-2 cursor-pointer"></BsYoutube>
            <hr className="border-2 border-white mt-2" />
            </div>
            <div>
            <BsTwitch className="text-4xl text-neutral bg-primary p-2 cursor-pointer"></BsTwitch>
            <hr className="border-2 border-white mt-2" />
            </div>
            <div>
            <AiOutlineMail className="text-4xl text-neutral bg-primary p-2 cursor-pointer"></AiOutlineMail>
            <hr className="border-2 border-white mt-2" />
            </div>
        </div>
      </div>
      <div className="absolute bottom-80 lg:left-40 flex flex-col lg:flex-row justify-center items-center">
        <div className="avatar">
          <div className="w-40 rounded-full">
            <img
              src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1060&t=st=1675753022~exp=1675753622~hmac=9e9eec61e681a503d976bf360dd33682435fddb5b79907411a528cfca139ffa3"
              alt=""
            />
          </div>
        </div>
        <div className="ml-14">
          <h1 className="text-3xl text-white font-bold shadow-xl ml-3">
            Mohammad Rafi
          </h1>
          <h4 className="text-2xl text-yellow-400 ml-3 mt-2 shadow-xl">
            Advance Player
          </h4>
        </div>
      </div>
      <p className="w-1/2 text-center my-4 mx-auto text-xl font-semibold p-2">Gaming is really a workout for our mind disguised as fun. Studies have shown that playing video games regularly may increase grey matter in the brain and boost brain connectivity.(Gray matter is associated with muscle control, memories, perception, and spatial navigation.)</p>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-prev',
          prevEl: '.swiper-button-next',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
      className="swiper_container my-8 w-2/4 mx-auto"
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/KXXNyM0/download.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/tC4Ymmj/download-1.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/rfLgVh5/download-2.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/jhjp53z/download-4.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/Mn3MwDk/download-5.jpg" alt="slide_image" />
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
