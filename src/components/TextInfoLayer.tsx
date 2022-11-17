import { Container, Group, Button, Text} from '@mantine/core';
import { copy_pt_first,
  copy_pt_second,
  copy_pt_third,
  copy_pt_fourth,
  copy_pt_fifth,} from '../site-copy-pt';

export function TextInfoLayer() {
    return (
        <Container>
        <Text size="md">
          {copy_pt_first}
        </Text>
        <Text size="md">
          {copy_pt_second}
        </Text>
        <Text size="md">
          {copy_pt_third}
        </Text>
      </Container>
    )
}