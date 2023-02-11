import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiFillDelete } from "react-icons/ai";
import Loader from "../../Shared/Loader/Loader";
import AllUsersModal from "./AllUsersModal";

const AllUsers = () => {
  const [deleteUser, setDeleteUser] = useState(null)
  const closeModal = () => {
    setDeleteUser(null);
  }
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
      fetch(`http://localhost:9000/admin/${id}`, {
        method: "PUT"
      })
      .then(res => res.json())
      .then(data => {
        if(data.modifiedCount > 0){
          toast.success('Make admin successful');
          refetch();
        }
      })
  }

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
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Num</th>
            <th>Admin</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {userInformations.map((userInformation, i) => (
            <tr key={i}>
              <th>{i + 1}</th>
              <td>
                <label>
                {userInformation.role !== 'admin' && <input onClick={() => handleMakeAdmin(userInformation._id)} type="checkbox" className="checkbox" />}            
                </label>
              </td>
              <td>
                <div className="flex items-center space-x-3">
                  {userInformation.image ? (
                    <div className="avatar">
                      <div className="mask mask-squircle w-10 h-10">
                        <img
                          src="/tailwind-css-component-profile-2@56w.png"
                          alt=""
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="avatar placeholder">
                      <div className="bg-neutral-focus text-neutral-content rounded-full w-10 h-10">
                        <span className="text-xl">
                          {userInformation.name.slice(0, 1)}
                        </span>
                      </div>
                    </div>
                  )}
                  <div>
                    <div className="font-bold">{userInformation.name}</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>{userInformation.email}</td>
              <td>Buyer</td>
              <th>
                {/* The button to open modal */}
                <label
                  htmlFor="delete-user"
                  className="btn btn-lg btn-ghost"
                  onClick={() => setDeleteUser(userInformation)}
                >
                  <AiFillDelete></AiFillDelete>
                </label>
                {
                  deleteUser && <AllUsersModal
                  message={`Are you sure you want to delete the user???`}
                  successAction={handleDelete}
                  data={deleteUser}
                  closeModal={closeModal}
                  userInformation={userInformation}
                ></AllUsersModal>
                }
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
