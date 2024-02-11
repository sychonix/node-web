'use client';

import {
  Group,
  Button,
  Divider,
  Box,
  Burger,
  ScrollArea,
  rem,
  Container,
  Drawer,
  //   useMantineColorScheme,
} from '@mantine/core';
import Image from 'next/image';
import { useDisclosure } from '@mantine/hooks';
// import { SwitchMode } from '../SwitchMode';
import classes from './index.module.css';

export function HeaderSection() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  //   const { setColorScheme } = useMantineColorScheme();
  return (
    <Box style={{ position: 'relative' }}>
      <header className={classes.header}>
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
            <Image src="/ravennode-logo.svg" width={150} height={150} alt="Picture of the author" />

            <Group h="100%" gap={0} visibleFrom="sm" style={{ color: 'white' }}>
              <a href="#network" className={classes.link}>
                Networks
              </a>
              <a href="#about" className={classes.link}>
                About
              </a>
              {/* <a href="#" className={classes.link}>
                Community
              </a> */}
              <a href="#faq" className={classes.link}>
                FAQ
              </a>
              <Button style={{ marginLeft: '12px' }} variant="outline">
                {' '}
                Contact Us
              </Button>
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
    </Box>
  );
}
