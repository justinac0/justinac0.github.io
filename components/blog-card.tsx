import { Box, Link, Text, Heading, HStack, Spacer } from "@chakra-ui/react"
import NextLink from "next/link"
import { Post } from "@/lib/posts"

export async function getStaticProps() {
    return {
        props: {
        }
    }
  }

const BlogCard: React.FC<Post> = (data) => {
    const title_color = data.published ? "gray.700" : "red.700"; 
    return (
        <Box mb={5} borderWidth={1} bg={title_color} borderColor={title_color} borderStyle={"solid"} boxShadow={"dark-lg"}>
            <HStack p={4}>
                <Heading size="md">{data.published ? "" : "[DRAFT] "}{data.heading}</Heading>
                <Spacer/>
                <Heading size="sm" color={'gray.400'}>{data.date}</Heading>
            </HStack>
            <Box p={'1.5ch'} bg={'gray.800'}>
                <Text pt={3}>{data.desc}</Text>
                <Text mb={4} color={"gray.400"}>{data.preview}</Text>
                <NextLink href={'/blogs/' + data.filename} passHref><Link fontWeight={"bold"} color={"blue.400"}>Read More</Link></NextLink>
            </Box>
        </Box>
    )
}

export default BlogCard
