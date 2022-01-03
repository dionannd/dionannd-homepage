import { Title, WorkImage, Meta } from 'components/works'
import { Layout } from 'components/layout/article'
import { Badge, Container, List, ListItem, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Work = () => {
  return (
    <Layout title="Fixcreative">
      <Container>
        <Title>
          Fixcreative <Badge>2022</Badge>
        </Title>
        A Website Wedding and other Studio of Fixcreative
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="#">
              Nothing. <ExternalLinkIcon mx={2} />
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
}

export default Work
