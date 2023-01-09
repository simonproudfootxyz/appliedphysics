import { graphQLSchemaExtension } from "@keystone-next/keystone/schema";
import { addToCart } from "./addToCart";
import { checkout } from "./checkout";

const extendGraphqlSchema = graphQLSchemaExtension({
  typeDefs: `
        type Mutation {
            addToCart(productId: ID): CartItem
            checkout(token: String!): Order
        }
    `,
  resolvers: {
    Mutation: {
      addToCart: addToCart,
      checkout: checkout,
    },
  },
});

export { extendGraphqlSchema };
