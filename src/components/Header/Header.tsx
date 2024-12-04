import { Link } from 'react-router-dom';
import { Anchor, Burger, Group, Space } from '@mantine/core';
import LinkType from '@/types/Link';
import UserMenu from "@/components/UserMenu/UserMenu";

export default function Header({
  burgerDisclosure,
  activeLink,
  links = [],
}: {
  burgerDisclosure?: { opened: boolean; toggle: () => void };
  activeLink?: string;
  links?: LinkType[];
}) {
  const defaultLinks: LinkType[] = [
    { title: 'Home', href: '/' },
    { title: 'Accounts', href: '/accounts' },
  ];
  const anchors = defaultLinks.concat(links).map((link, index) => (
    <Anchor
      key={index}
      component={Link}
      to={link.href}
      fw={link.title === activeLink ? 'bold' : 'normal'}
    >
      {link.title}
    </Anchor>
  ));
  return (
    <>
      <Group w="100%" justify="space-between">
        <Group p="sm" visibleFrom="sm">
          {burgerDisclosure !== undefined ? (
            <Burger opened={burgerDisclosure.opened} onClick={burgerDisclosure.toggle} />
          ) : (
            <Space />
          )}
        </Group>
        <Group p='sm'>
          {anchors}
        </Group>
        <Group p='sm'>
          <UserMenu/>
        </Group>
      </Group>
    </>
  );
}
