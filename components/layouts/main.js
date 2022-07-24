import Head from 'next/head';
import { Box, Container } from '@chakra-ui/react';
import Navbar from '../navbar';
import Footer from '../footer';

const Main = ({ children, router }) => {
  return (
    <Box as='main' pb={8}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content="Dion's homepage" />
        <meta name='author' content='dionannd' />
        <meta name='author' content='Dian Ananda' />
        <link rel='icon' href='/favicon.ico' />
        <meta name='twitter:title' content='Dian Ananda' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@dionannd' />
        <meta name='twitter:creator' content='@dionannd' />
        <meta property='og:site_name' content='Dian Ananda' />
        <meta name='og:title' content='Dian Ananda' />
        <meta property='og:type' content='website' />
        <title>Dian Ananda - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW='container.md' pt={14}>
        {children}

        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
