import type { AppProps } from 'next/app'

import { Box, ChakraProvider, extendTheme, ColorModeScript } from "@chakra-ui/react"

import NavBar from '@/components/navbar'

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

const theme = extendTheme({config})

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}></ColorModeScript>
      <NavBar />
      <Box as="main" maxWidth="md" m="0 auto">
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  )
}

export default App
