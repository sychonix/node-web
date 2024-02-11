'use client';

import {
  Title,
  SimpleGrid,
  Text,
  Button,
  ThemeIcon,
  Grid,
  rem,
  Container,
  Space,
} from '@mantine/core';
import {
  IconGauge,
  IconServer2,
  IconHeartRateMonitor,
  IconBusinessplan,
} from '@tabler/icons-react';
import Image from 'next/image';
import { BlockchainAnimation } from '@/components/BlockchainAnimation';
import classes from './index.module.css';

const features = [
  {
    icon: IconGauge,
    title: 'Always Online',
    description:
      'Our nodes are redundant and are globally distributed between multiple data centers, providing uninterrupted service.',
  },
  {
    icon: IconBusinessplan,
    title: 'Fee',
    description: 'Minimal fees and remarkable uptime with zero slashing penalties.',
  },
  {
    icon: IconHeartRateMonitor,
    title: 'Monitoring',
    description:
      'Proactive Monitoring to constant monitoring to detect and address potential issues before they impact the network.',
  },
  {
    icon: IconServer2,
    title: 'Decentralization',
    description:
      'We believe in decentralization as a solution to the problem of top level decision making everywhere, including the cloud industry',
  },
];

export function AboutUs() {
  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="md"
        // variant="gradient"
        // gradient={{ deg: 133, from: 'pink', to: 'yellow' }}
      >
        <feature.icon style={{ width: rem(26), height: rem(26) }} stroke={1.5} />
      </ThemeIcon>
      <Text fz="lg" mt="sm" fw={500}>
        {feature.title}
      </Text>
      <Text c="dimmed" fz="sm">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <div className={classes.wrapper} id="about" style={{ backgroundColor: '#040D12' }}>
      <Container size="lg" mt={20}>
        <Grid gutter={120}>
          <Grid.Col span={{ base: 12, md: 5 }} style={{ paddingLeft: '0px', paddingRight: '0px' }}>
            <div style={{ height: '500px', width: '500px' }}>
              <BlockchainAnimation />
            </div>
            {/* <Image src="/node-block.png" width={500} height={500} alt="Picture of the author" /> */}
            {/* <Image src="/buildingblock.svg" width={500} height={500} alt="Picture of the author" /> */}
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Title fz="md" mb="sm" c="pink">
              About Us
            </Title>
            <Title className={classes.title} order={2}>
              Your Trusted Validator & Interchain Utility
            </Title>
            <Text c="dimmed">
              Raven Node is a trusted validator & interchain utility provider with few simple steps
              you can delegate funds to our trusted validators or explore our services where you can
              find tools that will be useful for node operators and developers.
            </Text>
            <Space h="lg" />
            <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
              {items}
            </SimpleGrid>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}
