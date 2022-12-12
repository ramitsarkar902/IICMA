import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY =
  "pk_test_51M1QQnSFJiQ3aXZsTMr016vAD5N5bIhSYNKhlcC0M48ZduKQYc4f6nFTTQ7qHDPNwuVR5fIfMthwUOox8FdTzqGa00i8XDXndf";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
}
