import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../../context/AuthProvider";
import CommentEdit from "./CommentEdit";
import { TiDeleteOutline } from "react-icons/ti";
import { CiEdit } from "react-icons/ci";

const GameComment = ({ refetch, rightSideGame, detailsId }) => {
  const { user } = useContext(AuthContext);
  const [comments, setComments] = useState()
  console.log(rightSideGame)

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [editComments, setEditComments] = useState();

  const handelComment = (data) => {
    const comment = {
      comment: data.comment,
      gameDetailsId:detailsId,
      photoURL: user.photoURL,
      displayName: user.displayName,
    };
    fetch(`https://gamespace-server.vercel.app/comment`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(comment),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged) {
          refetch();
          reset();
          toast.success("Comment Added Successfully");
        } else {
          toast.error(result.message);
        }
      });
  };

  useEffect(() => {
    fetch("https://gamespace-server.vercel.app/comment")
    .then(res => res.json())
    .then(data => {
          const result = data.filter(gameId => gameId.gameDetailsId === detailsId || rightSideGame);
          setComments(result)
          refetch();

    })
  }, [])

  console.log(comments)

  const handlerDeleteComment = (id) => {
    const proceed = window.confirm(
      "Are you sure , you went to cancel this .Comment"
    );
    if (proceed) {
      fetch(`https://gamespace-server.vercel.app/comment/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            refetch();
            toast.success("Comment Deleted Successfully");
          }
        });
    }
  };



  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(handelComment)}>
          <div className=" flex justify-center gap-3">
            <div className="w-16 ">
              <img
                src={user?.photoURL}
                className="w-full rounded-full border-4 border-orange-500"
                alt=""
              />
            </div>
            <textarea
              type="textarea"
              className="input  w-full text-slate-200 bg-slate-600 px-3 pt-3 rounded-lg "
              name="comment"
              {...register("comment", {
                required: "comment Address is required",
              })}
              placeholder="Comment add"
            />
            {errors.comment && (
              <p className="text-orange-400">{errors.comment?.message}</p>
            )}
            <input
              className="bg-yellow-500 rounded border-2 border-yellow-500 text-white text-lg font-semibold px-2 cursor-pointer"
              value="Submit"
              type="submit"
            />
          </div>
        </form>
      </div>
      <div className="mt-5 space-y-4">
        {comments?.map((comment , i) => (
          <div className=" space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <div className="w-8 h-8 ">
                <img
                  src={comment?.photoURL}
                  className="w-full rounded-full  border-1 border-orange-500"
                  alt=""
                />
              </div>
              <h6 className="text-sm font-semibold">{comment?.displayName}</h6>
            </div>
            <div className="flex  justify-between gap-4 bg-slate-800 p-2 rounded-md">
              <div>
                <p className="text-justify text-slate-300">
                  {comment?.comment}
                </p>
              </div>
              <div className="flex gap-3">
                <div>
                  <label
                    onClick={() => setEditComments(comment)}
                    htmlFor="my-modal-4"
                    className=" text-xl cursor-pointer"
                  >
                    {" "}
                    <CiEdit></CiEdit>
                  </label>
                </div>
                <div>
                  <TiDeleteOutline
                    className=" text-xl cursor-pointer"
                    onClick={() => handlerDeleteComment(comment._id)}
                  ></TiDeleteOutline>
                </div>
              </div>
            </div>
            <hr className="border-slate-500" />
          </div>
        ))}
      </div>
      {editComments && (
        <CommentEdit
          // refetch={refetch}
          editComments={editComments}
          setEditComments={setEditComments}
        ></CommentEdit>
      )}
    </div>
  );
};

export default GameComment;
