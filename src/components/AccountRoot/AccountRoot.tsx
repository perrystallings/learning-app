import { Outlet, useParams } from 'react-router-dom';
import { useAccountDispatch } from '@/contexts/Account.context';
import {useEffect} from "react";

export default function AccountRoot() {
  const { accountId } = useParams();
  const accountDispatch = useAccountDispatch();
  useEffect(() => {
    accountDispatch({ type: 'select', account: { name: accountId, accountUUID: accountId } });
  })
  return (
      <Outlet />
  )
}
