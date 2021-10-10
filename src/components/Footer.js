import { HStack, Text } from "@chakra-ui/layout"



export const Footer = () => {
    return (
        <HStack>
            <Text>
                &copy;{new Date().getFullYear()}
            </Text>
        </HStack>

    )
}

export default Footer