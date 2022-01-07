import React from 'react';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Flex, Box, Link, Heading, Image, Stack } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import { FiLink } from 'react-icons/fi';
// import { FaShoppingCart } from 'react-icons/fa'
// import { BiStore } from 'react-icons/bi'
// import { GrGamepad } from "react-icons/gr";
// import { TiWeatherPartlySunny } from "react-icons/ti";
import RomaMuebles from '../assets/14.jpg';
import OtroCielo from '../assets/17.jpg';
import { FaGithub } from 'react-icons/fa';

export const Profile = () => {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:1200px)");
    return (
        <Flex direction={isNotSmallerScreen ? "row" : "column"}>
            <Box alignSelf="center" px="12" py="8" margin={"auto"} >
                <Heading fontWeight="bold" color="gray.400" size="2xl" textAlign="center" p={isNotSmallerScreen ? "12" : "0"}>
                    My projects
                </Heading>
                <Flex direction={isNotSmallerScreen ? "row" : "column"} m="8px" p="10px" >
                    <Box w="190px" rounded="20px" overflow="hidden" bg="gray.700" m="8px" _hover={{
                        width: "191px",
                        bg: "gray.600",
                    }}>
                        <Image src={RomaMuebles} height="110px" />
                        <Stack align="baseline">
                            <Box textAlign="center" p="4px" >
                                <Link href="https://www.romamuebles.com.ar/" isExternal
                                    color="white" alignSelf="center" fontSize="xl" fontWeight="semibold" textDecoration="none"
                                >
                                    Furniture Store
                                </Link>
                                <Link href="https://www.romamuebles.com.ar/" isExternal>
                                    <IconButton
                                        bgColor="inherit"
                                        aria-label='Link'
                                        size='lg'
                                        icon={<FiLink />}
                                    />
                                </Link>
                                <Link href="https://www.romamuebles.com.ar/" isExternal>
                                    <IconButton
                                        bgColor="inherit"
                                        aria-label='Link'
                                        size='lg'
                                        icon={<FaGithub />}
                                    />
                                </Link>
                            </Box>
                        </Stack>
                    </Box>
                    <Box w="190px" rounded="20px" overflow="hidden" bg="gray.700" boxShadow="sm" m="8px" _hover={{
                        width: "191px",
                        bg: "gray.600",
                    }}>
                        <Image src={OtroCielo} height="110px" />
                        <Stack align="baseline">
                            <Box textAlign="center" p="4px" >
                                <Link href="https://www.romamuebles.com.ar/" isExternal
                                    color="white" alignSelf="center" fontSize="xl" fontWeight="semibold" textDecoration="none"
                                >
                                    Furniture Store
                                </Link>
                                <Link href="https://www.romamuebles.com.ar/" isExternal>
                                    <IconButton
                                        bgColor="inherit"
                                        aria-label='Link'
                                        size='lg'
                                        icon={<FiLink />}
                                    />
                                </Link>
                                <Link href="https://www.romamuebles.com.ar/" isExternal>
                                    <IconButton
                                        bgColor="inherit"
                                        aria-label='Link'
                                        size='lg'
                                        icon={<FaGithub />}
                                    />
                                </Link>
                            </Box>
                        </Stack>
                    </Box>
                    <Box w="190px" rounded="20px" overflow="hidden" bg="gray.700" boxShadow="sm" m="8px" _hover={{
                        width: "191px",
                        bg: "gray.600",
                    }}>
                        <Image src={RomaMuebles} height="110px" />

                        <Stack align="baseline">
                            <Box textAlign="center" p="4px" >
                                <Link href="https://www.romamuebles.com.ar/" isExternal
                                    color="white" alignSelf="center" fontSize="xl" fontWeight="semibold" textDecoration="none"
                                >
                                    Furniture Store
                                </Link>
                                <Link href="https://www.romamuebles.com.ar/" isExternal>
                                    <IconButton
                                        bgColor="inherit"
                                        aria-label='Link'
                                        size='lg'
                                        icon={<FiLink />}
                                    />
                                </Link>
                                <Link href="https://www.romamuebles.com.ar/" isExternal>
                                    <IconButton
                                        bgColor="inherit"
                                        aria-label='Link'
                                        size='lg'
                                        icon={<FaGithub />}
                                    />
                                </Link>
                            </Box>
                        </Stack>
                    </Box>
                    <Box w="190px" rounded="20px" overflow="hidden" bg="gray.700" boxShadow="sm" m="8px" _hover={{
                        width: "191px",
                        bg: "gray.600",
                    }}>
                        <Image src={OtroCielo} height="110px" />
                        <Stack align="baseline">
                            <Box textAlign="center" p="4px" >
                                <Link href="https://www.romamuebles.com.ar/" isExternal
                                    color="white" alignSelf="center" fontSize="xl" fontWeight="semibold" textDecoration="none"
                                >
                                    Furniture Store
                                </Link>
                                <Link href="https://www.romamuebles.com.ar/" isExternal>
                                    <IconButton
                                        bgColor="inherit"
                                        aria-label='Link'
                                        size='lg'
                                        icon={<FiLink />}
                                    />
                                </Link>
                                <Link href="https://www.romamuebles.com.ar/" isExternal>
                                    <IconButton
                                        bgColor="inherit"
                                        aria-label='Link'
                                        size='lg'
                                        icon={<FaGithub />}
                                    />
                                </Link>
                            </Box>
                        </Stack>
                    </Box>
                </Flex>
            </Box>
        </Flex >
    )
}
export default Profile;