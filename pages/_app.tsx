import type { AppProps } from 'next/app'

import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react"

import NavBar from '@/components/navbar'

const theme = {
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
  },
};

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <NavBar />
      <Box as="main" maxWidth="md" m="0 auto">
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  )
}

export default App
