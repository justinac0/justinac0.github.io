import {
    Box,
    Heading,
    Text,
    Image,
} from "@chakra-ui/react"

import type { Card } from '@/types/mytypes'

const ProjectCard: React.FC<Card> = ({ title, description, imgSrc, github }) => {
    return (
        <Box mb={5} borderWidth={1} borderColor={"gray.600"} borderStyle={"solid"} boxShadow={"dark-lg"}>
            <Heading p={4} size="md" textAlign={"center"} color={'gray.100'} bg={'gray.700'}>{title}</Heading>
            <Image src={imgSrc} p={"1.5ch"} bg={"gray.900"}alt="project card image missing..." objectFit={'cover'}></Image>
            {/* {github && (<Text textAlign={"center"} p={2}><u><b><Link as={NextLink} href={github}>View Source</Link></b></u></Text>)} */}
            <Text p={'1.5ch'} bg={'gray.900'}>
                {description}
            </Text>
        </Box>
    )
}

export default ProjectCard
