import { Container, Title, Text, Button } from '@mantine/core';
import classes from './HeroImageRight.module.css';
import { FeatureSection } from '../Features';

export function HeroImageRight() {
  return (
    <div className={classes.root}>
      <Container size="lg" py={100}>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              <Text
                component="span"
                inherit
                c={'pink'}
                fw={700}
                // variant="gradient"
                // gradient={{ from: 'pink', to: 'yellow' }}
              >
                Raven
              </Text>{' '}
              Node, <br /> Connecting Blocks
            </Title>

            <Text className={classes.description} mt={30}>
              Independent node validator, ready to contribute to decentralized networks and foster
              innovation in the realm of blockchain technology.
            </Text>
            {/* <FeatureSection /> */}
            <Button
              //   variant="gradient"
              //   gradient={{ from: 'pink', to: 'yellow' }}
              size="xl"
              className={classes.control}
              mt={40}
            >
              Get started
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
