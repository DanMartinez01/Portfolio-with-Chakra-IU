import React from 'react';
import {
  ChakraProvider,
  extendTheme,
  Flex,
  Heading,
  Spacer,
  IconButton,
  VStack,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Header } from './components/Header';
import { Profile } from './components/Profile';
import { Social } from './components/Social';
import { TechStack } from './components/TechStack';
import { Footer } from './components/Footer';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: 'Rajdhani, sans-serif', // Replace with your desired font
      },
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <VStack>
        <Flex w="100%" p="10px">
          <Heading
            ml="8"
            size="md"
            fontWeight="semibold"
            color="cyan.400"
            fontFamily="Rajdhani, sans-serif"
          >
            Daniela Martinez
          </Heading>
          <Spacer />
          <ColorModeSwitcher isRound="true" mr="4px" />
          <IconButton
            icon={<FaGithub size="20px" />}
            isRound="true"
            mr="4px"
            onClick={() => window.open('https://github.com/DanMartinez01')}
          ></IconButton>
          <IconButton
            icon={<FaLinkedin size="20px" />}
            isRound="true"
            mr="4px"
            onClick={() =>
              window.open(
                'https://www.linkedin.com/in/daniela-mart%C3%ADnez-5935a9105/'
              )
            }
          ></IconButton>
        </Flex>
        <Header />
        <TechStack />
        <Profile />
        <Social />
        <Footer />
      </VStack>
    </ChakraProvider>
  );
}

export default App;
