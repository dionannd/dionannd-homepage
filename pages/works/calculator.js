import { Title, WorkImage, Meta } from 'components/works'
import { Layout } from 'components/layout/article'
import { Badge, Container, List, ListItem, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Paragraph } from 'components/paragraph'

const Work = () => {
  return (
    <Layout title="Calculator">
      <Container mt={6}>
        <Title>
          Calculator <Badge>2021</Badge>
        </Title>
        <Paragraph>
          A project for making a calculator with a website shape to make it
          easier to calculate calculations
        </Paragraph>
        <List ml={4} my={4}>
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
        <WorkImage src="/images/works/calculator-01.png" alt="Calculator" />
      </Container>
    </Layout>
  )
}

export default Work
