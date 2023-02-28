import { Box, Container } from '@chakra-ui/react';
import Navbar from '../navbar';
import Footer from '../footer';
import Seo from '../seo';

const Main = ({ children, router }) => {
  return (
    <Box as='main' pb={8}>
      <Seo />

      <Navbar path={router.asPath} />

      <Container maxW='container.md' pt={20}>
        {children}
        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
