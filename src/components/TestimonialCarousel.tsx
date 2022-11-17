// @ts-nocheck
import { AppCard } from './AppCard';
import { Container, Group, Button, Text} from '@mantine/core';
import { copy_pt_fourth, copy_pt_fifth } from '../site-copy-pt';
import { useEffect, useState } from 'react';

export function TestimonialCarousel({lang}) {
  const [language, setLanguage] = useState(lang)

  useEffect(() => {
    setLanguage(lang)
    console.log("Lang is set to:", lang)
    console.log("Language is set to:", language)
  }, [lang])
  
    let topText, bottomText
    const topTextPT = copy_pt_fourth;
    const bottomTextPT = copy_pt_fifth;
    
    const topTextEng = "Top Text";
    const bottomTextEng = "BottomText"

    language === "English" ? topText = topTextEng : topText = topTextPT;
    language === "English" ? bottomText = bottomTextEng : bottomText = bottomTextPT;
    // const setLang = () => {
    // }

  
    return (
        <Group position="apart">
          <Container size="xs" px="xs">
              <Text>
                {topText}
              </Text>
              <Button>Donate Now!</Button>
              <Text>
                {bottomText}
              </Text>
            </Container>
            <Container size="xs" px="xs">
              <AppCard></AppCard>
              Carosel of avatar testimonals of those that have donated
            </Container>
        </Group>
    )
}