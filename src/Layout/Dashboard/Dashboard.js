import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import NavB from "../../Pages/Shared/Navbar/NavB/NavB";
import { AuthContext } from "../../context/AuthProvider";
import { useState } from "react";
import {
  MdFavorite,
  MdGames,
  MdLogout,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import {
  FaGamepad,
  FaHtml5,
  FaUserAstronaut,
  FaUsersCog,
} from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import defaultAvtar from "../../assets/images/gamingAvatar.webp";
import useAdmin from "../../Hooks/userAdmin/useAdmin";
import Loader from "../../Pages/Shared/Loader/Loader";
import { CgFeed } from "react-icons/cg";
const Dashboard = () => {
  const { user, logOut, loading, userinfo } = useContext(AuthContext);

  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  let activeClassName =
    "border-l-4 border-primary bg-gradient-to-r from-primary/10 to-primary/0 text-primary font-semibold capitalize lg:text-lg font-rajdhani";
  let notActiveClassName =
    "border-l-4 border-transparent font-semibold capitalize lg:text-lg font-rajdhani";
  const [open, setOpen] = useState(false);
  if (loading || isAdminLoading) {
    return <Loader />;
  }
  return (
    <div>
      <div className="drawer drawer-mobile ">
        <input id="dashboard" type="checkbox" className="drawer-toggle " />
        <div className="drawer-content ">
          {/* <!-- Page content here --> */}
          <NavB></NavB>
          <div className="bg-[#0e1015]">
            <Outlet></Outlet>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard" className="drawer-overlay"></label>
          <ul className="menu py-4  w-64 bg-neutral text-base-content font-semibold">
            {/* <!-- Sidebar content here --> */}
            <div className="flex items-start space-x-5 pl-4 font-rajdhani">
              <div className="avatar mb-5 online ">
                <div className="w-16 mask mask-squircle ">
                  <img
                    alt=""
                    src={userinfo?.photoURL ? userinfo.photoURL : defaultAvtar}
                    onError={(e) => (e.target.src = defaultAvtar)}
                    className="rounded-full border"
                  />
                </div>
              </div>
              <div>
                <p className="font-bold text-xl lg:font-2xl">
                  {userinfo?.name}
                </p>
                <p className="text-xs">{userinfo?.email}</p>
              </div>
            </div>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeClassName : notActiveClassName
                }
                end
                to="/dashboard"
              >
                <HiShoppingCart /> My Orders
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeClassName : notActiveClassName
                }
                end
                to="favoriteGames"
              >
                <MdFavorite /> Favorite Games
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeClassName : notActiveClassName
                }
                end
                to="profile"
              >
                <FaUserAstronaut /> Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeClassName : notActiveClassName
                }
                end
                to="/communityfeed"
              >
                <CgFeed /> Community
              </NavLink>
            </li>
            {isAdmin && (
              <li onClick={() => setOpen(!open)}>
                <Link className={notActiveClassName}>
                  <FaHtml5 /> Html 5 Games{" "}
                  <MdOutlineKeyboardArrowDown
                    className={`${
                      open
                        ? "rotate-180 transition-transform"
                        : "transition-transform"
                    }`}
                  />
                </Link>
              </li>
            )}

            {open && (
              <ul>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? activeClassName : notActiveClassName
                    }
                    to="allHtmlGames"
                    end
                  >
                    <FaGamepad /> All games
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? activeClassName : notActiveClassName
                    }
                    end
                    to="addHtmlGames"
                  >
                    <MdGames /> Add games
                  </NavLink>
                </li>
              </ul>
            )}
            {isAdmin && (
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activeClassName : notActiveClassName
                  }
                  end
                  to="/dashboard/allusers"
                >
                  <FaUsersCog /> Manage Users
                </NavLink>
              </li>
            )}
            <li className="pl-1 font-semibold capitalize lg:text-lg hover:text-primary hover:bg-gradient-to-r from-bg-primary/10 to-bg-primary/5">
              <Link onClick={logOut}>
                <MdLogout /> Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
