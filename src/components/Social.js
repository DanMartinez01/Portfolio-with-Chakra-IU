import React from 'react';
import { HStack, Icon, Heading, Flex, VStack } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/media-query';
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'
const MotionBox = motion(Box)

export const Social = () => {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:800px)");
    return (
        <Flex textAlign="center" >
            <VStack>
                <Heading fontWeight="bold" color="gray.400" size="2xl"
                    textAlign="center" p={isNotSmallerScreen ? "12" : "0"}>
                    Contact me:
                </Heading>
                <HStack spacing={isNotSmallerScreen ? "8" : "6"} alignItems="center" m="8px" p="8px" >
                    <Icon as={FaLinkedin} boxSize="35px"
                        onClick={() => window.open("https://www.linkedin.com/in/daniela-mart%C3%ADnez-5935a9105/")} />
                    <Icon as={FaGithub} boxSize="35px"
                        onClick={() => window.open("https://github.com/DanMartinez01")} />
                </HStack >
                <MotionBox
                    height='40px'
                    bg='red.300'
                    drag='x'
                    dragConstraints={{ left: -100, right: 100 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                />
            </VStack>
        </Flex>
    )
}
export default Social;