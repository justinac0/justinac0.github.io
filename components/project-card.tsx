import {
    Box,
    Heading,
    Text,
    Image,
    Skeleton,
    Link
} from "@chakra-ui/react"

import type { Card } from '@/types/mytypes'

const ProjectCard: React.FC<Card> = ({ title, description, imgSrc, github }) => {
    return (
        <Box mb={5} borderWidth={1} bg={"gray.800"} borderColor={"gray.700"} borderStyle={"solid"} boxShadow={"dark-lg"}>
            <Heading p={4} size="md" textAlign={"center"} color={'gray.100'} bg={'gray.700'}>{title}</Heading>
            <Skeleton isLoaded>
            <Image src={imgSrc} p={"1.5ch"}alt="project card image missing..." objectFit={'cover'}></Image>
            </Skeleton>
            {/* {github && (<Text textAlign={"center"} p={2}><u><b><Link as={NextLink} href={github}>View Source</Link></b></u></Text>)} */}
            <Text p={4} pt={1}>
                {description}
            </Text>
            {github && <Link as={'a'} href={github}><Text p={1} textAlign={'center'} color={'blue.400'}><u>view on github</u></Text></Link>}
        </Box>
    )
}

export default ProjectCard;
