import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Header from 'components/Header';
import Testimonials from 'components/Testimonials';

import DecorHero from 'assets/images/decor-intersect-1.svg';
import DecorTextUnderlineHero from 'assets/images/text-decor-hero.svg';
import DecorPlus1 from 'assets/images/decor-plus-style-1.svg';
import DecorSwirl1 from 'assets/images/decor-swirl-style-1.svg';
import DecorEllipse1 from 'assets/images/decor-ellipse-style-1.svg';
import FacebookIco from 'assets/images/facebook.svg';
import InstagramIco from 'assets/images/instagram.svg';
import TwitterIco from 'assets/images/twitter.svg';

const Home: NextPage = () => {
  const Clients = [
    { image: 'client-1.png', alt: 'axon' },
    { image: 'client-2.png', alt: 'jet start' },
    { image: 'client-3.png', alt: 'expedia' },
    { image: 'client-4.png', alt: 'qantas' },
    { image: 'client-5.png', alt: 'alitalia' },
  ];
  return (
<>
      {/* Header */}
      <div className="absolute z-20 w-full py-6 lg:z-10 lg:py-12">
        <Header />
      </div>
 
</>

  );
};

export default Home;
