'use client';

import { Container, Title, Accordion, Text } from '@mantine/core';
import classes from './index.module.css';

export function FAQ() {
  return (
    <div style={{ backgroundColor: '#040D12' }} id="faq">
      <Container size="sm" className={classes.wrapper}>
        <Title order={2} className={classes.title} ta="center" mt="sm">
          Frequently Asked Questions
        </Title>

        <Text c="dimmed" className={classes.description} ta="center" mt="md">
          Look through our most common FAQ below. Can't find an answer? Reach out to us at any time!
        </Text>

        <Accordion variant="separated" mt={50}>
          <Accordion.Item className={classes.item} value="reset-password">
            <Accordion.Control>What about reliability ?</Accordion.Control>
            <Accordion.Panel>
              We run nodes on dedicated servers in Europe, USA and Singapore. Our team uses
              monitoring tools 24/7 with Prometheus metrics, Grafana dashboard and telegram bots
              alerting system
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="another-account">
            <Accordion.Control>What about security ?</Accordion.Control>
            <Accordion.Panel>
              We use ssh keys to login in our servers and disable password login and configure a
              firewall with a limited connection. All our keys are stored in a safe place and we are
              using a hardware key where it is possible. Our priority is security and reliability of
              your funds.
            </Accordion.Panel>
          </Accordion.Item>

          {/* <Accordion.Item className={classes.item} value="newsletter">
          <Accordion.Control>How can I subscribe to monthly newsletter?</Accordion.Control>
          <Accordion.Panel>{placeholder}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="credit-card">
          <Accordion.Control>Do you store credit card information securely?</Accordion.Control>
          <Accordion.Panel>{placeholder}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="payment">
          <Accordion.Control>What payment systems to you work with?</Accordion.Control>
          <Accordion.Panel>{placeholder}</Accordion.Panel>
        </Accordion.Item> */}
        </Accordion>
      </Container>
    </div>
  );
}
