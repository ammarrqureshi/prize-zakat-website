import '../styles/globals.css';
import type { AppProps } from 'next/app';

import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component className="relative mb-28" {...pageProps} />
    </Layout>
  );
}

export default MyApp;
