import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiFillDelete } from "react-icons/ai";
import Loader from "../../Shared/Loader/Loader";
import DeleteModal from "./DeleteModal";
import { AiFillPlusCircle, AiOutlineDownCircle } from 'react-icons/ai';
import { Link } from "react-router-dom";

const AllUsers = () => {
  const [deleteUser, setDeleteUser] = useState(null);
  const closeModal = () => {
    setDeleteUser(null);
  };
  const {
    data: userInformations,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://gamespace-server.vercel.app/users");
      const data = await res.json();
      return data;
    },
  });

  const handleMakeAdmin = (id) => {
    fetch(`http://localhost:9000/users/admin/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Make admin successful");
          refetch();
        }
      });
  };

  const handleDelete = (userInfo) => {
    fetch(`https://gamespace-server.vercel.app/delete/${userInfo._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
      });
  };
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="w-full">
      <Link to='/register' className="flex items-center mt-3 mb-5 ml-3">
        <AiFillPlusCircle className="text-green-400 text-3xl mr-2"></AiFillPlusCircle>
        <p className="text-white text-xl">Add User</p>
      </Link>
      <table className="table w-full">
        <thead className="text-2xl">
          <tr className="bg-white">
            <th>Admin</th>
            <th>User</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userInformations.map((userInformation, i) => (
            <tr key={i} className="hover:bg-base-100">
              <th>
                <label>
                  {userInformation.role !== "admin" && (
                    <input
                      onClick={() => handleMakeAdmin(userInformation._id)}
                      type="checkbox"
                      className="checkbox border border-yellow-300"
                    />
                  )}
                </label>
              </th>
              <td>
                {userInformation.photoURL ? (
                  <div className="flex items-center">
                    <div className="avatar mr-2">
                    <div className="w-12 rounded-full">
                      <img src={userInformation.photoURL} alt="" />
                    </div>
                  </div>
                    <div className="text-white">{userInformation.name}</div>
                  </div>
                  
                ) : (
                  <div className="flex items-center">
                    <div className="avatar placeholder mr-2">
                    <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                      <span className="text-3xl">
                        {userInformation.name.slice(0, 1)}
                      </span>
                    </div>
                  </div>
                  <p className="text-white">{userInformation.name}</p>
                  </div>
                )}
              </td>
              <td className="underline text-white hover:text-blue-500"><a href={`mailto:${userInformation.email}`}>{userInformation.email}</a></td>
              <td className="text-white">{userInformation.role==="admin" ? "Admin" : "Buyer"}</td>
              <th>
                {/* The button to open modal */}
                <label
                  htmlFor="delete-user"
                  className="btn btn-lg btn-ghost"
                  onClick={() => setDeleteUser(userInformation)}
                >
                  <AiFillDelete></AiFillDelete>
                </label>
                {deleteUser && (
                  <DeleteModal
                    message={`Are you sure you want to delete the user???`}
                    successAction={handleDelete}
                    data={deleteUser}
                    closeModal={closeModal}
                    userInformation={userInformation}
                  ></DeleteModal>
                )}
              </th>
            </tr>
          ))}
        </tbody>
      </table>
      <hr className="mb-4 mt-4" />
      <div className="flex items-center ml-3">
        <AiOutlineDownCircle className="text-white text-3xl"></AiOutlineDownCircle>
        <p className="text-primary text-xl">Removed User</p>
      </div>
      
    </div>
  );
};

export default AllUsers;
