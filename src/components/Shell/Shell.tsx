import { ReactNode } from 'react';
import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Header from '@/components/Header/Header';
import { headerHeight, navbarWidth } from '@/constants';

export default function Shell({
  includeHeader = true,
  activeLink,
  navbar,
  children,
}: Readonly<{
  includeHeader?: boolean;
  activeLink?: string;
  navbar?: { node: ReactNode; toggle?: () => void; opened?: boolean };
  children: ReactNode[] | ReactNode;
}>) {
  const [navbarOpened, { toggle: navbarToggle }] = useDisclosure(false);

  if (navbar !== undefined && navbar.toggle === undefined) {
    navbar.toggle = navbarToggle;
    navbar.opened = navbarOpened;
  }
  return (
    <AppShell
      header={includeHeader ? { height: headerHeight } : undefined}
      navbar={
        navbar !== undefined
          ? {
              width: navbarWidth,
              breakpoint: 'xs',
              collapsed: { desktop: navbar.opened },
            }
          : undefined
      }
    >
      {includeHeader ? (
        <AppShell.Header>
          <Header
            burgerDisclosure={
              navbar !== undefined
                ? {
                    opened: navbar.opened!,
                    toggle: navbar.toggle!,
                  }
                : undefined
            }
            activeLink={activeLink}
          />
        </AppShell.Header>
      ) : (
        <></>
      )}
      {navbar !== undefined ? (
        <AppShell.Navbar visibleFrom="sm">{navbar.node}</AppShell.Navbar>
      ) : (
        <></>
      )}
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
