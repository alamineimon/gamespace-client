import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { AiFillDelete } from 'react-icons/ai';

const AllUsers = () => {
//   const [userInformations, setUserInformations] = useState([]);
//   useEffect(() => {
//     fetch("")
//       .then((res) => res.json())
//       .then((data) => setUserInformations(data));
//   }, []);

  const {data: userInformations = [], refetch} = useQuery({
    queryKey: "users",
    queryFn: async () => {
        const res = await fetch('https://gamespace-server-tau.vercel.app/users');
        const data = await res.json();
        return data;
    }
  })

  const handleDelete = (userInfo) => {
    const confirm = window.confirm("Are you sure?");
        if(confirm){
            fetch(`https://gamespace-server-tau.vercel.app/delete/${userInfo._id}`, {
            method: "DELETE",
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            refetch();
        });
    }
  }

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Admin</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Edit / Delete</th>
          </tr>
        </thead>
        <tbody>
          {userInformations.map((userInformation) => (
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
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
                        <span className="text-xl">{userInformation.name.slice(0,1)}</span>
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
              <td>Purple</td>
              <th>
                <button className="btn btn-lg btn-ghost" onClick={() => handleDelete(userInformation)}>
                    <AiFillDelete></AiFillDelete>
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
