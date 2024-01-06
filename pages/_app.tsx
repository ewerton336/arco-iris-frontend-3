import React from "react";
import Navbar from "@/components/navbar";
import { CssBaseline, Container } from "@mui/material";
import { AppProps } from "next/app"; // Importe o tipo AppProps do Next.js



function MyApp({ Component, pageProps }: AppProps) { // Use AppProps para tipar Component e pageProps
    return (
      <>
        <CssBaseline />
        <Navbar />
        <Container>
          <Component {...pageProps} />
        </Container>
      </>
    );
  }

export default MyApp;
