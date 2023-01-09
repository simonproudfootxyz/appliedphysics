import { useRouter } from "next/router";
import UpdateProduct from "../components/UpdateProduct";

export default function UpdatePage() {
    const router = useRouter();
    const { id } = router.query;

    return (
        <UpdateProduct id={id} />
    )
}