import Layout from 'src/components/layouts/main';
import Fonts from 'src/components/fonts';
import { AnimatePresence } from 'framer-motion';
import Chakra from 'src/components/chakra';
import { Analytics } from '@vercel/analytics/react';

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual';
}

function Website({ Component, pageProps, router }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence
          mode='wait'
          initial={true}
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 });
            }
          }}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
        <Analytics />
      </Layout>
    </Chakra>
  );
}

export default Website;
