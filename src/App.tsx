// @ts-nocheck
import { AppShell, Header, Container, Group, Button, Stack, Footer, Text} from '@mantine/core';
import { useState } from 'react';
import { HeroImageBackground } from './components/HeroImageBackground';
import { StoryCarousel } from './components/StoryCarousel';
import { TestimonialCarousel } from './components/TestimonialCarousel';
import { TextInfoLayer } from './components/TextInfoLayer';
import { copy_pt_sixth } from './site-copy-pt';



export default function App () {
  const [language, setLanguage] = useState("English")

  const toggleLanguage = (lang) => {
    setLanguage(lang)
    console.log(language)
  }

  return (
    <AppShell
      padding="md"
      header={<Header height={60} p="xs">Needs Something</Header>}
      footer={<Footer height={30} p="xs">{copy_pt_sixth}</Footer>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
        <Button onClick={() => toggleLanguage("English")}>English</Button>
        <Button onClick={() => toggleLanguage("Portuguese")}>Portuguese</Button>
      <Stack justify="space-between">
        <HeroImageBackground />
        <StoryCarousel />
        <TextInfoLayer />
        <TestimonialCarousel lang={language}/>
      </Stack>
    </AppShell>
  );
}