
import React from 'react';
import { Stack, Flex, Box, Text, Button, Spacer } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/media-query';

// import profilePhoto from '../assets/profilePic.jpg'

export const Header = () => {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:800px)");

    return (
        <Stack p="0" mb="2">
            {/* <Circle position="absolute" bg="blue.100" opacity="0.1" w="180px" h="180px" alignSelf="flex-end" /> */}
            <Flex direction={isNotSmallerScreen ? "row" : "column"}
                spacing="200px" p={isNotSmallerScreen ? "12" : "0"}
                alignSelf="center">
                <Box mt={isNotSmallerScreen ? "0" : "16"} alignSelf="center" textAlign="center">
                    <Stack isInline align="baseline" justifyContent="center">
                        <Text fontSize="5xl" fontWeight="semibold">Hi, I am</Text>
                        <Text fontSize="5xl" fontWeight="bold"
                            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text'>Dani,
                        </Text>
                    </Stack>
                    <Text fontWeight="bold" fontSize="3xl" color="gray.400">Front-End Developer </Text>
                    <Spacer p="4" />
                    <Text>Passionate about learning, self taught and detail-oriented</Text>
                    <Text>Experience in HTML, CSS, JavaScript and React</Text>
                    <Text>Always learning new technologies</Text>
                    <Button m="8" p="4" colorScheme="blue" align="center" _hover={{
                        bg: "cyan.600",
                        color: "gray.100"
                    }}
                        onClick={() => window.open("https://www.linkedin.com/in/daniela-mart%C3%ADnez-5935a9105/")}>
                        Contact me
                    </Button>
                </Box>
            </Flex>
        </Stack >
    )
}
export default Header;