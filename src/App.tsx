import { AppShell, Header, Container, Group, Button, Stack, Footer, Text} from '@mantine/core';
import { HeroImageBackground } from './components/HeroImageBackground';
import { StoryCarousel } from './components/StoryCarousel';
import { TestimonialCarousel } from './components/TestimonialCarousel';
import { TextInfoLayer } from './components/TextInfoLayer';

export default function App () {
  return (
    <AppShell
      padding="md"
      header={<Header height={60} p="xs">Theme toggle and language button on left Header for logo and name in center. Donate Button needs to be added and pushed to the right.</Header>}
      footer={<Footer height={30} p="xs">Do we need a footer?</Footer>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      <Stack justify="space-between">
        <HeroImageBackground />
        <StoryCarousel />
        <TextInfoLayer />
        <TestimonialCarousel />
      </Stack>
    </AppShell>
  );
}