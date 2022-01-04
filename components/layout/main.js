import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { Navbar } from 'components/navbar'
import VoxelDogLoader from '../voxel-dog-loader'
import { Footer } from 'components/footer'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

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
        <LazyVoxelDog />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
