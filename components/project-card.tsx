import {
    Box,
    Heading,
    Text,
    Image,
    Link,
    Badge
} from "@chakra-ui/react"

import NextLink from "next/link"

import type { Card } from '@/types/mytypes'

const ProjectCard: React.FC<Card> = ({ children, title, description, imgSrc, github }) => {
    return (
        <Box mt={2} mb={2}>
            <Image src={imgSrc} p={0} m={0} alt="project card image missing..." objectFit={'cover'} borderTopWidth={'1.5ch'} borderLeftWidth={'1.5ch'} borderRightWidth={'1.5ch'} borderColor={'gray.700'} borderStyle={'solid'}></Image>
            <Heading p={2} size="md" color={'gray.100'} bg={'gray.700'}>{title}</Heading>
            <Text p={'1.5ch'} bg={'gray.900'}>
                {description}
                {github && (<><br /><br /><Badge variant="outline" colorScheme={'green'}><Link as={NextLink} href={github}>View Source</Link></Badge></>)}
            </Text>
        </Box>
    )
}

export default ProjectCard
