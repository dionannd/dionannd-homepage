import {
  Box,
  Container,
  Heading,
  useColorModeValue,
  Link,
  Button,
  List,
  ListItem,
  chakra
} from '@chakra-ui/react';
import Section from 'src/components/section';
import Paragraph from 'src/components/paragraph';
import NextLink from 'next/link';
import Layout from 'src/components/layouts/article';
import { BioSection, BioYear } from 'src/components/bio';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { IoLogoLinkedin, IoLogoInstagram, IoLogoGithub } from 'react-icons/io';
import Image from 'next/image';

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
});

const Home = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius='lg'
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align='center'
          css={{ backdropFilter: 'blur(10px)' }}
        >
          Hello, I&apos;m a Web developer based in Indonesia!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as='h2' variant='page-title'>
              Dian Ananda
            </Heading>
            <p>A People as ( Developer / Designer )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign='center'
          >
            <Box
              borderColor='whiteAlpha.800'
              borderWidth={2}
              borderStyle='solid'
              w='100px'
              h='100px'
              display='inline-block'
              borderRadius='full'
              overflow='hidden'
            >
              <ProfileImage
                src='/images/dion.jpg'
                alt='Profile image'
                width='100'
                height='100'
                style={{
                  width: 'auto',
                  height: 'auto'
                }}
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as='h3' variant='section-title'>
            Profile
          </Heading>
          <Paragraph>
            I&apos;m a front-end developer who knows ReactJS, NextJS, and
            currently I&apos;m deepening ExpressJS, Fastify, and NodeJS as a
            back-end to become a fullstack developer, I Experienced in using
            Laravel and CodeIgniter frameworks, and I&apos;m also learning other
            things like Golang, Flutter. Record traces by writing in{' '}
            <Link href='https://blog.dianananda.site' target='_blank'>
              My personal blog
            </Link>
            .
          </Paragraph>
          <Box align='center' mt={4} mb={2} flexDir='row'>
            <Button
              as={NextLink}
              href='/works'
              passHref
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme='teal'
            >
              My Portfolio
            </Button>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as='h3' variant='section-title'>
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
            <BioYear>2017 November to December</BioYear>
            Worked in the <b>PT. Wiennexindo Solution</b> as (Junior Programmer)
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
            Works as freelancer in
            <Link
              href='https://towedd.com/'
              target='_blank'
              rel='noreferrer'
              mx={1}
            >
              Towedd.com
            </Link>
            as (Web Developer).
          </BioSection>
          <BioSection>
            <BioYear>2022 December to 2023 Agustus</BioYear>
            freelancer as (Front-end Web Developer).
          </BioSection>
          <BioSection>
            <BioYear>2023 Agustus to present</BioYear>
            Worked in <b>Arcentric</b> as (Full Stack Developer).
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as='h3' variant='section-title'>
            I &#10084;
          </Heading>
          <Paragraph>
            Art, Music, Playing Musical Instrument, Gaming, Playing Badminton,
            Read Comic, Stream Film.
          </Paragraph>
        </Section>

        <Section delay={0.4}>
          <Heading as='h3' variant='section-title'>
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href='https://github.com/dionannd' target='_blank'>
                <Button
                  variant='ghost'
                  colorScheme='teal'
                  leftIcon={<IoLogoGithub />}
                >
                  @dionannd
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href='https://www.linkedin.com/in/dian-ananda-552a79152/'
                target='_blank'
              >
                <Button
                  variant='ghost'
                  colorScheme='teal'
                  leftIcon={<IoLogoLinkedin />}
                >
                  @dian-ananda
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href='https://instagram.com/dionannd_' target='_blank'>
                <Button
                  variant='ghost'
                  colorScheme='teal'
                  leftIcon={<IoLogoInstagram />}
                >
                  @dionannd_
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  );
};

export default Home;
export { getServerSideProps } from 'src/components/chakra';
