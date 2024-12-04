import {Avatar, UnstyledButton} from '@mantine/core';
import { useUser } from '@/contexts/User.context';
import User from "@/types/User";

export default function UserButton({user}: {user: User}) {
  return (
    <UnstyledButton><Avatar size='md' name={user.name} color="initials" />
    </UnstyledButton>
  );
}
