import { HStack, Text, Divider } from "@chakra-ui/layout"


export const Footer = () => {
    return (
        <HStack>
            <Divider orientation='horizontal' color="red.400" type="solid" />
            <Text align="center">
                &copy;{new Date().getFullYear()}
            </Text>
            <Divider orientation='horizontal' color="red.400" type="solid" />
        </HStack>

    )
}

export default Footer