import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AiFillCamera } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const EditProfileModal = ({ userRefetch, userinfo, setEditProfile }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const imageHostingKey = "f71054c9a0ba3277364d756c3417b18e";
  const navigate = useNavigate();
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
            name: userinfo.name,
            email: userinfo.email,
            bio: data.bio,
            facebook: data.facebook,
            instagram: data.instagram,
            youTube: data.youTube,
            twitter: data.twitter,
            photoURL: imgbb.data.url,
          };

          fetch(
            `https://gamespace-server.vercel.app/profileUpdate/${userinfo?._id}`,
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
                navigate("/dashboard/profile");
                setEditProfile(false);
                userRefetch();

                toast.success("Updated Seccess", { autoClose: "1000" });
              }
            });
        }
      });
  };
  return (
    <>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="editProfileModal" className="modal-toggle" />
      <label htmlFor="editProfileModal" className="modal cursor-pointer">
        <label className="modal-box relative rounded" htmlFor="">
          <form onSubmit={handleSubmit(handelUpdateUser)}>
            <div className="flex items-center justify-center mb-5">
              {userinfo?.photoURL ? (
                <>
                  <div className="flex mr-6 space-between relative">
                    <img
                      className="rounded-full w-16 h-16 md:h-28 md:w-28"
                      src={userinfo?.photoURL}
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
                  defaultValue={userinfo?.name}
                />
                {errors.name && (
                  <p className="text-orange-400 mt-2">{errors.name?.message}</p>
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
                  defaultValue={userinfo?.email}
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
                  defaultValue={userinfo?.facebook}
                />
              </div>
              <div className="form-control w-full mt-8 md:mt-0 ">
                <input
                  type="text"
                  name="instagram"
                  {...register("instagram")}
                  placeholder="instagram URL"
                  className="input input-primary rounded-none border bordered-primary w-full text-gray-400 px-5"
                  defaultValue={userinfo?.instagram}
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
                  defaultValue={userinfo?.youTube}
                />
              </div>
              <div className="form-control w-full mt-8 md:mt-0 ">
                <input
                  type="text"
                  name="twitter"
                  {...register("twitter")}
                  placeholder="twitter URL"
                  className="input input-primary rounded-none border bordered-primary w-full text-gray-400 px-5"
                  defaultValue={userinfo?.twitter}
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
                defaultValue={userinfo?.bio}
              ></textarea>
            </div>
            <button className="hover:bg-yellow-500 rounded border-2 mt-5 border-yellow-500 text-yellow-500 hover:text-secondary text-lg uppercase font-semibold w-full py-2 cursor-pointer">
              Update
            </button>
            <div></div>
          </form>
        </label>
      </label>
    </>
  );
};

export default EditProfileModal;
