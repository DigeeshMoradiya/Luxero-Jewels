import { Html, Head, Main, NextScript } from "next/document";
import { useState } from "react";
import Header from "./header";
import Footer from "./footer";

export default function Document() {

  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=GT+America+Trial:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poiret+One&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="antialiased">
        <Header />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  );
}
