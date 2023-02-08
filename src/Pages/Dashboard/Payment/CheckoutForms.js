import React, { useEffect } from "react";
import Styles from "./Styles";
import { Form, Field } from "react-final-form";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "./cardUtils";
import axios from "axios";
import Card from "./Card";
// axios = "http://localhost:9000/";
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const CheckoutForms = () => {
  useEffect(() => {
    if (!window.document.getElementById("stripe-script")) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://js.stripe.com/v2/";
      s.onload = () => {
        window["Stripe"].setPublishableKey(
          "pk_test_51M6QZ6IlSJrakpLcejt8uaFqeGHJhiESRp8lr0jTDGosknsdgyYUAeU5oJpVo4OTYO3jD7DFhaJGE6Lx8huHoUVX00FadybHQK"
        );
      };
      window.document.body.appendChild(s);
    }
  }, []);

  const onSubmit = async (values) => {
    await sleep(300);
    try {
      window.Stripe.card.createToken(
        {
          number: values.number,
          exp_month: values.expiry.split("/")[0],
          exp_year: values.expiry.split("/")[1],
          cvc: values.cvc,
          name: values.name,
        },
        (status, response) => {
          if (status === 200) {
            fetch("http://localhost:9000/stripe-payment", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({
                     token: response,
                     email: values.email,
                     amount: values.amount,
                   }),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                //   setCreatedUserEmail(email);
              });
            // axios.post("/stripe-payment", {
            //     token: response,
            //     email: values.email,
            //     amount: values.amount,
            //   })
            //   .then((res) => window.alert(JSON.stringify(res.data, 0, 2)))
            //   // .then((res) => window.alert(JSON.stringify(res.data, 0, 2)))
            //   .catch((err) => console.log(err));
          } else {
            console.log(response.error.message);
          }
        }
      );
    } catch (error) {}
  };

  return (
    <Styles>
      <h1>🏁 React Stripe</h1>
      <Form
        onSubmit={onSubmit}
        render={({
          handleSubmit,
          form,
          submitting,
          pristine,
          values,
          active,
        }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Card
                number={values.number || ""}
                name={values.name || ""}
                expiry={values.expiry || ""}
                cvc={values.cvc || ""}
                focused={active}
              />
              <div>
                <Field
                  name="amount"
                  component="input"
                  type="number"
                  placeholder="Amount"
                />
                <Field
                  name="email"
                  component="input"
                  type="text"
                  placeholder="Your email"
                />
              </div>
              <div>
                <Field
                  name="number"
                  component="input"
                  type="text"
                  pattern="[\d| ]{16,22}"
                  placeholder="Card Number"
                  format={formatCreditCardNumber}
                />
              </div>
              <div>
                <Field
                  name="name"
                  component="input"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div>
                <Field
                  name="expiry"
                  component="input"
                  type="text"
                  pattern="\d\d/\d\d"
                  placeholder="Valid Thru"
                  format={formatExpirationDate}
                />
                <Field
                  name="cvc"
                  component="input"
                  type="text"
                  pattern="\d{3,4}"
                  placeholder="CVC"
                  format={formatCVC}
                />
              </div>
              <div className="buttons">
                <button type="submit" disabled={submitting}>
                  Submit
                </button>
                <button
                  type="button"
                  onClick={form.reset}
                  disabled={submitting || pristine}
                >
                  Reset
                </button>
              </div>
              <h2>Values</h2>
              <pre>{JSON.stringify(values, 0, 2)}</pre>
            </form>
          );
        }}
      />
    </Styles>
  );
};

export default CheckoutForms;
