'use client';

import {
  Group,
  Divider,
  Box,
  Burger,
  ScrollArea,
  rem,
  Container,
  Drawer,
  Button,
  //   useMantineColorScheme,
} from '@mantine/core';
import Image from 'next/image';
import { useDisclosure } from '@mantine/hooks';
// import { SwitchMode } from '../SwitchMode';
import { usePathname } from 'next/navigation';
import classes from './index.module.css';
import useSticky from '@/hooks/useSticky';

const navigation = [
  {
    title: 'Networks',
    href: '/#network',
  },
  {
    title: 'About',
    href: '/#about',
  },
  {
    title: 'FAQ',
    href: '/#faq',
  },
  {
    title: 'Contact Us',
    href: '/#contact',
  },
];

export function HeaderSection() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  //   const { setColorScheme } = useMantineColorScheme();
  const pathname = usePathname();
  const isSticky = useSticky('myBody');
  return (
    <div style={{ position: 'relative' }}>
      <header
        className={classes.header}
        id="myHeader"
        style={{
          position: isSticky ? 'fixed' : 'absolute',
          backgroundColor: isSticky ? '#1D1E30' : 'transparent',
          boxShadow: isSticky ? '0 0 12px 0 rgba(0,0,0,0.2)' : 'none',
        }}
      >
        <Container size="lg" style={{ height: '100%' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: '100%',
              width: '100%',
            }}
          >
            <Image src="/sychonix.svg" width={150} height={150} alt="Picture of the author" />

            <Group h="100%" gap={0} visibleFrom="sm" style={{ color: 'white' }}>
              {navigation.map((item, index) => {
                return (
                  <a
                    key={index}
                    href={item.href}
                    className={classes.link}
                    style={{
                      color: pathname === item.href ? '#C50E82' : 'white',
                    }}
                  >
                    {item.title}
                  </a>
                );
              })}
              {/* <Button style={{ marginLeft: '12px' }} variant="outline">
                {' '}
                Contact Us
              </Button> */}
            </Group>
            {/* <Group visibleFrom="sm">
              <Button> Contact Us</Button>
              <SwitchMode />
              <Button onClick={() => setColorScheme('light')}>Light</Button>
              <Button onClick={() => setColorScheme('dark')}>Dark</Button>
            </Group> */}
            <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
          </div>
        </Container>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <a href="#" className={classes.link}>
            Networks
          </a>
          <a href="#" className={classes.link}>
            About
          </a>
          <a href="#" className={classes.link}>
            FAQ
          </a>
          <a href="#" className={classes.link}>
            Contact Us
          </a>
          <Divider my="sm" />
          {/* <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group> */}
        </ScrollArea>
      </Drawer>
    </div>
  );
}
