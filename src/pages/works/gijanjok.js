import { Badge, Container, List, Link, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from 'src/components/works';
import Paragraph from 'src/components/paragraph';
import Layout from 'src/components/layouts/article';

const Work = () => (
  <Layout title='Gijan Jok Furniture'>
    <Container mt={6}>
      <Title>
        Gijan Jok Furniture <Badge>2022</Badge>
      </Title>
      <Paragraph>
        Gijan Jok Furniture is a website ecommerce for shopping cool home
        furniture.
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href='https:/www.gijanjokfurniture.com/'>
            www.gijanjokfurniture.com <ExternalLinkIcon mx={2} />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/MacOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Wordpress, Elementor, WooCommerce</span>
        </ListItem>
      </List>
      <WorkImage
        src='/images/works/gijanjok/gijanjok-01.webp'
        alt='Gijan Jok Furniture'
      />
      <WorkImage
        src='/images/works/gijanjok/gijanjok-02.webp'
        alt='Gijan Jok Furniture'
      />
      <WorkImage
        src='/images/works/gijanjok/gijanjok-03.webp'
        alt='Gijan Jok Furniture'
      />
    </Container>
  </Layout>
);

export default Work;
