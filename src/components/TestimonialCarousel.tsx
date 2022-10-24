import { AppCard } from './AppCard'
import { Container, Group, Button, Text} from '@mantine/core';

export function TestimonialCarousel() {
    return (
        <Group position="apart">
          <Container size="xs" px="xs">
              <Button>Donate Now!</Button>
            </Container>
            <Container size="xs" px="xs">
              Carosel of avatar testimonals of those that have donated
              <AppCard></AppCard>
            </Container>
        </Group>
    )
}