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
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Header } from './components/Header';
import { Profile } from './components/Profile';
import { Social } from './components/Social';
import { Footer } from './components/Footer';

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
        </Flex>
        <Header />
        <Social />
        <Profile />
        <Footer></Footer>
      </VStack>
    </ChakraProvider>
  );
}

export default App;
