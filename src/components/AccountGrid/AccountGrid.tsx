import { Container, Flex, Grid, ScrollArea } from '@mantine/core';
import AccountTile from '@/components/AccountTile/AccountTile';

export default function AccountGrid() {
  const accounts = [
    {
      account_uuid: '79668e11-26d5-40e6-b072-10d74d98ac55',
      name: 'test Account',
      parent_account_uuid: '42204580-7a3a-4538-bca5-af202ebed057',
      account_type_name: 'Account Type 1',
      account_type_uuid: '7f0fac7c-3cee-4de8-8482-4f97a14dbf7b',
    },
    {
      account_uuid: '7951565e-9f25-4e8a-a83b-4a3acbddf810',
      name: 'Account 2',
      parent_account_uuid: '42204580-7a3a-4538-bca5-af202ebed057',
      account_type_name: 'Account Type 1',
      account_type_uuid: '7f0fac7c-3cee-4de8-8482-4f97a14dbf7b',
    },
    {
      account_uuid: '7951565e-9f35-4e8a-a83b-4a3acbddf810',
      name: 'Account 3',
      parent_account_uuid: '42204580-7a3a-4538-bca5-af202ebed057',
      account_type_name: 'Account Type 2',
      account_type_uuid: '7f0fac7c-3cee-5de8-8482-4f97a14dbf7b',
    },
    {
      account_uuid: '7951565e-9f45-4e8a-a83b-4a3acbddf810',
      name: 'Account 4',
      parent_account_uuid: '42204580-7a3a-4538-bca5-af202ebed057',
      account_type_name: 'Account Type 2',
      account_type_uuid: '7f0fac7c-3cee-5de8-8482-4f97a14dbf7b',
    },
  ];
  const tiles = accounts.map((account, idx) => (
    <Grid.Col span={4} key={idx}>
      <AccountTile
        account_type_name={account.account_type_name}
        account_type_uuid={account.account_type_uuid}
        parent_account_uuid={account.parent_account_uuid}
        name={account.name}
        account_uuid={account.account_uuid}
      />
    </Grid.Col>
  ));
  return (
      <Grid justify="center" columns={24} p='lg'>{tiles}</Grid>
  );
}
