import Layout from 'components/layouts/article'
import Section from 'components/section'
import { GridItem } from 'components/grid-item'
import { Container, Heading, SimpleGrid } from '@chakra-ui/react'

import thumbLaravel from '../public/images/posts/laravel.png'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Posts
      </Heading>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Cara Install Laravel 7 dengan Composer"
            thumbnail={thumbLaravel}
            href="https://jejakkoding.blogspot.com/2020/08/cara-install-laravel-7-dengan-composer.html"
          />
          <GridItem
            title="Laravel - Pengertian, Kelebihan, dan Kekurangan"
            thumbnail={thumbLaravel}
            href="https://jejakkoding.blogspot.com/2020/08/laravel-pengertian-kelebihan-dan.html"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
