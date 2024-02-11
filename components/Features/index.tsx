'use client';

import {
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
  useMantineTheme,
} from '@mantine/core';
import { IconGauge, IconUser, IconHeartRateMonitor, IconServer2 } from '@tabler/icons-react';
import classes from './index.module.css';

const mockdata = [
  {
    title: 'Always Online',
    description:
      'Our nodes are redundant and are globally distributed between multiple data centers, providing uninterrupted service.',
    icon: IconGauge,
  },
  //   {
  //     title: 'Privacy focused',
  //     description:
  //       'People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma',
  //     icon: IconUser,
  //   },
  {
    title: 'Decentralization',
    description:
      'We believe in decentralization as a solution to the problem of top level decision making everywhere, including the cloud industry',
    icon: IconServer2,
  },
  {
    title: 'Monitoring',
    description:
      '99% uptime across all networks secured by our validator leading to optimal performance',
    icon: IconHeartRateMonitor,
  },
];

export function FeatureSection() {
  const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
      <feature.icon
        style={{ width: rem(50), height: rem(50) }}
        stroke={2}
        color={theme.colors.blue[6]}
      />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <>
      {/* <Title order={2} className={classes.title} ta="center" mt="sm">
        Integrate effortlessly with any technology stack
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when
        hunger drives it to try biting a Steel-type Pokémon.
      </Text> */}

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg" mt={50}>
        {features}
      </SimpleGrid>
    </>
  );
}
