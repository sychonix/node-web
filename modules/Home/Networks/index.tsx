'use client';

import { Title, Text, Card, SimpleGrid, Container, Space, Badge, Button } from '@mantine/core';
import Image from 'next/image';
import { useDisclosure } from '@mantine/hooks';
import { ComingSoonModal } from './ComingSoonModal';
import classes from './index.module.css';

const mockdata = [
  {
    title: 'Koii',
    // code: 'TIA',
    icon: '/networks/koii.png',
    status: 'Active',
    type: 'Testnet',
    monit: 'https://explorer.koii.live/address/BpHX5a7WEQYMek3MjaEtQENXmANkU894rFy6N3L1MUU1',
  },
  {
    title: 'Tangle',
    // code: 'TIA',
    icon: '/networks/tangle.png',
    status: 'Active',
    type: 'Testnet',
    monit:
      'https://telemetry.polkadot.io/#list/0x3d22af97d919611e03bbcbda96f65988758865423e89b2d99547a6bb61452db3',
  },
  {
    title: 'Juneo',
    // code: 'TIA',
    icon: '/networks/juneo.jpg',
    status: 'Active',
    type: 'Testnet',
    monit: 'https://mcnscan.io/chain/gr7AypMQYLdjGK9yLWQhDiSLACy2mChwqh6nxnygQmqGs241m',
  },
  {
    title: 'Arkeo',
    // code: 'TIA',
    icon: '/networks/arkeo.jpg',
    status: 'Archived',
    type: 'Testnet',
    monit:
      'https://testnet.arkeo.explorers.guru/validator/tarkeovaloper1fpsqsd70dfwpj0r5z3mwrur0uc7rh2w5fe262l',
  },
  {
    title: 'Over Protocol',
    // code: 'TIA',
    icon: '/networks/over-protocol.png',
    status: 'Archived',
    type: 'Testnet',
    monit: 'https://view.over.network/address/0x42351e363e1ea5385befa7b9628c8b8f0b124e88',
  },
];

export function Networks() {
  const [opened, { open, close }] = useDisclosure(false);
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
      <div style={{ display: 'flex' }}>
        <Button variant="filled" radius="md" mt="md" onClick={open}>
          Stake
        </Button>
        <Space w="sm" />
        {feature.monit && (
          <a href={feature.monit} target="_blank" rel="noreferrer">
            <Button variant="outline" radius="md" mt="md">
              Monit
            </Button>
          </a>
        )}
      </div>
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
        <ComingSoonModal opened={opened} onClose={close} />
      </div>
    </>
  );
}
