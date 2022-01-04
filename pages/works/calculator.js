import { Title, WorkImage, Meta } from 'components/works'
import { Layout } from 'components/layout/article'
import { Badge, Container, List, ListItem, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Work = () => {
  return (
    <Layout title="Calculator">
      <Container>
        <Title>
          Calculator <Badge>2021</Badge>
        </Title>
        A project for making a calculator with a website shape to make it easier
        to calculate calculations
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="#">Nothing.</Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/MacOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Javascript, HTML, CSS</span>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/dionannd/javascript-calculator">
              github.com/dionannd/javascript-calculator{' '}
              <ExternalLinkIcon mx={2} />
            </Link>
          </ListItem>
        </List>
        <WorkImage src="/images/works/apps_calculator.png" alt="Calculator" />
      </Container>
    </Layout>
  )
}

export default Work
