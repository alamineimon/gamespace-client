import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-hot-toast";
import Loader from "../../Shared/Loader/Loader";
import DeleteModal from "./DeleteModal";
import {
  AiFillPlusCircle,
  AiFillRightCircle,
  AiFillDelete,
} from "react-icons/ai";

import { Link } from "react-router-dom";
import useTitle from "../../../Hooks/useTitle/useTitle";

const AllUsers = () => {
  useTitle('Users')
  const [deleteUser, setDeleteUser] = useState(null);
  const [arrow, setArrow] = useState(true);

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
      const res = await fetch("https://gamespace-server.vercel.app/users", {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      const data = await res.json();
      console.log(data);
      return data;
    },
  });

  // const { data: removedUsers } = useQuery({
  //   queryKey: ["removedUsers"],
  //   queryFn: async () => {
  //     const res = await fetch(
  //       `https://gamespace-server.vercel.app/removedUsers`
  //     );
  //     const data = await res.json();
  //     return data;
  //   },
  // });

  const handleMakeAdmin = (id) => {
    fetch(`https://gamespace-server.vercel.app/users/admin/${id}`, {
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
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
      });

    fetch(`https://gamespace-server.vercel.app/removedUser`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="w-11/12 mx-auto py-10">
      <Link to="/register" className="flex items-center mt-3 mb-5 ml-3">
        <AiFillPlusCircle className="text-green-400 text-3xl mr-2"></AiFillPlusCircle>
        <p className="text-white text-xl">Add User</p>
      </Link>
      <table className="table table-zebra w-full">
        <thead className="text-2xl">
          <tr>
            <th>Admin</th>
            <th>User</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userInformations?.map((userInformation, i) => (
            <tr key={i} className="hover:bg-base-100">
              <th>
                {userInformation.role !== "admin" && (
                  <input
                    onClick={() => handleMakeAdmin(userInformation?._id)}
                    type="checkbox"
                    className="checkbox border border-yellow-300"
                  />
                )}
              </th>
              <td>
                {userInformation?.photoURL ? (
                  <div className="flex items-center">
                    <div className="avatar mr-2">
                      <div className="w-12 rounded-full">
                        <img src={userInformation?.photoURL} alt="" />
                      </div>
                    </div>
                    <div className="text-white">{userInformation?.name}</div>
                  </div>
                ) : (
                  <div className="flex items-center">
                    <div className="avatar placeholder mr-2">
                      <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                        <span className="text-3xl">
                          {userInformation?.name?.slice(0, 1)}
                        </span>
                      </div>
                    </div>
                    <p className="text-white">{userInformation.name}</p>
                  </div>
                )}
              </td>
              <td className="underline text-white hover:text-blue-500">
                <a href={`mailto:${userInformation.email}`}>
                  {userInformation.email}
                </a>
              </td>
              <td className="text-white">
                {userInformation.role === "admin" ? "Admin" : "Buyer"}
              </td>
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
        {/* <label className="swap swap-rotate">
          <input type="checkbox" />
          <AiOutlineDownCircle className="text-white text-3xl mr-2 swap-off fill-current" onClick={() => setArrow(!arrow)}></AiOutlineDownCircle>

          <CgChevronRightO className="text-white text-3xl mr-2 swap-on fill-current"></CgChevronRightO>
        </label> */}
        {/* <button>
          <AiFillRightCircle
            className={`text-3xl mr-2 transition-transform ${
              arrow ? "rotate-90" : ""
            }`}
            onClick={() => setArrow(!arrow)}
          ></AiFillRightCircle>
        </button>
        <p className="text-primary text-xl">Removed User</p> */}
        {/*  */}
      </div>
      {/* {arrow && (
        <table className={`table w-full `}>
          <tbody>
            {removedUsers?.map((removedUser, i) => (
              <tr key={i} className="hover:bg-base-100">
                <th>
                  <p>{i + 1}</p>
                </th>
                <td>
                  {removedUser.photoURL ? (
                    <div className="flex items-center">
                      <div className="avatar mr-2">
                        <div className="w-12 rounded-full">
                          <img src={removedUser.photoURL} alt="" />
                        </div>
                      </div>
                      <div className="text-white">{removedUser.name}</div>
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <div className="avatar placeholder mr-2">
                        <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                          <span className="text-3xl">
                            {removedUser.name.slice(0, 1)}
                          </span>
                        </div>
                      </div>
                      <p className="text-white">{removedUser.name}</p>
                    </div>
                  )}
                </td>
                <td className="underline text-white">
                  <a
                    className="hover:text-blue-400"
                    href={`mailto:${removedUser.email}`}
                  >
                    {removedUser.email}
                  </a>
                </td>
                <td className="text-white">
                  {removedUser.role === "admin" ? "Admin" : "Buyer"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )} */}
    </div>
  );
};

export default AllUsers;
