import { useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import Cards from "react-credit-cards";
import 'react-credit-cards/es/styles-compiled.css'


const CheckoutForm = () => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");

const [cardError , setCardError] = useState()
const stripe = useStripe()
const elements = useElements
const handleSubmit =async(event) =>{
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const number = form.number.value;
  const expiry = form.expiry.value;
  const cvc = form.cvc.value;
  console.log(name, number, expiry, cvc)
}


  return (
    <div >
      <Cards
        number={number}
        name={name}
        expiry={expiry}
        cvc={cvc}
        focused={focus}
        className="bg-green-500"
       />
      <form onSubmit={handleSubmit}>
        <input
          type="tel"
          name="number"
          placeholder="Card Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <input
          type="text"
          name="expiry"
          placeholder="MM/YY"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <input
          type="tel"
          name="cvc"
          placeholder="CVC"
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <button
           className="btn btn-sm btn-primary mt-6"
           type="submit"
           disabled={!stripe}
         >
           Pay
         </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
