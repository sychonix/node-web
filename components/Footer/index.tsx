'use client';

import { Anchor, Group, ActionIcon, rem, Container } from '@mantine/core';
import {
  IconBrandTelegram,
  IconBrandX,
  IconBrandFacebook,
  IconBrandDiscord,
} from '@tabler/icons-react';
import Image from 'next/image';
import classes from './index.module.css';

const links = [
  { link: '#', label: 'Contact' },
  { link: '#', label: 'Networks' },
  { link: '#', label: 'Blog' },
  { link: '#', label: 'Community' },
];

const socialMedia = [
  {
    icon: <IconBrandX style={{ width: rem(18), height: rem(18) }} stroke={1.5} />,
    link: 'https://twitter.com/klvndrgn',
  },
  {
    icon: <IconBrandTelegram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />,
    link: 'https://t.me/ravensyndrome',
  },
  {
    icon: <IconBrandDiscord style={{ width: rem(18), height: rem(18) }} stroke={1.5} />,
    link: 'https://discord.com/users/911861713442340945',
  },
  {
    icon: <IconBrandFacebook style={{ width: rem(18), height: rem(18) }} stroke={1.5} />,
    link: 'https://web.facebook.com/azazel4041',
  },
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
          <div>Copyright © 2023 Ravenode. All Rights Reserved.</div>
          <Group className={classes.links}>{items}</Group>
          <Group gap="xs" justify="flex-end" wrap="nowrap">
            {socialMedia.map((item, index) => {
              return (
                <a href={item.link} target="_blank" rel="noreferrer" key={index}>
                  <ActionIcon size="lg" variant="default" radius="xl" key={index}>
                    {item.icon}
                  </ActionIcon>
                </a>
              );
            })}
            {/* <ActionIcon size="lg" variant="default" radius="xl">
              <IconBrandTelegram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg" variant="default" radius="xl">
              <IconBrandX style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg" variant="default" radius="xl">
              <IconBrandDiscord style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg" variant="default" radius="xl">
              <IconBrandFacebook style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </ActionIcon> */}
          </Group>
        </div>
      </Container>
    </div>
  );
}
