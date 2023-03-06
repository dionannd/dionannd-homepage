import { Box, Container } from '@chakra-ui/react';
import { Inter } from '@next/font/google';
import Navbar from '../navbar';
import Footer from '../footer';
import Seo from '../seo';
import LoadingIndicator from '../loading-indicator';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
});

const Main = ({ children, router }) => {
  return (
    <Box as='main' pb={8} className={inter.className}>
      <Seo />

      <Navbar path={router.asPath} />

      <Container maxW='container.md' pt={20}>
        <LoadingIndicator />
        {children}
        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
