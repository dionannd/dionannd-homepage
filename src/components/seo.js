import Head from 'next/head';
import { useRouter } from 'next/router';

const defaultMeta = {
  title: 'Dian Ananda - Homepage',
  siteName: 'Dian Ananda',
  description: "Hello, I'm a Web developer based in Indonesia!",
  url: 'https://dianananda.site',
  type: 'website',
  robots: 'follow, index',
  image: 'https://dianananda.vercel.app/images/dion.jpg'
};

const Seo = props => {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props
  };
  meta['title'] = meta.siteName;

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='robots' content={meta.robots} />
      <meta name='description' content={meta.description} />
      <meta
        name='keywords'
        content='dian, dian web, dian website, dian ananda, Dian Ananda, Dian ananda, dian ananda homepage, dian ananda portfolio, dian ananda website, dian ananda profile, dion ananda website, dion website, dion ananda'
      />
      <link rel='canonical' href={`${meta.url}${router.asPath}`} />
      {/* Open Graph */}
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content={meta.siteName} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta property='og:url' content={`${meta.url}${router.asPath}`} />
      <meta name='image' property='og:image' content={meta.image} />
      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@dionannd' />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:creator' content='@dionannd' />
      <meta name='twitter:description' content={meta.description} />
      <meta name='twitter:image' content={meta.image} />
      {meta.date && (
        <>
          <meta property='article:published_time' content={meta.date} />
          <meta
            name='publish_date'
            property='og:publish_date'
            content={meta.date}
          />
          <meta name='author' property='article:author' content='dionannd' />
        </>
      )}
      {/* Favicons */}
      {favicons.map((linkprops, index) => (
        <link key={index} {...linkprops} />
      ))}
      <meta name='msapplication-TileColor' content='#ffffff' />
      <meta
        name='msapplication-TileImage'
        content='/favicons/ms-icon-144x144.png'
      />
      <meta name='theme-color' content='#ffffff'></meta>
    </Head>
  );
};

const favicons = [
  {
    rel: 'apple-touch-icon',
    sizes: '57x57',
    href: '/favicons/apple-icon-57x57.png'
  },
  {
    rel: 'apple-touch-icon',
    sizes: '60x60',
    href: '/favicons/apple-icon-60x60.png'
  },
  {
    rel: 'apple-touch-icon',
    sizes: '72x72',
    href: '/favicons/apple-icon-72x72.png'
  },
  {
    rel: 'apple-touch-icon',
    sizes: '76x76',
    href: '/favicons/apple-icon-76x76.png'
  },
  {
    rel: 'apple-touch-icon',
    sizes: '114x114',
    href: '/favicons/apple-icon-114x114.png'
  },
  {
    rel: 'apple-touch-icon',
    sizes: '120x120',
    href: '/favicons/apple-icon-120x120.png'
  },
  {
    rel: 'apple-touch-icon',
    sizes: '144x144',
    href: '/favicons/apple-icon-144x144.png'
  },
  {
    rel: 'apple-touch-icon',
    sizes: '152x152',
    href: '/favicons/apple-icon-152x152.png'
  },
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/favicons/apple-icon-180x180.png'
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '192x192',
    href: '/favicons/android-icon-192x192.png'
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicons/favicon-32x32.png'
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '96x96',
    href: '/favicons/favicon-96x96.png'
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicons/favicon-16x16.png'
  },
  {
    rel: 'manifest',
    href: '/manifest.json'
  }
];

export default Seo;
