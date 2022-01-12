import { Text, Flex, Heading, Box, Stack } from "@chakra-ui/layout"

import { useMediaQuery } from '@chakra-ui/media-query';
// import { IconButton } from "@chakra-ui/react"
// import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { DiCss3 } from 'react-icons/di';
// import { SiChakraui } from 'react-icons/si';


export const TechStack = () => {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:1200px)");
    return (
        <Flex direction={isNotSmallerScreen ? "row" : "column"}>
            <Box alignSelf="center" px="12" py="8" margin="auto" >
                <Heading fontWeight="bold" color="gray.400" size="2xl" textAlign="center" p={isNotSmallerScreen ? "12" : "0"}>
                    Tech stack:
                </Heading>
                <Flex direction={isNotSmallerScreen ? "row" : "column"} m="8px" p="12px">
                    <Box w="250px" rounded="12px" bg="gray.700" m="8px" _hover={{
                        bg: "gray.600",
                        mt: "2px"
                    }}>
                        <Stack align="baseline" alignItems="center" p="16px">
                            <Text fontWeight="semibold" color="white" size="2xl" textAlign="center">
                                React
                            </Text>
                            <FaReact color="white" size="30px" />
                        </Stack>
                    </Box>
                    <Box w="250px" rounded="12px" overflow="hidden" bg="gray.700" m="8px" _hover={{
                        bg: "gray.600",
                        mt: "2px"
                    }}>
                        <Stack align="baseline" alignItems="center" p="16px">
                            <Text fontWeight="semibold" color="white" size="2xl" textAlign="center">
                                JavaScript
                            </Text>
                            <IoLogoJavascript color="white" size="30px" />
                        </Stack>
                    </Box>
                    <Box w="250px" rounded="12px" overflow="hidden" bg="gray.700" m="8px" _hover={{
                        bg: "gray.600",
                        mt: "2px"
                    }}>
                        <Stack align="baseline" alignItems="center" p="16px">
                            <Text fontWeight="semibold" color="white" size="2xl" textAlign="center">
                                Css3
                            </Text>
                            <DiCss3 color="white" size="30px" />
                        </Stack>
                    </Box>
                    <Box w="250px" rounded="12px" overflow="hidden" bg="gray.700" m="8px" _hover={{
                        bg: "gray.600",
                        mt: "2px"
                    }}>
                        <Stack align="baseline" alignItems="center" p="16px">
                            <Text fontWeight="semibold" color="white" size="3xl" textAlign="center">
                                Chakra UI
                            </Text>
                            {/* <SiChakraui color="white" size="30px" /> */}
                            <FaReact color="white" size="30px" />
                        </Stack>
                    </Box>
                </Flex>
            </Box >
        </Flex >

    )
}

export default TechStack