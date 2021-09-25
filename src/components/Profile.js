import React from 'react';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Flex, Box, Heading, Text, Icon } from '@chakra-ui/react'
import { DiAndroid } from 'react-icons/di'

export const Profile = () => {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:800px)");
    return (
        <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%"
        >
            {/* maxWidth={{ base: "90vh", md: "100vh", lg: "100vh", xl: "100vh" }} */}

            {/* <Text fontWeight="bold" fontSize="2xl" color="gray.400" align="center">Web Developer </Text> */}
            <Box alignSelf="center" px="32" py="16">
                <Heading fontWeight="bold" color="cyan.500" size="2xl">
                    My projects
                </Heading>
            </Box>

            <Box alignSelf="center" px="32" py="16">

                <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8}>
                    <Flex rounded="xl" direction="column" mt={4} bg="blue.400" h="30vh" w="30vh" justify="flex-end">
                        <Icon color="white" p="4" as={DiAndroid} w="24" h="24" />
                        <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                            Project1
                        </Text>
                    </Flex>
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="gray.100" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "teal.400", }}>
                        <Icon color="black" p="4" as={DiAndroid} w="24" h="24" />
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                            Project2
                        </Text>
                    </Flex>
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="gray.100" h="30vh" w="30vh" justify="flex-end"
                        _hover={{ bg: "green.400", }}>
                        <Icon as={DiAndroid} p="4" w="24" h="24" color="black" />
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                            Project3
                        </Text>
                    </Flex>
                </Flex>
            </Box>
        </Flex >
    )
}
export default Profile;