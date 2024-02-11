'use client';

import { Anchor, Group, ActionIcon, rem, Container } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import Image from 'next/image';
import classes from './index.module.css';

const links = [
  { link: '#', label: 'Contact' },
  { link: '#', label: 'Networks' },
  { link: '#', label: 'Blog' },
  { link: '#', label: 'Community' },
];

export function FooterSection() {
  const items = links.map((link) => (
    <Anchor
      c="dimmed"
      key={link.label}
      href={link.link}
      lh={1}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container size="lg">
        <div className={classes.inner}>
          {/* <div>
            <Image
              src="/ravennode-logo.svg"
              width={80}
              height={80}
              alt="Picture of the author"
              // style={{
              //   objectFit: 'contain',
              // }}
            />
          </div> */}
          <div>Copyright © 2023 Ravenode. All Rights Reserved.</div>
          <Group className={classes.links}>{items}</Group>
          <Group gap="xs" justify="flex-end" wrap="nowrap">
            <ActionIcon size="lg" variant="default" radius="xl">
              <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg" variant="default" radius="xl">
              <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg" variant="default" radius="xl">
              <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </ActionIcon>
          </Group>
        </div>
      </Container>
    </div>
  );
}
