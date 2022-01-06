import React from 'react';
import { HStack, Icon } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/media-query';
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export const Social = () => {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:800px)");
    return (
        <HStack spacing={isNotSmallerScreen ? "12" : "8"} p="8">
            <Icon as={FaLinkedin} boxSize="50"
                onClick={() => window.open("https://www.linkedin.com/in/daniela-mart%C3%ADnez-5935a9105/")} />
            <Icon as={FaGithub} boxSize="50"
                onClick={() => window.open("https://github.com/DanMartinez01")} />
        </HStack >
    )
}
export default Social;