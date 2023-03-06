import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Flex, Spinner, Text } from '@chakra-ui/react';

const LoadingIndicator = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    };

    const handleComplete = () => {
      setLoading(false);
    };

    router.events.on('hashChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.on('hashChangeStart', handleStart);
      router.events.on('routeChangeComplete', handleComplete);
      router.events.on('routeChangeError', handleComplete);
    };
  }, [router]);

  return loading ? (
    <Flex
      alignItems='center'
      justifyContent='center'
      flexDirection='column'
      height='20vh'
    >
      <Spinner size='xl' />
      <Text mt={4}>Loading...</Text>
    </Flex>
  ) : null;
};

export default LoadingIndicator;
