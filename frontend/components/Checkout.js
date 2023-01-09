import { useMutation } from "@apollo/client";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import gql from "graphql-tag";
import { useRouter } from "next/router";
import nProgress from "nprogress";
import { useState } from "react";
import styled from "styled-components";
import { useCart } from "../lib/cartState";
import { CheckoutButton } from "./styles/CheckoutButton";
import { CURRENT_USER_QUERY } from "./User";

const CheckoutFormStyles = styled.form`
  box-shadow: 0 1px 2px 2px gba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 5px;
  padding: 1rem;
  display: grid;
  grid-gap: 1rem;
`;
// Not using our usual form component here because we will be using Stripe elements

const CREATE_ORDER_MUTATION = gql`
  mutation CREATE_ORDER_MUTATION($token: String!) {
    checkout(token: $token) {
      id
      charge
      total
      items {
        id
        name
      }
    }
  }
`;

const stripeLib = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

function CheckoutForm() {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const { closeCart } = useCart();
  const [checkout, { error: graphQLError }] = useMutation(
    CREATE_ORDER_MUTATION,
    {
      refetchQueries: [{ query: CURRENT_USER_QUERY }],
    }
  );
  const router = useRouter();

  async function handleSubmit(e) {
    // 1. Stop the form from submitting, turn loader on
    e.preventDefault();
    setLoading(true);
    // 2. Start page transition
    nProgress.start();
    // 3. Create payment method via stripe, token comes back here if successful
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    console.log(paymentMethod);
    // 4. Handle any eerrors from stripe
    if (error) {
      setError(error);
      nProgress.done();
      return;
    }
    // 5. Send token from step 3 to keystone servia via custom mutation
    const order = await checkout({
      variables: {
        token: paymentMethod.id,
      },
    });
    console.log("finished with the order");
    console.log(order);
    // 6. Change page to view the order
    router.push({
      pathname: "/order/[id]",
      query: { id: order.data.checkout.id },
    });
    closeCart();
    // 7. Close cart
    // 8. Turn loader off
    setLoading(false);
    nProgress.done();
  }

  return (
    <CheckoutFormStyles onSubmit={handleSubmit}>
      {error && <p>{error.message}</p>}
      {graphQLError && <p>{graphQLError.message}</p>}
      <CardElement />
      <CheckoutButton>Check Out Now</CheckoutButton>
    </CheckoutFormStyles>
  );
}

function Checkout() {
  // Weird hack, doing this because we need stripe elements provider at a high enough level to be accessed in CheckoutForm
  return (
    <Elements stripe={stripeLib}>
      <CheckoutForm />
    </Elements>
  );
}

export { Checkout, CheckoutForm };
