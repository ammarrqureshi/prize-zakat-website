import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';

import Image from 'next/image';
import Logo from 'assets/images/logo.png';

export default function Header() {
  const [menu, setMenu] = useState(false);
  const router = useRouter(); // Get current route

  const toggleMenu = useCallback(() => {
    setMenu((prev) => !prev);
  }, [setMenu]);

  return (
    <header className="mx-auto max-w-full px-4 md:max-w-7xl">
      <div className="flex items-center justify-between">
        <Link href="/">
          <div className="w-28">
            <Image alt="logo" width={100} height={100} src={Logo} className="logo-style-1" />
          </div>
        </Link>
        <button
          type="button"
          onClick={toggleMenu}
          className={classNames('no-wrap z-50 flex appearance-none items-center justify-center p-2 md:hidden', {
            'fixed right-4 text-white': menu,
            'relative text-inherit': !menu,
          })}
        >
          <span className="material-icons">{menu ? 'close' : 'menu'}</span>
        </button>
        <div
          className={classNames('z-20 w-auto md:flex md:h-auto md:opacity-100', {
            'visible fixed inset-0 flex h-screen w-full items-center justify-center bg-black text-white opacity-100':
              menu,
            ' max-md:invisible max-md:hidden max-md:opacity-0': !menu,
          })}
        >
          <ul className="flex flex-col items-center gap-y-6 md:flex-row md:gap-y-0">
            {/* Conditionally show Home link */}
            {router.pathname !== '/' && (
              <li>
                <Link href="/">
                  <p className="px-9 text-accent-1 hover:text-gray-600 md:text-gray-800">Home</p>
                </Link>
              </li>
            )}
            <li>
              <Link href="/about">
                <p className="px-9 text-accent-1 hover:text-gray-600 md:text-gray-800">About</p>
              </Link>
            </li>
            <li>
              <Link href="/resources">
                <p className="px-9 text-accent-1 hover:text-gray-600 md:text-gray-800">Resources</p>
              </Link>
            </li>
            <li>
              <Link href="/team">
                <p className="px-9 text-accent-1 hover:text-gray-600 md:text-gray-800">Team</p>
              </Link>
            </li>
            <li>
              <Link href="/events">
                <p className="px-9 text-accent-1 hover:text-gray-600 md:text-gray-800">Events</p>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <p className="mx-3 rounded-md border border-gray-900 px-5 py-1 text-accent-1 hover:bg-gray-900 hover:text-white md:text-gray-800">
                  Contact
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
