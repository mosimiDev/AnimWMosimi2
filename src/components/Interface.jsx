import { Affix, Button, Stack, Text, Box, Container, useMatches, Group } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useCharacterAnimations } from '../contexts/CharactersAnimations';

const Interface = () => {
  const { animations, animationIndex, setAnimationIndex } =
    useCharacterAnimations();

  // Function to go to the next animation
  const nextAnimation = () => {
    const nextIndex = (animationIndex + 1) % animations.length; // Wraps around to the first animation
    setAnimationIndex(nextIndex);
  };

  const getTextContent = (index) => {
    switch (index) {
      case 0:
        return "Be happy with swiftpay";
      case 1:
        return "Bounce beyond limits online";
      case 2:
        return "Walk with confidence knowing your savings are well protected.";
      default:
        return "Walk with confidence knowing your savings are well protected.";
    }
 };
  // Conditional rendering based on the selected animation index
 const size = useMatches({
   xs:200,
   sm: 400,
   md: 500,
   lg: 600,
   xl: 700,
 });

 
  

  return (
    <>
      <Affix position={{ bottom: 550, right: size }}>
        <Box w={300} px={{ base: "xs", sm: "md", lg: "2xl" }} mx="auto">
          <Text c="blue.8" fz="xl" ta="center" fw={700}>
            {/* Display dynamic text based on the selected animation */}
            {getTextContent(animationIndex)}
          </Text>
        </Box>
      </Affix>

      <Group justify='center'>
        {/* Only one button is displayed */}
        <Button onClick={nextAnimation}>Next</Button>
      </Group>
    </>
    // <div>hello</div>
  );
};
export default Interface;