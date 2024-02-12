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
  TextInput,
  Textarea,
  Group,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import Image from 'next/image';
import classes from './index.module.css';

export function ContactUs() {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });
  return (
    <div className={classes.wrapper}>
      <Container size="lg">
        <Title order={2} className={classes.title} ta="center" mt="sm">
          Contact Us
        </Title>
        <Text c="dimmed" className={classes.description} ta="center" mt="md">
          For any questions regarding our services, please fill out this form or contact us directly
          via the contact listed.
        </Text>

        <form onSubmit={form.onSubmit(() => {})}>
          <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
            <TextInput
              label="Name"
              placeholder="Your name"
              name="name"
              {...form.getInputProps('name')}
            />
            <TextInput
              label="Email"
              placeholder="Your email"
              name="email"
              {...form.getInputProps('email')}
            />
          </SimpleGrid>

          <TextInput
            label="Subject"
            placeholder="Subject"
            mt="md"
            name="subject"
            {...form.getInputProps('subject')}
          />
          <Textarea
            mt="md"
            label="Message"
            placeholder="Your message"
            maxRows={10}
            minRows={5}
            autosize
            name="message"
            {...form.getInputProps('message')}
          />

          <Group justify="center" mt="xl">
            <Button type="submit" size="md">
              Send message
            </Button>
          </Group>
        </form>
      </Container>
    </div>
  );
}
