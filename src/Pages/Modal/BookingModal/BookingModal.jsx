import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const BookingModal = ({ gameDetails, refetch }) => {
  const { user } = useContext(AuthContext);
  const { title, price , img} = gameDetails;
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
      img
    };
    fetch("http://localhost:9000/orderedGames", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderedGames),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Game Added successfully");
        navigate("/shop");
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
              className="hover:bg-yellow-500 rounded border-2 border-yellow-500 text-yellow-500 hover:text-white text-md md:text-lg uppercase font-semibold px-8 py-2"
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
