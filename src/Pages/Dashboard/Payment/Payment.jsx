import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import Checkoutt from "./Checkoutt";
import './Payment.css'




const stripePromise = loadStripe(
  "pk_test_51M6QZ6IlSJrakpLcejt8uaFqeGHJhiESRp8lr0jTDGosknsdgyYUAeU5oJpVo4OTYO3jD7DFhaJGE6Lx8huHoUVX00FadybHQK"
);

const Payment = () => {
  const gamesData = useLoaderData();
  const { name, email, productName, price, location, mobile } = gamesData;

  return (
    <div className="cardd justify-center items-center">
      <p className="text-center ">Total price $ {price}</p>
      <div className="w-96 my-12">
        <Elements stripe={stripePromise}>
          <Checkoutt gamesData={gamesData}/>
          {/* <CheckoutForm/> */}
          {/* <CheckoutForms/> */}
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
