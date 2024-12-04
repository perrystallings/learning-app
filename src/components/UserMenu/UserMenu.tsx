import {Menu} from "@mantine/core";
import UserButton from "@/components/UserButton/UserButton";
import {useUser} from "@/contexts/User.context";

export default function UserMenu () {
    const user = useUser()
    return (
        <Menu>
            <Menu.Target>
                <UserButton user={user}/>
            </Menu.Target>
            {/* ... menu items */}
        </Menu>
    )
}
