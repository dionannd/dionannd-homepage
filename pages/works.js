import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { Section } from 'components/section'
import { WorkGridItem } from 'components/grid-item'
import { Layout } from 'components/layout/article'

import thumbFixcreative from '../public/images/works/fixcreative-01.png'
import thumbSisos from '../public/images/works/sisos-01.png'
import thumbJournal from '../public/images/works/sijour-01.png'
import thumbCalculator from '../public/images/works/calculator-01.png'

const Works = () => {
  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="fixcreative"
              title="Fixcreative"
              thumbnail={thumbFixcreative}
            >
              A Website Wedding and other Studio of Fixcreative
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem id="sisos" title="Sisos" thumbnail={thumbSisos}>
              A Website social media cloning Instagram with redesign
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem id="sijour" title="SiJour" thumbnail={thumbJournal}>
              A Website for keep records of daily expenses with encrypted data
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="calculator"
              title="Calculator"
              thumbnail={thumbCalculator}
            >
              A Website to counting numbers
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
