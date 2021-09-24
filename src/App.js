import React from 'react';
import {
  ChakraProvider,
  Flex,
  Heading,
  Spacer,
  IconButton,
  VStack,
  theme,
} from '@chakra-ui/react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Header } from './components/Header';
import { Profile } from './components/Profile';
import { Social } from './components/Social';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <VStack p={5}>
        <Flex w="100%">
          <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">Dani Martinez</Heading>
          <Spacer />
          <ColorModeSwitcher isRound="true" />
          <IconButton icon={<FaGithub />} isRound="true" ></IconButton>
          <IconButton icon={<FaLinkedin />} isRound="true" ></IconButton>
          <IconButton icon={<FaInstagram />} isRound="true" ></IconButton>
        </Flex>
        <Header />
        <Profile />
        <Social />
      </VStack>
    </ChakraProvider>
  );
}

export default App;
