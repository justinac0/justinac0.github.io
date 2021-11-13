import type { AppProps } from 'next/app'

import { Box, ChakraProvider, Container } from "@chakra-ui/react"

import 'styles/global-style.css'
import NavBar from '@/components/navbar'

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <NavBar />
      <Box as="main" maxWidth="md" m="0 auto">
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  )
}

export default App
