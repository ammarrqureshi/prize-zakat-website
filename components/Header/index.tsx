import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import Logo from 'assets/images/logo.svg';

export default function Header() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenu((prev) => !prev);
  }, [setMenu]);

  return (
    <header className="mx-auto max-w-full px-4 lg:max-w-7xl">
      <div className="flex items-center justify-between">
        <div className="w-28">
          <Logo className="logo-style-1" />
        </div>
        <button
          type="button"
          onClick={toggleMenu}
          className={classNames('z-50 flex w-auto appearance-none items-center justify-center p-2 lg:hidden', {
            'fixed right-4 text-white': menu,
            'relative text-inherit': !menu,
          })}
        >
          <span className="material-icons">{menu ? 'close' : 'menu'}</span>
        </button>
        <div
          className={classNames('z-20 w-auto lg:flex lg:h-auto lg:opacity-100', {
            'visible fixed inset-0 flex h-screen w-full items-center justify-center bg-black text-white opacity-100':
              menu,
            'invisible hidden h-0 opacity-0': !menu,
          })}
        >
          <ul className="flex flex-col items-center gap-y-6 lg:flex-row lg:gap-y-0">
            <li>
              <Link href="/destination">
                <p className="px-9 text-accent-1 lg:text-gray-800">Destinations</p>
              </Link>
            </li>
            <li>
              <Link href="/hotels">
                <p className="px-9 text-accent-1 lg:text-gray-800">Hotels</p>
              </Link>
            </li>
            <li>
              <Link href="/flights">
                <p className="px-9 text-accent-1 lg:text-gray-800">Flights</p>
              </Link>
            </li>
            <li>
              <Link href="/bookings">
                <p className="px-9 text-accent-1 lg:text-gray-800">Bookings</p>
              </Link>
            </li>
            <li>
              <Link href="/destination">
                <p className="px-9 text-accent-1 lg:text-gray-800">Destinations</p>
              </Link>
            </li>
            <li>
              <Link href="/login">
                <p className="px-9  text-accent-1 lg:text-gray-800">Login</p>
              </Link>
            </li>
            <li>
              <Link href="/sign-up">
                <p className="mx-3 rounded-md border border-gray-900 px-5 py-1 text-accent-1 lg:text-gray-800">
                  Sign Up
                </p>
              </Link>
            </li>
            <li>
              <button className="relative px-9 text-accent-1 lg:text-gray-800">
                EN
                <span className="absolute ml-2 h-2 w-2 translate-y-1/2 rotate-45 transform border-b border-r border-gray-800"></span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
