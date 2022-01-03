import '@/styles/prism-vsc-dark-plus.css';

import type { AppProps } from 'next/app'
import { Box, ChakraProvider, extendTheme, ColorModeScript } from "@chakra-ui/react"
import NavBar from '@/components/navbar'
import style from '@/styles/default'
import Head from 'next/head';

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
      
      <Head>
        <title>justinac0 | Website</title>
        <link rel="icon"  type="image/x-icon" href='/'></link>
      </Head>

      <NavBar/>
      <Box as="main" maxWidth="md" m="0 auto" p={4}>
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  )
}

export default App