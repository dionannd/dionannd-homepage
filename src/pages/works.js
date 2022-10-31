import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Section from '@/components/section';
import { WorkGridItem } from '@/components/grid-item';
import Layout from '@/components/layouts/article';

import thumbTowedd from '~/images/works/towedd/towedd-01.webp';
import thumbFixcreative from '~/images/works/fixcreative/fixcreative-01.webp';
import thumbSisos from '~/images/works/sisos/sisos-01.webp';
import thumbFurniture from '~/images/works/gijanjok/gijanjok-01.webp';

const Works = () => {
  return (
    <Layout title='Works'>
      <Container>
        <Heading as='h3' fontSize={20} my={6}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id='towedd' title='Towedd' thumbnail={thumbTowedd}>
              An online wedding invitation website.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id='fixcreative'
              title='Fixcreative'
              thumbnail={thumbFixcreative}
            >
              A Website Wedding and other Studio of Fixcreative
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem id='sisos' title='Sisos' thumbnail={thumbSisos}>
              A Website social media cloning Instagram with redesign
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id='gijanjok'
              title='Gijan Jok Furniture'
              thumbnail={thumbFurniture}
            >
              A Website for shopping cool furniture with simple design
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;
export { getServerSideProps } from '../components/chakra';
