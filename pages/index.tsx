import type { NextPage } from 'next'

import {
  Heading,
  Text,
} from "@chakra-ui/react"

const IndexPage: NextPage = () => {
  return (
    <>
      <Heading mb={2} id="about">ABOUT</Heading>
      <Text>
        {/* get this from some file probably */}
        Hello! My name is Justin, I'm a Software Developer based in Australia. I{"'"}m currently studying
        Computer Science and Physics at university. My interests are graphics programming, visual design and music. You can view my projects at the showcase link above.
        {/* Also keep an eye out for blogs, I{"'"}ll be posting soon. If you would like to contact me with any questions, suggestions or feedback you can send me a message <Link color="yellow.400" textDecoration="underline">HERE!</Link>  */}
      </Text>
    </>
  )
}

export default IndexPage
