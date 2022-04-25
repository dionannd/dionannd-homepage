import { Badge, Container, List, ListItem, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from 'components/works'
import Paragraph from 'components/paragraph'
import Layout from 'components/layouts/article'

const Work = () => (
  <Layout title="Fixcreative">
    <Container mt={6}>
      <Title>
        Fixcreative <Badge>2022</Badge>
      </Title>
      <Paragraph>
        Fixcreative is a studio website engaged in Photo & Video Documentation,
        ranging from Event, Engagement, Pre-Wedding, Wedding and others
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.fixcreative-studio.com/">
            www.fixcreative-studio.com <ExternalLinkIcon mx={2} />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/MacOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NextJS, Typescript, Chakra-UI, React Libary</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/fixcreative-01.png" alt="Fixcreative" />
      <WorkImage src="/images/works/fixcreative-02.png" alt="Fixcreative" />
      <WorkImage src="/images/works/fixcreative-03.png" alt="Fixcreative" />
      <WorkImage src="/images/works/fixcreative-04.png" alt="Fixcreative" />
    </Container>
  </Layout>
)

export default Work
