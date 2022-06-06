import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      {/* @ts-ignore */}
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
