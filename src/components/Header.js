
import React from 'react';
import { Stack, Flex, Circle, Box, Text, Button, Image, Spacer } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/media-query';

import profilePhoto from '../assets/profilePic.jpg'

export const Header = () => {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:800px)");

    return (
        <Stack>
            <Circle position="absolute" bg="blue.100" opacity="0.1" w="180px" h="180px" alignSelf="flex-end" />
            <Flex direction={isNotSmallerScreen ? "row" : "column"}
                spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
                alignSelf="flex-start">
                <Box mt={isNotSmallerScreen ? "0" : 16} alignSelf="flex-start">
                    <Text fontSize="4xl" fontWeight="semibold">Hi, I am</Text>
                    <Text fontSize="6xl" fontWeight="bold"
                        bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text'>Dani
                    </Text>
                    <Text> HTML-Css-JavaScript-React </Text>
                    <Button mt="8" colorScheme="blue" alignSelf="center"
                        onClick={() => window.open("https://www.linkedin.com/in/daniela-mart%C3%ADnez-5935a9105/")}>
                        Contact me
                    </Button>
                </Box>
                <Image mt={isNotSmallerScreen ? "0" : "12"} mb={isNotSmallerScreen ? "0" : "12"}
                    src={profilePhoto} borderRadius="full" alignSelf="center" boxSize="180px"
                    backgroundColor="transparent" boxShadow="lg"
                />
            </Flex>
            <Text fontWeight="bold" fontSize="2xl" color="gray.400" align="center">Web Developer </Text>
            <Spacer />
        </Stack>
    )
}
export default Header;