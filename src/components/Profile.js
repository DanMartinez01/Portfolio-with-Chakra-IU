import React from 'react';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Flex, Box, Link, Heading, Image, Stack } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import { FiLink } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import RomaMuebles from '../assets/14.jpg';
import OtroCielo from '../assets/17.jpg';
import VcScreen from '../assets/vcscreen.JPG';


export const Profile = () => {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:1200px)");
    return (
        <Flex direction={isNotSmallerScreen ? "row" : "column"}>
            <Box alignSelf="center" px="12" py="8" margin={"auto"} >
                <Heading fontWeight="bold" color="gray.400" size="2xl" textAlign="center" p={isNotSmallerScreen ? "12" : "0"}>
                    My projects:
                </Heading>
                <Flex direction={isNotSmallerScreen ? "row" : "column"} m="8px" p="10px">
                    <Box w="250px" rounded="12px" overflow="hidden" bg="gray.700" m="8px" _hover={{
                        bg: "gray.600",
                        mt: "2px"
                    }}>
                        <Image src={RomaMuebles} width="250px" height="110px" />
                        <Stack align="baseline" alignItems="center">
                            <Box textAlign="center" p="10px" align="baseline" >
                                <Link href="https://www.romamuebles.com.ar/" isExternal
                                    color="white" fontSize="xl"
                                    fontWeight="semibold" textDecoration="none"
                                >
                                    Furniture Store
                                </Link>
                                <br />
                                <Link href="https://www.romamuebles.com.ar/" isExternal>
                                    <IconButton
                                        bgColor="inherit"
                                        aria-label='Link'
                                        size='lg'
                                        icon={<FiLink />}
                                    />
                                </Link>
                                <Link href="https://github.com/DanMartinez01/RomaMueblesStore" isExternal>
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
                    <Box w="250px" rounded="12px" overflow="hidden" bg="gray.700" m="8px" _hover={{
                        bg: "gray.600",
                        mt: "2px"
                    }}>
                        <Image src={OtroCielo} width="250px" height="110px" />
                        <Stack align="baseline" alignItems="center">
                            <Box textAlign="center" p="10px" align="baseline" >
                                <Link href="https://otrocielostore.netlify.app/" isExternal
                                    color="white" fontSize="xl"
                                    fontWeight="semibold" textDecoration="none"
                                >
                                    OtroCielo
                                </Link>
                                <br />
                                <Link href="https://otrocielostore.netlify.app/" isExternal>
                                    <IconButton
                                        bgColor="inherit"
                                        aria-label='Link'
                                        size='lg'
                                        icon={<FiLink />}
                                    />
                                </Link>
                                <Link href="https://github.com/DanMartinez01/otrocielo-ecommerce" isExternal>
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
                    <Box w="250px" rounded="12px" overflow="hidden" bg="gray.700" m="8px" _hover={{
                        bg: "gray.600",
                        mt: "2px"
                    }}>
                        <Image src={VcScreen} width="250px" height="110px" />
                        <Stack align="baseline" alignItems="center">
                            <Box textAlign="center" p="10px" align="baseline" >
                                <Link href="https://www.romamuebles.com.ar/" isExternal
                                    color="white" fontSize="xl"
                                    fontWeight="semibold" textDecoration="none"
                                >
                                    VcBeauty
                                </Link>
                                <br />
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
                    {/* <Box w="250px" rounded="12px" overflow="hidden" bg="gray.700" m="8px" _hover={{
                        bg: "gray.600",
                        mt: "2px"
                    }}>
                        <Image src={OtroCielo} width="250px" height="110px" />
                        <Stack align="baseline" alignItems="center">
                            <Box textAlign="center" p="10px" align="baseline" >
                                <Link href="https://www.romamuebles.com.ar/" isExternal
                                    color="white" fontSize="xl"
                                    fontWeight="semibold" textDecoration="none"
                                >
                                    Furniture Store
                                </Link>
                                <br />
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
                    </Box> */}
                </Flex>
            </Box>
        </Flex >
    )
}
export default Profile;