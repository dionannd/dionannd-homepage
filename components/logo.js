import Link from 'next/link';
import { Text, useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 40px;
  line-height: 20px;
  padding: 10px;
`;

const Logo = () => {
  return (
    <Link href='/' scroll={false} passHref>
      <LogoBox>
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily='"M PLUS Rounded 1c", sans-serif'
          fontWeight='bold'
          cursor='pointer'
        >
          Dian Ananda
        </Text>
      </LogoBox>
    </Link>
  );
};

export default Logo;
