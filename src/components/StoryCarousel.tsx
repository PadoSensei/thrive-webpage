import { Container, Group, Button, Text} from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { AppCard } from './AppCard';

export function StoryCarousel() {
    return (
        <Group position="apart">
          <Carousel sx={{ maxWidth: 320 }} mx="auto" withIndicators height={200}>
            <Carousel.Slide>
              <AppCard />
            </Carousel.Slide>
            <Carousel.Slide>
              <AppCard />
            </Carousel.Slide>
            <Carousel.Slide>
              <AppCard />
            </Carousel.Slide>
          </Carousel>
        </Group>

    )

}