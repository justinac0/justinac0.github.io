import {
    Container,
    Box,
    Avatar,
    HStack,
    Heading,
    Link
} from "@chakra-ui/react"

import NextLink from "next/link"

const NavBar: React.FC = ({ children, ...props}) => {
    return (
        <Container p={2} maxW="container.md" position="sticky" top="0" w="100%" m="0 auto" bg={"gray.800"}{...props}>
            <HStack spacing={4}>
                <Box>
                    <Avatar size="md" name="Justin Chappell" src="/spaceman.png"></Avatar>
                </Box>
                <Box>
                <Heading size="md" p={1} textTransform={'uppercase'}>Justin Chappell</Heading>
                </Box>
            </HStack>
            <HStack spacing={4} mt={2}>
                <NextLink href={'/'} passHref><Link color={"red.400"} fontWeight={"bold"}>ABOUT</Link></NextLink>
                <NextLink href={'/projects'} passHref><Link color={"green.400"} fontWeight={"bold"}>PROJECTS</Link></NextLink>
                <NextLink href={'/blogs'} passHref><Link color={"blue.400"} fontWeight={"bold"}>BLOGS</Link></NextLink>
            </HStack>
        </Container>
    )
}

export default NavBar
