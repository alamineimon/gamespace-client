import React, { useEffect, useState } from "react";

const AllUsers = () => {
  const [userInformations, setUserInformations] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/users")
      .then((res) => res.json())
      .then((data) => setUserInformations(data));
  }, []);
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
            {
                userInformations.map(userInformation => <tr>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                            {
                                
                            }
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src="/tailwind-css-component-profile-2@56w.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{userInformation.name}</div>
                          <div className="text-sm opacity-50">United States</div>
                        </div>
                      </div>
                    </td>
                    <td>{userInformation.email}</td>
                    <td>Purple</td>
                    <th>
                      <button className="btn btn-ghost btn-xs">details</button>
                    </th>
                  </tr>)
            }
          
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
