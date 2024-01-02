import React from 'react';
import { Stack, Flex, Box, Text, Button, Spacer } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/media-query';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

// import profilePhoto from '../assets/profilePic.jpg'

export const Header = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isNotSmallerScreen] = useMediaQuery('(min-width:800px)');

  return (
    <Stack
      p="0"
      m="0"
      ref={ref}
      style={{
        transform: isInView ? 'none' : 'translateX(-200px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s',
      }}
    >
      <Flex
        direction={isNotSmallerScreen ? 'row' : 'column'}
        spacing="200px"
        p={isNotSmallerScreen ? '4' : '0'}
        alignSelf="center"
      >
        <Box
          mt={isNotSmallerScreen ? '0' : '16'}
          alignSelf="center"
          textAlign="center"
        >
          <Stack isInline align="baseline" justifyContent="center">
            <Text fontSize="5xl" fontWeight="semibold">
              Hi, I am
            </Text>
            <Text
              fontSize="5xl"
              fontWeight="bold"
              bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
              bgClip="text"
            >
              Dani,
            </Text>
          </Stack>
          <Text fontWeight="bold" fontSize="3xl" color="gray.400">
            Front-End Developer{' '}
          </Text>
          <Spacer p="2" />

          <Text px="6">
            Hi, I'm a front-end developer skilled in creating visually appealing
            and user-friendly websites. I specialize in responsive design and
            dynamic animations, combining creativity with technical know-how.
            Let's turn your ideas into a seamless digital experience!
          </Text>

          <Button
            m="8"
            p="4"
            colorScheme="blue"
            align="center"
            _hover={{
              bg: 'cyan.600',
              color: 'gray.100',
            }}
            onClick={() =>
              window.open(
                'https://www.linkedin.com/in/daniela-mart%C3%ADnez-5935a9105/'
              )
            }
          >
            Contact me
          </Button>
        </Box>
      </Flex>
    </Stack>
  );
};
export default Header;
