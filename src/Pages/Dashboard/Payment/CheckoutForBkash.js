import React from "react";
import "../../../context/AuthProvider.js";

const CheckoutForBkash = ({ gamesData }) => {
  const { email, productName, img, price, _id } = gamesData;

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = gamesData?.email || "unregistered";
    const phone = form.phone.value;
    const address = form.address.value;
    const postcode = form.postcode.value;
    const currency = form.currency.value;

    const  date = new Date()  

    const order = {
      service: _id,
      serviceName: productName,
      price,
      customer: name,
      email,
      phone,
      address,
      postcode,
      currency,
      date
    };

    // if(phone.length > 10){
    //     alert('Phone number should be 10 characters or longer')
    // }
    // else{

    // }

    fetch("http://localhost:9000/bkashpayment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.replace(data.url);
      })
      .catch((er) => console.error(er));
  };

  return (
    <div>
      <form onSubmit={handlePlaceOrder}>
        <div className="flex items-center justify-center px-4 mb-4">
          <img src={img} alt="" className="h-[80px] mr-2" />
          <div>
            <h2 className="text-2xl">{productName}</h2>
            <h4 className="text-xl">
              Price: $<span className="text-primary"> {price}</span>
            </h4>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input
              name="firstName"
              type="text"
              placeholder="First Name"
              className="input input-ghost w-full  input-bordered"
            />
            <input
              name="lastName"
              type="text"
              placeholder="Last Name"
              className="input input-ghost w-full  input-bordered"
            />
            <input
              name="phone"
              type="text"
              placeholder="Your Phone"
              className="input input-ghost w-full  input-bordered"
              required
            />
            <input
              name="email"
              type="text"
              placeholder="Your email"
              defaultValue={email}
              className="input input-ghost w-full  input-bordered"
              readOnly
            />
            <select
              defaultValue="BDT"
              name="currency"
              className="select input-ghost select-bordered max-w-xs"
            >
              <option value="BDT">BDT</option>
              <option value="USD">USD</option>
            </select>

            <input
              type="text"
              name="postcode"
              placeholder="Your Postcode"
              className="input input-ghost w-full  input-bordered"
            />
          </div>

          <input
            name="address"
            className="input input-ghost w-full mt-4 input-bordered"
            placeholder="Your Address"
            required
          ></input>

          <button className="btn w-full mt-4 btn-primary" type="submit">
            Pay
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForBkash;
