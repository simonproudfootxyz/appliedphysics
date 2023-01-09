import { useRouter } from "next/dist/client/router"
import RequestReset from "../components/RequestReset";
import Reset from "../components/Reset";

export default function ResetPage(props) {
    const { query } = useRouter();

    if(!query?.token) {
        return (
            <div>
                <p>Sorry, you must request a reset token</p>
                <RequestReset />
            </div>
        )
    }

    return (
        <div>
            <p>Reset your password {query.token}</p>
            <Reset token={query.token} />
        </div>
    )
}