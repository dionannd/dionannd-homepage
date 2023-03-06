import { Flex, Spinner, Text } from '@chakra-ui/react';

const Loading = () => {
  return (
    <Flex
      alignItems='center'
      justifyContent='center'
      flexDirection='column'
      height='30vh'
    >
      <Spinner size='xl' />
      <Text mt={4}>Loading...</Text>
    </Flex>
  );
};

export default Loading;
