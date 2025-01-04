// components/Layout.js
import { useRouter } from 'next/router';
import Header from 'components/Header';

import Footer from 'components/Footer';
// @ts-ignore
const Layout = ({ children }) => {
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  return (
    <div>
      {isHomePage ? (
        <main>
          {children}

          <Footer />
        </main>
      ) : (
        <div>
          <div className="py-4">
            <Header />
          </div>

          <main className="mx-auto max-w-7xl px-4">{children}</main>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Layout;
