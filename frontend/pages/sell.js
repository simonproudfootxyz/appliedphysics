import CreateProduct from "../components/CreateProduct";
import Page from "../components/Page";
import PleaseSignIn from "../components/PleaseSignIn";

export default function SellPage() {
  return (
    <PleaseSignIn>
      <CreateProduct />
    </PleaseSignIn>
  );
}
