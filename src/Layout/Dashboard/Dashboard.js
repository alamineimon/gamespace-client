import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import NavB from "../../Pages/Shared/Navbar/NavB/NavB";
import { AuthContext } from "../../context/AuthProvider";
import { useState } from "react";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  // const [isAdmin] = useAdmin(user?.email);
  // const [isSeller] = useSeller(user?.email);
  let activeClassName = "bg-[#F1F5F9] rounded-md capitalize  m-2 md:m-3 ";
  let notActiveClassName =
    "hover:bg-[#F1F5F9] rounded-md capitalize  m-2 md:m-3 ";
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="drawer drawer-mobile bg-secondary  ">
        <input id="dashboard" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          {/* <!-- Page content here --> */}
          <NavB></NavB>
          <div className="p-10">
            <Outlet></Outlet>
          </div>
        </div>
        <div className="drawer-side  ">
          <label htmlFor="dashboard" className="drawer-overlay"></label>
          <ul className="menu py-4 pl-4 w-80 bg-base-100 text-base-content font-semibold">
            {/* <!-- Sidebar content here --> */}
            <li className="text-2xl mx-3 mb-10 capitalize font-bold m">
              Hi! {user?.displayName.split(" ")[0]}
            </li>
            <li onClick={() => setOpen(!open)}>
              <Link>Html 5 games</Link>
            </li>
            {open && (
              <ul>
                <li>
                  <Link className="ml-2">All games</Link>
                </li>
                <li>
                  <Link to="addHtmlGames" className="ml-2">
                    Add games
                  </Link>
                </li>
              </ul>
            )}

            <li>
              <Link to="/dashboard/addproduct">Add Product</Link>
            </li>
            <li>
              <Link to="/dashboard/myproducts">My Products</Link>
            </li>
            <li>
              <Link to="/dashboard/allusers">Manage Users</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
