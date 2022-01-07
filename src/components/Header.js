
import React from 'react';
import { Stack, Flex, Box, Text, Button } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/media-query';

// import profilePhoto from '../assets/profilePic.jpg'

export const Header = () => {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:800px)");

    return (
        <Stack>
            {/* <Circle position="absolute" bg="blue.100" opacity="0.1" w="180px" h="180px" alignSelf="flex-end" /> */}
            <Flex direction={isNotSmallerScreen ? "row" : "column"}
                spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
                alignSelf="center">
                {/* <Image
                    src={profilePhoto} borderRadius="full" alignSelf="center" boxSize="140px"
                    backgroundColor="transparent" boxShadow="lg"
                /> */}
                <Box mt={isNotSmallerScreen ? "0" : "16"} alignSelf="center" textAlign="center">
                    <Stack isInline align="baseline">
                        <Text fontSize="5xl" fontWeight="semibold">Hi, I am</Text>
                        <Text fontSize="5xl" fontWeight="bold"
                            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text'>Dani,
                        </Text>
                    </Stack>
                    <Text fontWeight="bold" fontSize="3xl" color="gray.400">Front-End Developer </Text>
                    <Button m="8" p="4" colorScheme="blue" align="center" _hover={{
                        bg: "cyan.600",
                        color: "gray.100"
                    }}
                        onClick={() => window.open("https://www.linkedin.com/in/daniela-mart%C3%ADnez-5935a9105/")}>
                        Contact me
                    </Button>
                </Box>
            </Flex>
            {/* <Text align="center">JavaScript-React </Text> */}
        </Stack >
    )
}
export default Header;