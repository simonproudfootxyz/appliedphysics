import Pagination from "../components/Pagination";
import PleaseSignIn from "../components/PleaseSignIn";
import Products from "../components/Products";

export default function ProductsPage() {
  return (
    <PleaseSignIn>
      <div>
        <Pagination page={1} />
        <Products page={1} />
        <Pagination page={1} />
      </div>
    </PleaseSignIn>
  );
}
