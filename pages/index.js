import {
  Box,
  Container,
  Heading,
  Image,
  useColorModeValue,
  Link,
  Button,
  List,
  ListItem,
  Icon
} from '@chakra-ui/react'
import { Section } from 'components/section'
import { Paragraph } from 'components/paragraph'
import NextLink from 'next/link'
import { Layout } from 'components/layout/article'
import { BioSection, BioYear } from 'components/bio'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io'

const Home = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I&apos;m a Web developer based in Indonesia!
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Dian Ananda
            </Heading>
            <p>A People as ( Developer / Designer )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxW="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/dion.jpg"
              alt="Profile"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About
          </Heading>
          <Paragraph>
            Call me Dion, i like everything about Design, Computer & Network,
            always learning to be a Full Stack Developer, like the new
            knowledge. Record traces by writing in{' '}
            <a
              href="https://jejakkoding.blogspot.com"
              target="_blank"
              rel="noreferrer"
            >
              <Link>Jejak Koding</Link>
            </a>
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2000</BioYear>
            Born in Bekasi, Indonesia.
          </BioSection>
          <BioSection>
            <BioYear>2017</BioYear>
            Complete the Vocational high School in the <b>SMKN 4 Bekasi</b> as
            Computer and Network Engineering.
          </BioSection>
          <BioSection>
            <BioYear>2017</BioYear>
            Worked in the <b>PT. Wiennexindo Solution</b> as (Junior Programmer
            and Designer)
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            Worked in the <b>PT. Suryaraya Rubberindo Industries</b> as
            (Operator Machine Wrapping and Packaging tube/tipe tire).
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Worked in the <b>PT. Yamaha Motor Part Mfg Indoneisa</b> as (
            Operator Melting, Die Casting, and Deburring).
          </BioSection>
          <BioSection>
            <BioYear>2020 to present</BioYear>
            Works as Technical Smartphone and freelancer Web Developer.
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I &#10084;
          </Heading>
          <Paragraph>
            Art, Music, Playing Musical Instrument, Gaming, Playing Badminton,
            Read Comic, Stream Film, Machine Learning
          </Paragraph>
        </Section>

        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/dionannd" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @dionannd
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/dionannd" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  @dionannd
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://instagram.com/dionannd_" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @dionannd_
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Home
