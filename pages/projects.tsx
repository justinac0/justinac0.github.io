import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { Heading, SimpleGrid } from '@chakra-ui/layout'
import { FC } from 'react'

import ProjectCard from '@components/project-card'

import type { Card } from '@/types/mytypes'

import CARDS from '@/cards.json'

export const getStaticProps: GetStaticProps = () => {
    return {
        props: {
            cards: CARDS
        },
    }
}

const Projects: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ cards }) => {
    return (
        <>
            <Heading id="projects">PROJECTS</Heading>
            <SimpleGrid>
                {cards.map((card: Card) => (
                    <ProjectCard key={card.title} {...card} />
                ))}
            </SimpleGrid>
        </>
    )
}

export default Projects
