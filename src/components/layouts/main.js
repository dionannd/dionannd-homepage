import { Box, Container } from '@chakra-ui/react';
import { Inter } from '@next/font/google';
import Navbar from '../navbar';
import Footer from '../footer';
import Seo from '../seo';
import { Fragment, useEffect, useState } from 'react';
import Loading from '../loading';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
});

const Main = ({ children, router }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Fragment>
      {loading ? (
        <Loading />
      ) : (
        <Box as='main' pb={8} className={inter.className}>
          <Seo />

          <Navbar path={router.asPath} />

          <Container maxW='container.md' pt={20}>
            {children}
            <Footer />
          </Container>
        </Box>
      )}
    </Fragment>
  );
};

export default Main;
