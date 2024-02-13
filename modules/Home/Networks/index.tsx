'use client';

import { Title, Text, Card, SimpleGrid, Container, Space, Badge } from '@mantine/core';
import Image from 'next/image';
import classes from './index.module.css';

const mockdata = [
  {
    title: 'Tangle',
    // code: 'TIA',
    icon: '/networks/tangle.png',
    status: 'Active',
    type: 'Testnet',
  },
  {
    title: 'Juneo',
    // code: 'TIA',
    icon: '/networks/juneo.jpg',
    status: 'Active',
    type: 'Testnet',
  },
  {
    title: 'Arkeo',
    // code: 'TIA',
    icon: '/networks/arkeo.jpg',
    status: 'Archived',
    type: 'Testnet',
  },
  {
    title: 'Over Protocol',
    // code: 'TIA',
    icon: '/networks/over-protocol.png',
    status: 'Archived',
    type: 'Testnet',
  },
];

export function Networks() {
  const features = mockdata.map((feature, index) => (
    <Card key={index} shadow="md" radius="md" className={classes.card} padding="md">
      <div style={{ display: 'flex' }}>
        <Image src={feature.icon} alt="hero" width="54" height="54" />
        <div style={{ paddingLeft: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Text fz="md" fw={500}>
              {feature.title}
            </Text>
            {/* {feature.code && (
              <Text fz="sm" c="dimmed" style={{ paddingLeft: '6px' }}>
                {feature.code}
              </Text>
            )} */}
          </div>
          <div style={{ display: 'flex', marginTop: '6px' }}>
            <Badge variant="light" size="sm">
              {feature.type}
            </Badge>
            <Space w="xs" />
            <Badge size="sm" variant="dot" color={feature.status === 'Active' ? 'green' : 'red'}>
              {feature.status}
            </Badge>
          </div>
        </div>
      </div>
      {/* <Text fz="sm" mt="sm">
        {feature.description}
      </Text> */}
      {/* <div style={{ display: 'flex' }}>
        <Button variant="filled" radius="md" mt="md">
          Monit
        </Button>
        <Space w="sm" />
        <Button variant="outline" radius="md" mt="md">
          Stake
        </Button>
      </div> */}
    </Card>
  ));

  return (
    <>
      <div id="network" style={{ minHeight: '800px' }}>
        <Container size="lg" style={{ paddingTop: '100px' }}>
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
