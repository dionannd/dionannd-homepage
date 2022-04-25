import { Badge, Container, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from 'components/works'
import Paragraph from 'components/paragraph'
import Layout from 'components/layouts/article'

const Work = () => (
  <Layout title="Sisos">
    <Container mt={6}>
      <Title>
        Sisos <Badge>2021</Badge>
      </Title>
      <Paragraph>
        Sisos is a web application for sharing photos and videos that allows
        users to take photos, capture videos, apply digital filters, and share
        them on various social networking services, and chatting with your
        friend or other people
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/MacOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ExpressJS, React, NodeJS, Chakra-UI</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/sisos-01.png" alt="Sisos" />
      <WorkImage src="/images/works/sisos-02.png" alt="Sisos" />
      <WorkImage src="/images/works/sisos-03.png" alt="Sisos" />
    </Container>
  </Layout>
)

export default Work
