import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FaPlus } from "react-icons/fa";
import Title2 from "../../Shared/DashTitle/Title2";
import Loader from "../../Shared/Loader/Loader";

const AddHtmlGames = () => {
  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("http://localhost:9000/categories");
      const data = await res.json();
      return data;
    },
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:9000/addHtmlGame", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((resData) => {
        if (resData.acknowledged) {
          toast.success("Data submited");
          reset();
        }
      });
  };
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <Title2 color={"Games"}>Add</Title2>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border border-gray-200 p-10 rounded bg-white/10"
        >
          <div className="grid xl:grid-cols-2 xl:gap-5">
            <div>
              <label className="font-semibold">Game Title</label>
              <br />
              <input
                type="text"
                {...register("gameName")}
                className="border border-gray-200 outline-none focus:border-primary bg-white/10 rounded w-full mt-3 mb-5 p-3"
              />
            </div>
            <div>
              <label className="font-semibold">Author name</label>
              <br />
              <input
                type="text"
                {...register("authorName")}
                className="border border-gray-200 outline-none focus:border-primary bg-white/10 rounded w-full mt-3 mb-5 p-3"
              />
            </div>
            <div>
              <label className="font-semibold">gameLink</label>
              <br />
              <input
                type="url"
                {...register("gameLink")}
                className="border border-gray-200 outline-none focus:border-primary bg-white/10 rounded w-full mt-3 mb-5 p-3"
              />
            </div>
            <div>
              <label className="font-semibold"> Category</label>
              <br />
              <select
                {...register("category", { required: true })}
                required
                className="select w-full border border-gray-200 outline-none focus:outline-none bg-white/10 focus:border-primary rounded  mt-3 mb-5 p-3 "
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
          <label className="font-semibold">Game Thumbnail url</label>
          <input
            type="url"
            {...register("thumbnail")}
            className="border border-gray-200 outline-none focus:border-primary bg-white/10 rounded w-full mt-3 mb-5 p-3"
          />
          <label className="font-semibold">Game Description</label>
          <br />
          <textarea
            name="description"
            rows="4"
            {...register("description")}
            className="border border-gray-200 outline-none focus:border-primary bg-white/10 rounded w-full mt-3 mb-5 p-3"
          ></textarea>
          <br />
          <button
            type="submit"
            className="flex justify-center items-center py-2 px-3 border capitalize border-theme bg-theme text-white rounded hover:scale-95 "
          >
            <FaPlus className="mr-3"></FaPlus> Add Game
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddHtmlGames;
