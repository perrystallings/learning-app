import {Button, Container, Text, Center, Image, Space, Paper} from "@mantine/core";
import {Link} from 'react-router-dom';

export default function AccountTile({
                                name,
                                account_uuid,
                                parent_account_uuid,
                                account_type_name,
                                account_type_uuid
                            }) {
    const url = '/accounts/' + account_uuid;
    return (
        <Container size="md">
            <Paper shadow="md" withBorder p="xl" color="blue">
            <Center><Text>{name}</Text></Center>
            <Center><Text>{account_type_name}</Text></Center>
            <Image src='https://framerusercontent.com/images/QS2Xubt1uZ42gMQulrvLkEkD6gI.png'/>
            <Space/>
            <Center>
                <Button
                  component={Link}
                  to={url}
                  key={account_uuid}
                  variant="filled"
                  onClick={() => {
                }}>
                Select Account
                </Button>
            </Center>
            </Paper>
        </Container>
    );
}
