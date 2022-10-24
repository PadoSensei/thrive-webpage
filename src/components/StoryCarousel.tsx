import { Container, Group, Button, Text} from '@mantine/core';
import { AppCard } from './AppCard';

export function StoryCarousel() {
    return (
        <Group position="apart">
          <Container size="xs" px="xs">
            <AppCard></AppCard>
          </Container>
          <Container size="xs" px="xs">
            <Button>Donate Now!</Button>
          </Container>
        </Group>

    )

}