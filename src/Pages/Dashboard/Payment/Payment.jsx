import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForBkash from "./CheckoutForBkash";
import Checkoutt from "./Checkoutt";
import "./Payment.css";

const stripePromise = loadStripe(
  "pk_test_51M6QZ6IlSJrakpLcejt8uaFqeGHJhiESRp8lr0jTDGosknsdgyYUAeU5oJpVo4OTYO3jD7DFhaJGE6Lx8huHoUVX00FadybHQK"
);

const Payment = () => {
  const gamesData = useLoaderData();
  const { price } = gamesData;

  return (
    <div className="cardd justify-center items-center">
      <p className="text-center ">Total price $ {price}</p>
      <div className="flex gap-6 ">
        <div className="w-full my-12 border-2 border-blue-400">
          <h1 className="text-lg lg:text-3xl font-bold capitalize mb-5 text-center">
            Bkash <span className="text-primary">Pay</span>
          </h1>
          <CheckoutForBkash gamesData={gamesData}/>
        </div>
        <div className="w-full my-12 border-2 border-blue-400">
          <p>Card Payment System</p>
          <h1 className="text-lg lg:text-3xl font-bold capitalize mb-5 text-center">
            Card<span className="text-primary">Pay</span>
          </h1>
          <Elements stripe={stripePromise}>
            <Checkoutt gamesData={gamesData} />
            {/* <CheckoutForm/> */}
            {/* <CheckoutForms/> */}
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
