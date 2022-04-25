import { Badge, Container, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from 'components/works'
import Paragraph from 'components/paragraph'
import Layout from 'components/layouts/article'

const Work = () => (
  <Layout title="Sijour">
    <Container mt={6}>
      <Title>
        Sijour <Badge>2021</Badge>
      </Title>
      <Paragraph>
        SiJour is a recording software used for recording personal expenses,
        this application uses a database with encrypted data
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/MacOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ExpressJS, ReactJS, NodeJS, Chakra-UI</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/sijour-01.png" alt="Sijour" />
    </Container>
  </Layout>
)

export default Work
