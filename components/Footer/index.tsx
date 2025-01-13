import React from 'react';
import Link from 'next/link';

import Image from 'next/image';
import Logo from 'assets/images/logo.png';
import FacebookIco from 'assets/images/facebook.svg';
import InstagramIco from 'assets/images/instagram.svg';
import TwitterIco from 'assets/images/twitter.svg';
export default function Footer() {
  const quickLinks = [
    { title: 'PRIME Podcast', link: 'https://youtu.be/ldBTItZDpMg?si=z305BFly9M8UzRJp' },
    {
      title: 'Islamabad Post Story',
      link: 'https://islamabadpost.com.pk/full-reserve-banking-proposed-to-resolve-pakistans-huge-debt-servicing-problem/',
    },
    {
      title: 'Pro Pakistani Post',
      link: 'https://propakistani.pk/2024/02/15/this-banking-model-can-eliminate-inflation-debt-and-interest-costs-from-pakistan/',
    },
    {
      title: 'Express Tribune Story',
      link: 'https://tribune.com.pk/story/2497984/us-central-bank-cuts-interest-rate-amid-recession-fears',
    },
  ];
  return (
    <footer className="relative mt-28 overflow-x-hidden pb-32">
      <div className="h-6- bg-accent-6.20 absolute -bottom-0 -right-10 z-10 w-60 rounded-full blur-3xl"></div>
      <div className="relative mx-auto max-w-full px-4 lg:max-w-7xl">
        <div className="mb-12 flex flex-wrap">
          <div className="w-full lg:w-3/12 lg:px-4 ">
            <div className="w-28">
              <Image alt="logo" width={100} height={100} src={Logo} className="logo-style-1" />
            </div>
            <br></br>
            <p className="pr-8 text-sm text-gray-500">
              The Policy Research Institute for Zakat Economy (PRIZE) is dedicated to promote and establish a
              Zakat-based, Riba-free economic system as a sustainable alternative
            </p>
          </div>
          <div className="w-full lg:w-6/12">
            <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-4">
              <div>
                <h6 className="mt-2 mb-6 text-xl font-semibold tracking-tight text-gray-900">Company</h6>
                <ul className="space-y-2 text-lg text-gray-500">
                  <li>
                    <Link href="/about">
                      <p>About</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="#resources">
                      <p>Resources</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/events">
                      <p>Events</p>
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h6 className="mt-2 mb-6 text-xl font-semibold tracking-tight text-gray-900">Quick Links</h6>
                <ul className="space-y-2 text-lg text-gray-500">
                  {quickLinks.map((quickLink, idx) => (
                    <li key={idx}>
                      <Link href={quickLink.link}>
                        <p>{quickLink.title}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-5 w-full lg:mt-0 lg:w-3/12">
            <div className="flex space-x-5">
              <Link href="https://facebook.com" className="cursor-pointer" passHref>
                <div>
                  <div className="group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-accent-4 fill-black shadow-xl">
                    <span className="bg-gradient-social absolute inset-0 rotate-0 transform opacity-0 transition-all duration-300 group-hover:rotate-[180deg] group-hover:opacity-100"></span>
                    <span className="relative z-20">
                      <FacebookIco className="fill-black group-hover:fill-white" />
                    </span>
                  </div>
                </div>
              </Link>
              <Link href="https://instagram.com" className="cursor-pointer" passHref>
                <div>
                  <div className="group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-accent-4 fill-black shadow-xl">
                    <span className="bg-gradient-social absolute inset-0 rotate-0 transform opacity-0 transition-all duration-300 group-hover:rotate-[180deg] group-hover:opacity-100"></span>
                    <span className="relative z-20">
                      <InstagramIco className="fill-black group-hover:fill-white" />
                    </span>
                  </div>
                </div>
              </Link>
              <Link href="https://twitter.com" className="cursor-pointer" passHref>
                <div>
                  <div className="group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-accent-4 fill-black shadow-xl">
                    <span className="bg-gradient-social absolute inset-0 rotate-0 transform opacity-0 transition-all duration-300 group-hover:rotate-[180deg] group-hover:opacity-100"></span>
                    <span className="relative z-20">
                      <TwitterIco className="fill-black group-hover:fill-white" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>{' '}
            <Link
              href="/contact"
              className="mt-6 flex items-center justify-between gap-4 rounded-lg bg-accent-2 py-4 px-6 text-white hover:bg-accent-1 lg:rounded-xl"
            >
              <span className="inline-flex items-center justify-center rounded-full bg-white p-4  text-accent-2 shadow-accent-2/30 md:mr-6">
                <span className="material-icons">call</span>
              </span>
              <span className="block ">Contact Us</span>
            </Link>
          </div>
        </div>
        <div className="pt-8 text-center text-sm text-gray-500">All rights reserved@theinfluencers.com.pk</div>
      </div>
    </footer>
  );
}
