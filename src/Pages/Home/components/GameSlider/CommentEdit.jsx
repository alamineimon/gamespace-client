import React from "react";
import { toast } from "react-hot-toast";

const CommentEdit = ({ editComments, setEditComments, refetch }) => {
  const handelCommentUpdate = (event) => {
    event.preventDefault();
    fetch(`http://localhost:9000/comment/${editComments?._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem('accessToken')}`
        
      },
      body: JSON.stringify(editComments),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setEditComments("");
          refetch();
          toast.success("Updated Seccess", { autoClose: "1000" });
        }
      });
  };

  const handlerInputChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    const field = event.target.name;
    const newComment = { ...editComments };
    newComment[field] = value;
    setEditComments(newComment);
    console.log(newComment);
  };
  return (
    <div className="">
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative rounded-lg" htmlFor="">
          <label
            onClick={() => setEditComments("")}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form onSubmit={handelCommentUpdate}>
            <div className=" flex gap-3 items-center mt-8">
              <textarea
                onChange={handlerInputChange}
                cols="30"
                rows="6"
                name="comment"
                defaultValue={editComments?.comment}
                type="textarea"
                className=" w-full text-slate-200 bg-slate-600  px-3 pt-3 rounded-lg "
              />
            </div>
            <input
              className="bg-yellow-500 rounded border-2 mt-4 border-yellow-500 text-white text-lg font-semibold px-2"
              value="Submit"
              type="submit"
            />
          </form>
        </label>
      </label>
    </div>
  );
};

export default CommentEdit;
