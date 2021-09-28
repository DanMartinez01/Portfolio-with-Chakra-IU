import React from 'react';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Flex, Box, Heading, Icon, Link } from '@chakra-ui/react'
import { FaShoppingCart } from 'react-icons/fa'
import { BiStore } from 'react-icons/bi'
import { CgPokemon } from 'react-icons/cg'

export const Profile = () => {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:800px)");
    return (
        <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%"
        >
            {/* maxWidth={{ base: "90vh", md: "100vh", lg: "100vh", xl: "100vh" }} */}

            {/* <Text fontWeight="bold" fontSize="2xl" color="gray.400" align="center">Web Developer </Text> */}
            <Box alignSelf="center" px="32" py="16">
                <Heading fontWeight="bold" color="cyan.500" size="2xl" textAlign="center">
                    My projects:
                </Heading>
            </Box>
            <Box alignSelf="center" px="24" py="8">
                <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8}>
                    <Flex rounded="xl" direction="column" mt={4} bg="blue.400" h="30vh" w="30vh" justify="flex-end">
                        <Icon color="white" p="4" as={FaShoppingCart} w="24" h="24" />
                        {/* <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                            E-commerce
                        </Text> */}
                        <Link href="https://app.netlify.com/sites/vigorous-wing-57f482/overview" isExternal
                            color="white" p="4" fontSize="xl" fontWeight="semibold" textDecoration="none"
                        >
                            E-commerce
                        </Link>
                    </Flex>
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="gray.100" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "teal.400", }}>
                        <Icon color="black" p="4" as={BiStore} w="24" h="24" />
                        <Link href="https://jovial-montalcini-dfa80d.netlify.app/" isExternal
                            color="black" p="4" fontSize="xl" fontWeight="semibold" textDecoration="none"
                        >
                            Furniture Store
                        </Link>
                    </Flex>
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="gray.100" h="30vh" w="30vh" justify="flex-end"
                        _hover={{ bg: "green.400", }}>
                        <Icon as={CgPokemon} p="4" w="24" h="24" color="black" />
                        <Link href="https://quizzical-yonath-ebc2f9.netlify.app/" isExternal
                            color="black" p="4" fontSize="xl" fontWeight="semibold" textDecoration="none"
                        >

                            PokeDex
                        </Link>
                    </Flex>
                </Flex>
            </Box>
        </Flex >
    )
}
export default Profile;