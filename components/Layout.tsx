// components/Layout.js
import { useRouter } from 'next/router';
import Header from 'components/Header';

const Layout = ({ children }) => {
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  return (
    <div>
      {isHomePage ? (
        <main>{children}</main>
      ) : (
        <div>
          <div className="py-4">
            <Header />
          </div>

          <main className="mx-auto max-w-7xl px-4">{children}</main>
        </div>
      )}
    </div>
  );
};

export default Layout;
