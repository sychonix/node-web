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
        <Grid gutter={120}>
          <Grid.Col span={{ base: 12, md: 7 }}>
            <form onSubmit={form.onSubmit(() => {})}>
              <Title
                order={2}
                size="h1"
                style={{ fontFamily: 'Greycliff CF, var(--mantine-font-family)' }}
                fw={900}
                ta="center"
              >
                Get in touch
              </Title>

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
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Image src="/contactus.svg" width={500} height={500} alt="Picture of the author" />
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}
