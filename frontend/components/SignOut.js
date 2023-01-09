import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import { CURRENT_USER_QUERY } from "./User";

const SIGNOUT_MUTATION = gql`
  mutation SIGNOUT_MUTATION {
    endSession
  }
`;

export default function SignOut() {
  const [signout, { data: signoutData, loading: signoutLoading }] = useMutation(
    SIGNOUT_MUTATION,
    {
      refetchQueries: [{ query: CURRENT_USER_QUERY }],
    }
  );

  async function handleSignOut(e) {
    e.preventDefault();
    await signout();
  }

  return (
    <button type="button" onClick={handleSignOut}>
      Sign out
    </button>
  );
}
