import { HStack, Text } from "@chakra-ui/layout"
// import { IconButton } from "@chakra-ui/react"
// import { FaGithub, FaLinkedin } from "react-icons/fa"


export const Footer = () => {
    return (
        <HStack w="100%" p="10px" bg="gray.700">
            <Text margin="auto" size="md" fontWeight="semibold" color="gray.100">
                Dani Martinez  &copy;{new Date().getFullYear()}
            </Text>
        </HStack>

    )
}

export default Footer