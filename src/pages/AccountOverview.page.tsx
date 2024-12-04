import Shell from "@/components/Shell/Shell";
import {useAccount} from "@/contexts/Account.context";

export default function AccountOverviewPage() {
    const account = useAccount()
    console.log(account)
    return (
        <Shell>
            <></>
        </Shell>
    )
}
