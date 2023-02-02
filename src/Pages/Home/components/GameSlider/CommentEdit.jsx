import React, { useContext } from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../../context/AuthProvider';

const CommentEdit = ({ commentEdit, setEditComments }) => {
    const { user } = useContext(AuthContext);
    const [editComment, setEditComment] = useState(commentEdit);

    const handelCommentUpdate = () => {
        fetch(`https://gamespace-server.vercel.app/comment/${commentEdit?._id}`, {
            method: 'PATCH',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(editComment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                 if(data.acknowledged) {
                    setEditComments(null);
                    toast.success('Updated Seccess', { autoClose: "1000" })
                }
            })

    }

    const handlerInputChange = e => {
        e.preventDefault();
        const value = e.target.value;
        const field = e.target.name;
        const newComment = { ...editComment };
        newComment[field] = value;
        setEditComment(newComment);
        console.log(newComment);

    }
    return (
        <div className=''>
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative rounded-lg" htmlFor="">
                    <label htmlFor="my-modal-4" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handelCommentUpdate}>
                        <div className=" flex gap-3 items-center mt-8">
                            <textarea onChange={handlerInputChange} cols="30" rows="6" name='comment' defaultValue={commentEdit?.comment} type="textarea" className=" w-full text-slate-200 bg-slate-600  px-3 pt-3 rounded-lg " />
                        </div>
                        <input className='bg-yellow-500 rounded border-2 mt-4 border-yellow-500 text-white text-lg font-semibold px-2' value="Submit" type="submit" />
                    </form>
                </label>
            </label>
        </div>
    );
};

export default CommentEdit;