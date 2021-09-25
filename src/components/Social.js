import React from 'react';
import { HStack, Icon } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/media-query';
import { FaFacebookF, FaInstagram, FaSpotify, FaGithub } from 'react-icons/fa'

export const Social = () => {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:800px)");
    // const [isSmallestScreens] = useMediaQuery("(min-width:400px)");
    return (
        <HStack spacing={isNotSmallerScreen ? "12" : "8"}>
            <Icon as={FaFacebookF} boxSize="50" />
            <Icon as={FaInstagram} boxSize="50" />
            <Icon as={FaSpotify} boxSize="50" />
            <Icon as={FaGithub} boxSize="50" />
        </HStack>
    )
}
export default Social;