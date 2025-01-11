import '../styles/globals.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
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
