import '@/styles/prism-vsc-dark-plus.css';

import type { AppProps } from 'next/app'
import { Box, ChakraProvider, extendTheme, ColorModeScript } from "@chakra-ui/react"
import NavBar from '@/components/navbar'
import style from '@/styles/default'

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

const styles = {
  global: {
    ".blog-content": {
      ...style,
      "a": {
        "color": "blue.400",
        "text-decoration": "underline"
      },
    },
  },
};

const theme = extendTheme({ config, styles })

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}></ColorModeScript>
      <NavBar/>
      <Box as="main" maxWidth="md" m="0 auto">
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  )
}

export default App