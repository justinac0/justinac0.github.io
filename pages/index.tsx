import type { NextPage } from 'next'
import {
  Heading,
  Text,
} from "@chakra-ui/react"

import {
  Link,
} from "@chakra-ui/react"

const IndexPage: NextPage = () => {
  return (
    <>
      <Heading mb={2} id="about">ABOUT</Heading>
      <Text>
        Hello! My name is Justin, I'm a Software Developer based in Australia. I'm an undergrad in IT/Science (majoring in Computer Science and Physics respectively).
        This is my central public facing archive where projects, blogs and updates will be posted for later viewing for those who may have similar interests, and future employers.
      </Text>
      <br/>
      <Text>
        If you have any queries feel free to send me an <u><b><Link as={'a'} href="mailto:contact.justinac@gmail.com">email!</Link></b></u>
        </Text>
      <br/>
      <Text>Thanks for dropping by!</Text>
    </>
  )
}

export default IndexPage;
