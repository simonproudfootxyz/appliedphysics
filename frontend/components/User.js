import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

export const CURRENT_USER_QUERY = gql`
  query {
    authenticatedItem {
      ... on User {
        id
        email
        name
        cart {
            id
            quantity
            product {
                id
                price
                description
                photo {
                    image {
                        publicUrlTransformed
                    }
                }
            }
        }
      }
    }
  }
`;
// When returning the User type, return these fields

export function useUser() {
  const { data } = useQuery(CURRENT_USER_QUERY);
  return data?.authenticatedItem;
}
