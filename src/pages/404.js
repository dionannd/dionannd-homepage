import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Text
} from '@chakra-ui/react';
import NextLink from 'next/link';

const NotFound = () => {
  return (
    <Container mt={6}>
      <Heading as='h1'>Not Found</Heading>
      <Text>The page you&apos;re looking for was not found</Text>

      <Divider my={6} />

      <Box my={6} align='center'>
        <Button as={NextLink} href='/'>
          <Button colorScheme='teal'>Return to home</Button>
        </Button>
      </Box>
    </Container>
  );
};

export default NotFound;
