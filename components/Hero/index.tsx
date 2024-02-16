'use client';

import { Image, Container, Title, Text } from '@mantine/core';
import classes from './index.module.css';

export function HeroSection() {
  return (
    <Container size="lg">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            <span className={classes.highlight}>Sychonix</span> Node <br /> Connecting Blocks
          </Title>
          <Text c="dimmed" mt="md">
            Independent node validator, ready to contribute to decentralized networks and foster
            innovation in the realm of blockchain technology.
          </Text>
          {/* <Group mt={30}>
            <Button radius="xl" size="md" className={classes.control}>
              Get started
            </Button>
            <Button variant="default" radius="xl" size="md" className={classes.control}>
              Source code
            </Button>
          </Group> */}
        </div>
        <Image src="/node-animation.gif" className={classes.image} />
      </div>
    </Container>
  );
}
