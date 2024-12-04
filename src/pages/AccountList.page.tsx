import Shell from "@/components/Shell/Shell";
import AccountGrid from "@/components/AccountGrid/AccountGrid";
import {Space} from "@mantine/core";

export default function AccountListPage() {
    return (
        <Shell activeLink='Accounts'>
            <AccountGrid/>
        </Shell>
    )
}
