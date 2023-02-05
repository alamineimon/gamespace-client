import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import toast from "react-hot-toast";
import {  useNavigate } from "react-router-dom";

const BookingModal = ({gameDetails , refetch}) => {
    const { user } = useContext(AuthContext);
    const { title, price } = gameDetails;
    const navigate = useNavigate();
  
    // const from = location.state?.from?.pathname || "/";


        const handleBookingModal = (event) => {
          event.preventDefault();
          const form = event.target;
          const name = form.username.value;
          const email = user?.email;
          const productName = form.productname.value;
          const price = form.Price.value;
          const mobile = form.mobile.value;
          const location = form.location.value;
          // console.log(name, price, email, productName, mobile, location);
      
          const orderedGames = {
            name,
            email,
            productName,
            price,
            location,
            mobile,
          };
          fetch("https://gamespace-server-tau.vercel.app/bookings", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(orderedGames),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log("save user ", data);
              navigate("/dashboard");
              toast("Game Added successfully");
              form.reset();
              refetch();
            });
        };
      
  return (
    <>
    <input type="checkbox" id="bookingModal" className="modal-toggle" />
    <div className="modal">
      <div className="modal-box relative">
        <label
          htmlFor="bookingModal"
          className="btn btn-sm btn-circle absolute right-2 top-2"
        >
          ✕
        </label>
        {/* <h3 className="text-xl font-bold">{user?.name}</h3> */}
        <form
        onSubmit={handleBookingModal}
          className="grid grid-cols-1 gap-3 mt-10"
        >
          <input
            disabled
            defaultValue={user?.displayName}
            name="username"
            type="text"
            placeholder="Your Name"
            className="input w-full input-bordered"
          />
          <input
            disabled
            defaultValue={user?.email}
            name="email"
            type="email"
            placeholder="Email Address"
            className="input w-full input-bordered"
          />
          <input
            disabled
            name="productname"
            type="text"
            defaultValue={title}
            placeholder="Product Name"
            className="input w-full input-bordered"
          />
          <input
            disabled
            name="Price"
            defaultValue={price}
            type="text"
            placeholder="Price"
            className="input w-full input-bordered"
          />
          <input
            name="location"
            type="text"
            placeholder="Location"
            className="input w-full input-bordered"
          />
          <input
            name="mobile"
            type="text"
            placeholder="Phone Number"
            className="input w-full input-bordered"
          />
          <br />
          <input
            className=" hover:text-gray-100 px-8 rounded py-3 text-bold hover:bg-green-600 bg-blue-800 text-white w-full"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  </>
  );
};

export default BookingModal;
