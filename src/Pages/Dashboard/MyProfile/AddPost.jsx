import moment from "moment/moment";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { CgClose } from "react-icons/cg";
import { BiImageAdd } from "react-icons/bi";
import defaultAvtar from "../../../assets/images/gamingAvatar.webp";
const AddPost = ({ userinfo, postRefetch }) => {
  const { name, photoURL, email, _id } = userinfo;

  const [file, setFile] = useState([]);
  const [err, setErr] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  let imghostKey = "cb36cb062e716ae5044f1c217b3ebec4";
  const handleChange = (e) => {
    if (e.target.files[0].size > 204800) {
      fileInputRef.current.value = "";
      return toast.error("Image size must be under 200Kb");
    }
    setImgUrl(URL.createObjectURL(e.target.files[0]));
    setErr("");
    setFile([...file, e.target.files[0]]);
  };
  const deleteImg = () => {
    fileInputRef.current.value = "";
    setFile("");
    setImgUrl("");
  };
  const postSubmit = (data) => {
    if (file.length === 0) {
      const post = {
        postText: data.postText,
        postTime: moment().format("Do MMM YYYY, h:mm a"),
        authorName: name,
        authorImage: photoURL,
        authorEmail: email,
        auhorId: _id,
        privacy: data.privacy,
      };
      addToDb(post);
      console.log("no picture");
      return;
    }
    if (file.length) {
      const image = file[0];
      const formdata = new FormData();
      formdata.append("image", image);
      const url = `https://api.imgbb.com/1/upload?key=${imghostKey}`;
      fetch(url, {
        method: "POST",
        body: formdata,
      })
        .then((res) => res.json())
        .then((bbdata) => {
          const post = {
            imageUrl: bbdata.data.display_url,
            postText: data.postText,
            postTime: moment().format("Do MMM YYYY, h:mm a"),
            authorName: name,
            authorImage: photoURL,
            authorEmail: email,
            auhorId: _id,
            privacy: data.privacy,
          };
          addToDb(post);
        });
    }
  };
  const addToDb = (post) => {
    fetch("http://localhost:9000/post", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((resdata) => {
        if (resdata?.acknowledged) {
          deleteImg();
          reset();
          postRefetch();
          return toast.success("Post added");
        }
        toast.error("Failed to post");
      });
  };
  const fileInputRef = useRef(null);
  const handleButtonClick = (e) => {
    fileInputRef.current.click();
  };
  return (
    <div className="bg-dashboardCards py-5 rounded-2xl font-rajdhani max-w-xl mx-auto ">
      <form onSubmit={handleSubmit(postSubmit)}>
        <div className="flex justify-between border-b pb-4 px-5 border-white/20">
          <div className="flex space-x-2 items-center">
            <div className="w-16 bg-white/10 hexagon p-1">
              <img
                src={userinfo?.photoURL ? userinfo.photoURL : defaultAvtar}
                className="hexagon w-full"
                alt=""
              />
            </div>
            <div>
              <h3 className="font-semibold text-white">{name}</h3>
              <p className="text-sm">Status updated</p>
            </div>
          </div>
          {/* select input  */}
          <div className="">
            <label className="label -mb-1">
              <span className="label-text text-xs ">Privacy</span>
            </label>
            <select
              {...register("privacy", { required: true })}
              className="bg-transparent outline-none border border-white/20 px-2 py-1 rounded text-xs"
            >
              <option className="bg-dashboardCards" value="public">
                Public
              </option>
              <option className="bg-dashboardCards" value="friends">
                Firends Only
              </option>
            </select>
          </div>
        </div>
        <div className="text-right">
          <textarea
            placeholder={`Hi ${name}! What's on your mind? `}
            rows="1"
            className="w-full bg-transparent p-5 border-b border-white/20"
            {...register("postText", { required: true })}
          ></textarea>
          {errors.postText && (
            <p className="text-red-400 text-left ml-5">
              <small>field is required</small>
            </p>
          )}
          {imgUrl && (
            <div className="flex items-start justify-start ml-5 mb-5">
              <img src={imgUrl} alt="" className="w-40" />
              <button type="button" onClick={deleteImg}>
                <CgClose />
              </button>
            </div>
          )}
          <div className="flex justify-between ml-5">
            <div className="w-auto relative flex justify-center items-center ">
              <button
                type="button"
                onClick={handleButtonClick}
                className=" text-white border-0 flex"
                title="Add Image"
              >
                <BiImageAdd className="text-lg" />
              </button>
              {err && (
                <p className="text-red-500 ml-5">
                  <small>{err}</small>
                </p>
              )}
              <input
                type="file"
                id="imageUrl"
                className="hidden"
                ref={fileInputRef}
                onChange={handleChange}
              />
            </div>
            <div>
              <button className="btn btn-sm bg-[#275077] rounded text-white border-0 inline-block mr-5">
                Post
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddPost;
