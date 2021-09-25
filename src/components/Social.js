import { HStack, Icon } from '@chakra-ui/react';
import React from 'react';
import { FaFacebookF, FaInstagram, FaSpotify, FaGithub } from 'react-icons/fa'

export const Social = () => {
    return (
        <HStack spacing="20">
            <Icon as={FaFacebookF} boxSize="50" />
            <Icon as={FaInstagram} boxSize="50" />
            <Icon as={FaSpotify} boxSize="50" />
            <Icon as={FaGithub} boxSize="50" />
        </HStack>
    )
}
export default Social;