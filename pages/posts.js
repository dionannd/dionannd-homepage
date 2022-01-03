import { Layout } from 'components/layout/article'
import { Section } from 'components/section'
import { GridItem } from 'components/grid-item'
import { Container, Heading, SimpleGrid } from '@chakra-ui/react'

import thumbTest from '../public/images/works/website_fixcreative-studio.png'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h4" fontSize={20} mb={4}>
        Populer Posts
      </Heading>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem title="Test post" thumbnail={thumbTest}></GridItem>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
