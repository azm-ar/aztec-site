import '../styles/reset.css';
import '@splidejs/splide/dist/css/splide-core.min.css';
import '../styles/style.css';

import Header from '../components/layout/Header';
import Cursor from '../components/general/Cursor';

import { m, AnimatePresence, LazyMotion, domAnimation } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Cursor />
      <Header />
      <LazyMotion features={domAnimation}>
        <AnimatePresence exitBeforeEnter>
          <m.div
            key={router.route}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Component {...pageProps} />
          </m.div>
        </AnimatePresence>
      </LazyMotion>
    </>
  );
}

export default MyApp;
