import { Badge, Container, List, ListItem, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from 'components/works'
import { Paragraph } from 'components/paragraph'
import { Layout } from 'components/layout/article'

const Work = () => (
  <Layout title="Fixcreative">
    <Container>
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
          <span>NextJS, Chakra-UI, React Libary</span>
        </ListItem>
      </List>
      <WorkImage
        src="/images/works/website_fixcreative-studio.png"
        alt="Fixcreative"
      />
    </Container>
  </Layout>
)

export default Work
