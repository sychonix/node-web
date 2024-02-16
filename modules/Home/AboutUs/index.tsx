'use client';

import { Title, SimpleGrid, Text, em, ThemeIcon, Grid, rem, Container, Space } from '@mantine/core';
import {
  IconGauge,
  IconServer2,
  IconHeartRateMonitor,
  IconBusinessplan,
} from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';
import { BlockchainAnimation } from '@/components/BlockchainAnimation';
import classes from './index.module.css';

const features = [
  {
    icon: IconGauge,
    title: 'Always Online',
    description:
      'Our network nodes are duplicated and strategically dispersed across various data centers worldwide, ensuring continuous and uninterrupted service.',
  },
  {
    icon: IconBusinessplan,
    title: 'Fee',
    description: 'Sychonix Low Comission and Impressive Uptime with 0 Slashing!.',
  },
  {
    icon: IconHeartRateMonitor,
    title: 'Monitoring',
    description:
      'Sychonix is Highly secured with 24/7 Monitoring.',
  },
  {
    icon: IconServer2,
    title: 'Decentralization',
    description:
      'We believe in decentralization as a solution to the problem of top level decision making everywhere, including the cloud industry',
  },
];

export function AboutUs() {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
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
    <div
      className={classes.wrapper}
      id="about"
      style={{ backgroundColor: '#040D12', minHeight: '800px' }}
    >
      <Container size="lg" style={{ paddingTop: '80px' }}>
        <Grid gutter={120}>
          {isMobile ? null : (
            <Grid.Col
              span={{ base: 12, md: 5 }}
              style={{
                paddingLeft: '0px',
                paddingRight: '0px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  height: '500px',
                  width: '500px',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <BlockchainAnimation />
              </div>
            </Grid.Col>
          )}
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Title fz="md" mb="sm" c="pink">
              About Us
            </Title>
            <Title className={classes.title} order={2}>
              Your Trusted Validator & Interchain Utility
            </Title>
            <Text c="dimmed">
              Sychonix Node is a trusted validator & interchain utility provider with few simple steps
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
