// import { CardCvcElement, CardElement, CardExpiryElement, CardNumberElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import React, { useState } from "react";

// const CheckoutForm = () => {
//   // const [cardError , setCardError] = useState()
//   // const stripe = useStripe()
//   // const elements = useElements()

//   // const handleSubmit =async(event) =>{
//   //   event.preventDefault();
//   //   if (!stripe || !elements) {
//   //     return;
//   //   }
//   //   const card = elements.getElement(CardElement);

//   //   if (card == null) {
//   //     return;
//   //   }
//   //   const {error, paymentMethod} = await stripe.createPaymentMethod({
//   //     type: 'card',
//   //     card,
//   //   });
//   //   if (error) {
//   //     console.log(error);
//   //     setCardError(error.message)
//   //   } 
//   //   else {
//   //     setCardError('')
//   //   }
//   // }
//   // import {logEvent, Result, ErrorResult} from '../util';
//   const ELEMENT_OPTIONS = {
//     style: {
//       base: {
//         fontSize: '18px',
//         color: '#424770',
//         letterSpacing: '0.025em',
//         '::placeholder': {
//           color: '#aab7c4',
//         },
//       },
//       invalid: {
//         color: '#9e2146',
//       },
//     },
//   };
//  const logEvent = (name) => (event) => {
//     console.log(`[${name}]`, event);
//   };
// //   const Result = ({children}) => <div className="result">{children}</div>;

// //   const ErrorResult = ({children}) => (
// //   <div className="error">{children}</div>
// // );

//   const stripe = useStripe()
//   const elements = useElements()
//   // const {postal, name, paymentMethod, errorMessage} = this.state;

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     // const form = event.t
//     console.log(event)
 

//     // if (!stripe || !elements) {
//     //   // Stripe.js has not loaded yet. Make sure to disable
//     //   // form submission until Stripe.js has loaded.
//     //   return;
//     // }

//     // const card = elements.getElement(CardNumberElement);

//     // if (card == null) {
//     //   return;
//     // }

//     // const payload = await stripe.createPaymentMethod({
//     //   type: 'card',
//     //   card,
//     //   billing_details: {
//     //     name,
//     //     address: {
//     //       postal_code: postal,
//     //     },
//     //   },
//     // });

//     // if (payload.error) {
//     //   console.log('[error]', payload.error);
//     //   this.setState({
//     //     errorMessage: payload.error.message,
//     //     paymentMethod: null,
//     //   });
//     // } else {
//     //   console.log('[PaymentMethod]', payload.paymentMethod);
//     //   this.setState({
//     //     paymentMethod: payload.paymentMethod,
//     //     errorMessage: null,
//     //   });
//     // }
//   };


//   return (
//     <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Full Name</label>
//         <input
//           id="name"
//           required
//           placeholder="Jenny Rosen"
//           value={name}
//           onChange={(event) => {
//             this.setState({name: event.target.value});
//           }}
//         />
//         <label htmlFor="cardNumber">Card Number</label>
//         <CardNumberElement
//           id="cardNumber"
//           onBlur={logEvent('blur')}
//           onChange={logEvent('change')}
//           onFocus={logEvent('focus')}
//           onReady={logEvent('ready')}
//           options={ELEMENT_OPTIONS}
//         />
//         <label htmlFor="expiry">Card Expiration</label>
//         <CardExpiryElement
//           id="expiry"
//           onBlur={logEvent('blur')}
//           onChange={logEvent('change')}
//           onFocus={logEvent('focus')}
//           onReady={logEvent('ready')}
//           options={ELEMENT_OPTIONS}
//         />
//         <label htmlFor="cvc">CVC</label>
//         <CardCvcElement
//           id="cvc"
//           onBlur={logEvent('blur')}
//           onChange={logEvent('change')}
//           onFocus={logEvent('focus')}
//           onReady={logEvent('ready')}
//           options={ELEMENT_OPTIONS}
//         />
//         <label htmlFor="postal">Postal Code</label>
//         <input
//           id="postal"
//           required
//           placeholder="12345"
//           value={postal}
//           onChange={(event) => {
//             this.setState({postal: event.target.value});
//           }}
//         />
//         {/* {errorMessage && <ErrorResult>{errorMessage}</ErrorResult>}
//         {paymentMethod && (
//           <Result>Got PaymentMethod: {paymentMethod.id}</Result>
//         )} */}
//         <button type="submit" disabled={!stripe}>
//           Pay
//         </button>
//       </form>
//     // <form onSubmit={handleSubmit}>
//     //   <CardElement
//     //     options={{
//     //       style: {
//     //         base: {
//     //           fontSize: "16px",
//     //           color: "#FFCC00",
//     //           "::placeholder": {
//     //             color: "#aab7c4",
//     //           },
//     //         },
//     //         invalid: {
//     //           color: "#9e2146",
//     //         },
//     //       },
//     //     }}
//     //   />
//     //   <button className="btn btn-sm btn-primary mt-6" type="submit" disabled={!stripe}>
//     //     Pay
//     //   </button>
//     // </form>
//   );
// };

// export default CheckoutForm;



// meaningfull form.........................................
// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import React, { useState } from "react";

// const CheckoutForm = () => {
// const [cardError , setCardError] = useState()
// const stripe = useStripe()
// const elements = useElements
// const handleSubmit =async(event) =>{
//   event.preventDefault();
//   if (!stripe || !elements) {
//     return;
//   }
//   const card = elements.getElement(CardElement);
//   if (card == null) {
//     return;
//   }
//   const {error, paymentMethod} = await stripe.createPaymentMethod({
//     type: 'card',
//     card,
//   });
//   if (error) {
//     console.log(error);
//     setCardError(error.message)
//   } 
//   else {
//     setCardError('')
//   }
// }
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <CardElement
//           options={{
//             style: {
//               base: {
//                 fontSize: "16px",
//                 color: "#FFCC00",
//                 "::placeholder": {
//                   color: "#aab7c4",
//                 },
//               },
//               invalid: {
//                 color: "#9e2146",
//               },
//             },
//           }}
//         />
//         <button
//           className="btn btn-sm btn-primary mt-6"
//           type="submit"
//           disabled={!stripe}
//         >
//           Pay
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CheckoutForm;

