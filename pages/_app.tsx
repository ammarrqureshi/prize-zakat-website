import '../styles/globals.css';

import Layout from '../components/Layout';

// @ts-ignore
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component suppressHydrationWarning className="relative mb-28" {...pageProps} />
    </Layout>
  );
}

export default MyApp;
