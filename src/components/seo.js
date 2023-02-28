import Head from 'next/head';
import { useRouter } from 'next/router';

const defaultMeta = {
  title: 'Dian Ananda - Homepage',
  siteName: 'Dian Ananda',
  description: "Hello, I'm a Web developer based in Indonesia!",
  url: 'https://dianananda.vercel.app',
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
    </Head>
  );
};

export default Seo;
