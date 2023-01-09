import { KeystoneContext } from "@keystone-next/types";
import { Session } from "../types";
import { CartItemCreateInput } from "../.keystone/schema-types";

async function addToCart(
  root: any,
  { productId }: { productId: string },
  context: KeystoneContext
): Promise<CartItemCreateInput> {
  console.log("ADDING TO CART");
  // 1. Query current user, see if they are signed in
  const sesh = context.session as Session;
  if (!sesh.itemId) {
    throw new Error("You must be logged in to do this");
  }
  // 2. Query the current users cart
  const allCartItems = await context.lists.CartItem.findMany({
    where: {
      user: { id: sesh.itemId },
      product: { id: productId },
    },
    resolveFields: "id, quantity",
    // Weird keystone thing: you have to tell it what to return via resolveFields
  });

  // 3. See if current item is in cart
  const [existingCartItem] = allCartItems;
  if (existingCartItem) {
    // If it is, increment by 1
    return await context.lists.CartItem.updateOne({
      id: existingCartItem.id,
      data: { quantity: existingCartItem.quantity + 1 },
    });
  }
  // If it isn't, create new cartItem
  return await context.lists.CartItem.createOne({
    data: {
      product: { connect: { id: productId } },
      user: { connect: { id: sesh.itemId } },
    },
  });
}

export { addToCart };
