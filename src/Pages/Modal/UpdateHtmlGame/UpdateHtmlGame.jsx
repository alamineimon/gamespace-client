import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { RxUpdate } from "react-icons/rx";
const UpdateHtmlGame = ({
  currentGame,
  categories,
  setCurrentGame,
  refetch,
}) => {
  const {
    _id,
    gameName,
    authorName,
    thumbnail,
    gameLink,
    description,
    category,
  } = currentGame;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
 
  const onSubmit = (data) => {
    fetch(`http://localhost:9000/updateHtmlGame/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Updated");
          refetch();
          setCurrentGame("");
        }
      });
  };
  return (
    <>
      <input type="checkbox" id="updateGameModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box max-w-max  relative  border border-primary shadow-2xl shadow-primary/20">
          <label
            onClick={() => setCurrentGame("")}
            htmlFor="updateGameModal"
            className="btn btn-sm btn-circle absolute right-2 top-2 z-10"
          >
            ✕
          </label>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" p-10 rounded  backdrop-blur-lg w-full "
          >
            <div className="grid xl:grid-cols-2 xl:gap-5">
              <div>
                <label className="font-semibold capitalize">Game Title</label>
                <br />
                <input
                  type="text"
                  {...register("gameName")}
                  className=" outline-none focus:border-primary bg-white/10 rounded w-full mt-3 mb-5 p-3 border border-transparent"
                  defaultValue={gameName}
                />
              </div>
              <div>
                <label className="font-semibold capitalize">Author name</label>
                <br />
                <input
                  type="text"
                  {...register("authorName")}
                  className=" outline-none focus:border-primary bg-white/10 rounded w-full mt-3 mb-5 p-3 border border-transparent"
                  defaultValue={authorName}
                />
              </div>
              <div>
                <label className="font-semibold capitalize">gameLink</label>
                <br />
                <input
                  type="url"
                  {...register("gameLink")}
                  className=" outline-none focus:border-primary bg-white/10 rounded w-full mt-3 mb-5 p-3 border border-transparent"
                  defaultValue={gameLink}
                />
              </div>
              <div>
                <label className="font-semibold capitalize"> Category</label>
                <br />
                <select
                  {...register("category", { required: true })}
                  defaultValue={category}
                  required
                  className="select w-full  outline-none focus:outline-none bg-white/10 focus:border-primary rounded  mt-3 mb-5 p-3 "
                >
                  <option value="">Select Category</option>
                  {categories.map((cat, i) => (
                    <option className="bg-base-100" key={i} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                {errors.category && (
                  <span>
                    <small>This is required</small>
                  </span>
                )}
              </div>
            </div>
            <br />
            <label className="font-semibold capitalize">
              Game Thumbnail url
            </label>
            <input
              type="url"
              {...register("thumbnail")}
              className=" outline-none focus:border-primary bg-white/10 rounded w-full mt-3 mb-5 p-3 border border-transparent"
              defaultValue={thumbnail}
            />
            <label className="font-semibold capitalize">Game Description</label>
            <br />
            <textarea
              name="description"
              rows="4"
              {...register("description")}
              className=" outline-none focus:border-primary bg-white/10 rounded w-full mt-3 mb-5 p-3 border border-transparent"
              defaultValue={description}
            ></textarea>
            <br />
            <button
              type="submit"
              className="flex justify-center items-center py-2 px-3  capitalize hover:border-primary hover:text-primary bg-white/10 text-white rounded hover:scale-95 mx-auto group "
            >
              <RxUpdate className="mr-3 group-hover:animate-wiggle  text-white group-hover:text-primary"></RxUpdate>
              Update Info
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateHtmlGame;
