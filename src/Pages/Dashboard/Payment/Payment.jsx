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

  return (
    <div className="cardd lg:h-[600px] sm:h-[1100px] p-6 justify-center items-center">
      <div className="lg:flex block gap-6 ">
        <div className="w-full my-12 border-2 p-2 border-primary">
          <h1 className="text-lg lg:text-3xl  font-bold capitalize mb-5 text-center">
            Bkash <span className="text-primary">Pay</span>
          </h1>
          <CheckoutForBkash gamesData={gamesData} />
        </div>
        <div className="w-full p-2  my-12 border-2 border-primary">
          <h1 className="text-lg lg:text-3xl mt-12 font-bold capitalize mb-5 text-center">
            Card<span className="text-primary ">Pay</span>
          </h1>
          <Elements stripe={stripePromise}>
            <Checkoutt gamesData={gamesData} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
