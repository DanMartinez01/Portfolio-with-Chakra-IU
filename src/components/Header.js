
import React from 'react';
import { Stack, Flex, Circle, Box, Text, Button, Image, Spacer } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/media-query';
export const Header = () => {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:800px)");


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
                    <Text> HTML-Css-JavaScript-React </Text>
                    <Button mt="8" colorScheme="blue" onClick={() => window.open("https://github.com/DanMartinez01")}>Hire me</Button>
                </Box>
                <Image mt={isNotSmallerScreen ? "0" : "12"} mb={isNotSmallerScreen ? "0" : "12"}
                    src="https://github.com/github.png?size=460" borderRadius="full" alignSelf="center" boxSize="300px"
                    backgroundColor="transparent" boxShadow="lg"
                />
            </Flex>
            <Text fontWeight="bold" fontSize="2xl" color="gray.400" align="center">Web Developer </Text>
            <Spacer />
        </Stack>
    )
}
export default Header;