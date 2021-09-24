
import React from 'react';
import { Stack, Flex, Circle, Box, Text, Button } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/media-query';
export const Header = () => {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");


    return (
        <Stack>
            <Circle position="absolute" bg="blue.100" opacity="0.1" w="300px" h="300px" alignSelf="flex-end" />
            <Flex direction={isNotSmallerScreen ? "row" : "column"}
                spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
                alignSelf="flex-start">
                <Box mt={isNotSmallerScreen ? "0" : 16} alignSelf="flex-start">
                    <Text fontSize="4xl" fontWeight="semibold">Hi, I am</Text>
                    <Text fontSize="6xl" fontWeight="bold"
                        bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text'>Dani
                    </Text>
                    <Text>GDE - Flutter, Firebase. Founder of https://codepur.dev & https://velocityx.dev.
                        Building @frontierdotxyz, YouTuber & Entrepreneur 🗣</Text>
                </Box>
                <Button mt="8" colorScheme="blue" onClick={() => window.open("https://github.com/DanMartinez01")}>Hire me</Button>
            </Flex>
        </Stack>
    )
}
export default Header;