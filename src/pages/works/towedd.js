import { Badge, Container, List, ListItem, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '@/components/works';
import Paragraph from '@/components/paragraph';
import Layout from '@/components/layouts/article';

const Work = () => (
  <Layout title='Towedd'>
    <Container mt={6}>
      <Title>
        Towedd <Badge>2021</Badge>
      </Title>
      <Paragraph>
        Towedd is a platform used to create website-based wedding online
        invitations.
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href='https://www.towedd.com/'>
            www.towedd.com <ExternalLinkIcon mx={2} />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/MacOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            NextJS, Fastify, Typescript, Chakra-UI, React Libary, Postgresql
          </span>
        </ListItem>
      </List>
      <WorkImage src='/images/works/towedd/towedd-01.webp' alt='Towedd' />
      <WorkImage src='/images/works/towedd/towedd-02.webp' alt='Towedd' />
      <WorkImage src='/images/works/towedd/towedd-03.webp' alt='Towedd' />
      <WorkImage src='/images/works/towedd/towedd-04.webp' alt='Towedd' />
    </Container>
  </Layout>
);

export default Work;
