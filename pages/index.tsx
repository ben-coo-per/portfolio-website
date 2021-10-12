import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { Nav, Footer, Container } from "components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ben Cooper</title>
        <meta name="description" content="Welcome to my website" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main>
        {/* <Image src="/landingImage.svg" width="370px" height="200px" /> */}
      </main>
    </>
  );
}
