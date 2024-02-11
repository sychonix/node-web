'use client';

import { Title, Text, Card, SimpleGrid, Container, Button, Space, Badge } from '@mantine/core';
import { IconGauge, IconUser, IconHeartRateMonitor } from '@tabler/icons-react';
import Image from 'next/image';
import classes from './index.module.css';

const mockdata = [
  {
    title: 'Celestia',
    code: 'TIA',
    description:
      'This dust is actually a powerful poison that will even make a pro wrestler sick, ',
    icon: IconGauge,
    status: 'Active',
    type: 'Testnet',
  },
  {
    title: 'Celestia',
    code: 'TIA',
    description:
      'This dust is actually a powerful poison that will even make a pro wrestler sick, ',
    icon: IconUser,
    status: 'Active',
    type: 'Testnet',
  },
  {
    title: 'Celestia',
    code: 'TIA',
    description:
      'This dust is actually a powerful poison that will even make a pro wrestler sick, ',
    icon: IconHeartRateMonitor,
    status: 'Active',
    type: 'Testnet',
  },
  {
    title: 'Celestia',
    code: 'TIA',
    description:
      'This dust is actually a powerful poison that will even make a pro wrestler sick, ',
    icon: IconHeartRateMonitor,
    status: 'Archived',
    type: 'Mainnet',
  },
  {
    title: 'Celestia',
    code: 'TIA',
    description:
      'This dust is actually a powerful poison that will even make a pro wrestler sick, ',
    icon: IconGauge,
    status: 'Archived',
    type: 'Mainnet',
  },
  {
    title: 'Celestia',
    code: 'TIA',
    description:
      'This dust is actually a powerful poison that will even make a pro wrestler sick, ',
    icon: IconUser,
    status: 'Archived',
    type: 'Mainnet',
  },
  {
    title: 'Celestia',
    code: 'TIA',
    description:
      'This dust is actually a powerful poison that will even make a pro wrestler sick, ',
    icon: IconHeartRateMonitor,
    status: 'Archived',
    type: 'Mainnet',
  },
  {
    title: 'Celestia',
    code: 'TIA',
    description:
      'This dust is actually a powerful poison that will even make a pro wrestler sick, ',
    icon: IconHeartRateMonitor,
    status: 'Archived',
    type: 'Testnet',
  },
];

export function Networks() {
  const features = mockdata.map((feature, index) => (
    <Card key={index} shadow="md" radius="md" className={classes.card} padding="md">
      <div style={{ display: 'flex' }}>
        <Image
          src="https://raw.githubusercontent.com/StakeLab-Zone/chains-logo/main/celestia.svg"
          alt="hero"
          width="54"
          height="54"
        />
        <div style={{ paddingLeft: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Text fz="md" fw={500}>
              {feature.title}
            </Text>
            <Text fz="sm" c="dimmed" style={{ paddingLeft: '6px' }}>
              {feature.code}
            </Text>
          </div>
          <div style={{ display: 'flex' }}>
            <Badge variant="light" size="sm">
              {feature.type}
            </Badge>
            <Space w="xs" />
            <Badge size="sm" variant="dot" color={feature.status === 'Active' ? 'red' : 'green'}>
              {feature.status}
            </Badge>
          </div>
        </div>
      </div>
      <Text fz="sm" mt="sm">
        {feature.description}
      </Text>
      <div style={{ display: 'flex' }}>
        <Button variant="filled" radius="md" mt="md">
          Monit
        </Button>
        <Space w="sm" />
        <Button variant="outline" radius="md" mt="md">
          Stake
        </Button>
      </div>
    </Card>
  ));

  return (
    <>
      <div id="network">
        <Container size="lg" py="xl">
          <Title order={2} className={classes.title} ta="center" mt="sm">
            Our Networks
          </Title>
          <Text c="dimmed" className={classes.description} ta="center" mt="md">
            Our wide range of dedicated servers are monitored 24/7 by our team to ensure our network
            is always up and always helping you earn rewards
          </Text>
          <SimpleGrid cols={{ base: 1, md: 4 }} spacing="lg" mt={50}>
            {features}
          </SimpleGrid>
        </Container>
      </div>
    </>
  );
}
