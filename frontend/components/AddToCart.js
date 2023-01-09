import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import { useCart } from "../lib/cartState";
import { CURRENT_USER_QUERY } from "./User";

const ADD_TO_CART_MUTATION = gql`
  mutation ADD_TO_CART_MUTATION($id: ID!) {
    addToCart(productId: $id) {
      id
    }
  }
`;

export default function AddToCart({ id }) {
    const { openCart } = useCart()
  const [addToCart, { loading }] = useMutation(ADD_TO_CART_MUTATION, {
    variables: {
      id: id,
    },
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
    onCompleted: () => openCart()
  });
  return (
    <button type="button" disabled={loading} onClick={addToCart}>
      Add{loading && 'ing'} To Cart
    </button>
  );
}
