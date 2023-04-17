import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Section from '@/components/section';
import { GridItem } from '@/components/grid-item';
import Layout from '@/components/layouts/article';

import thumbWSL2 from '~/images/blogs/speeding-up-wsl2.png';
import thumbImage from '~/images/blogs/best-image-website.webp';
import thumbLaravel from '~/images/blogs/laravel.png';
import thumbGreatVisitor from '~/images/blogs/greet-your-visitors.webp';

const Posts = () => {
  return (
    <Layout title='Posts'>
      <Container>
        <Heading as='h3' fontSize={20} my={6}>
          Populer Posts
        </Heading>

        <Section delay={0.1}>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              title='Greet your Visitors with Good Morning, Good Afternoon or Good Evening Message using JavaScript'
              thumbnail={thumbGreatVisitor}
              href='https://blog.dianananda.site/blog/greeting-message-using-javascript'
            />
            <GridItem
              title='Speeding up WSL2 Network up than 5x fast'
              thumbnail={thumbWSL2}
              href='https://blog.dianananda.site/blog/speeding-up-wsl2-network-up-than-5x-fast'
            />
            <GridItem
              title='Best image size for websites'
              thumbnail={thumbImage}
              href='https://blog.dianananda.site/blog/best-image-size-for-website'
            />
            <GridItem
              title='Cara Install Laravel 7 dengan Composer'
              thumbnail={thumbLaravel}
              href='https://blog.dianananda.site/blog/install-laravel-7-composer'
            />
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  );
};

export default Posts;
export { getServerSideProps } from '@/components/chakra';
