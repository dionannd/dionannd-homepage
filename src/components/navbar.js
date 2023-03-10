import NextLink from 'next/link';
import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue
} from '@chakra-ui/react';
import { DownloadIcon, HamburgerIcon } from '@chakra-ui/icons';
import Logo from '@/components/logo';
import ThemeToggleButton from './theme-toggle-button';
import { forwardRef } from 'react';

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900');

  return (
    <Link
      as={NextLink}
      href={href}
      passHref
      scroll={false}
      p={2}
      bg={active ? 'grassTeal' : undefined}
      color={active ? '#202023' : inactiveColor}
      target={target}
      {...props}
    >
      {children}
    </Link>
  );
};

const MenuLink = forwardRef((props, ref) => (
  <Link passHref ref={ref} as={NextLink} {...props}></Link>
));

const Navbar = props => {
  const { path } = props;

  return (
    <Box
      position='fixed'
      as='nav'
      w='100%'
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display='flex'
        p={2}
        maxW='container.md'
        wrap='wrap'
        alignItems='center'
        justifyContent='space-between'
      >
        <Flex alignItems='center' mr={5}>
          <Heading as='h1' size='lg' letterSpacing='tighter'>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems='center'
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href='/works' path={path}>
            Works
          </LinkItem>
          <LinkItem href='/posts' path={path}>
            Posts
          </LinkItem>
          <LinkItem
            target='_blank'
            href='/pdf/cv_dian_ananda.pdf'
            alt='CV Dian Ananda'
            path={path}
            rel='noopener noreferrer'
            display='inline-flex'
            alignItems='center'
            style={{ gap: 4 }}
            pl={2}
          >
            <DownloadIcon />
            Resume
          </LinkItem>
        </Stack>

        <Box flex={1} textAlign='right'>
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id='navbar-menu'>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant='outline'
                aria-label='Options'
              />
              <MenuList>
                <MenuItem as={MenuLink} href='/'>
                  About
                </MenuItem>
                <MenuItem as={MenuLink} href='/works'>
                  Works
                </MenuItem>
                <MenuItem as={MenuLink} href='/posts'>
                  Posts
                </MenuItem>
                <MenuItem
                  as={MenuLink}
                  href='/pdf/cv_dian_ananda.pdf'
                  gap={1}
                  display='flex'
                  alignItems='center'
                >
                  <DownloadIcon /> Resume
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
