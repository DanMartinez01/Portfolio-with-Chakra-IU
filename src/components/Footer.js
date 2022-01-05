import { HStack, Text, Divider } from "@chakra-ui/layout"


export const Footer = () => {
    return (
        <HStack>
            <Divider orientation='horizontal' color="red.400" type="solid" w="25vh" />
            <Text align="center">
                &copy;{new Date().getFullYear()}
            </Text>
            <Divider orientation='horizontal' color="red.400" type="solid" w="25vh" />
        </HStack>

    )
}

export default Footer