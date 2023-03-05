import Head from 'next/head';
import Script from 'next/script';
import { motion } from 'framer-motion';
import { GridItemStyle } from '@/components/grid-item';

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
};

const Layout = ({ children, title }) => {
  const t = `${title} - Dian Ananda`;
  return (
    <motion.article
      initial='hidden'
      animate='enter'
      exit='exit'
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      <>
        {title && (
          <Head>
            <title>{t}</title>
            <meta name='twitter:title' content={t} />
            <meta property='og:title' content={t} />
          </Head>
        )}
        {/* Google tag (gtag.js) */}
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=G-TDZGFZ0P0X'
          strategy='afterInteractive'
        />
        <Script id='google-analytics' strategy='afterInteractive'>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-TDZGFZ0P0X');
        `}
        </Script>
        {children}

        <GridItemStyle />
      </>
    </motion.article>
  );
};

export default Layout;
