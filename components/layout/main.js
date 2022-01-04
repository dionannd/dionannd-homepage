import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import { Navbar } from 'components/navbar'
import VoxelDog from 'components/voxel-dog'
import NoSsr from 'components/no-ssr'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <title>Dian Ananda</title>
        <meta name="viewport" content="width=device-width, initial-scale=1 " />
        <meta name="description" content="Dian Ananda Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <NoSsr>
          <VoxelDog />
        </NoSsr>
        {children}
      </Container>
    </Box>
  )
}

export default Main
