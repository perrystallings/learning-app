import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export default function RedirectPage({ path }: { path: string }) {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(path);
  });
  return (
      <></>
  )
}
