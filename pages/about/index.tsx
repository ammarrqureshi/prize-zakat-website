import Head from 'next/head';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Tabs from 'components/Tabs';
import Testimonials from 'components/Testimonials';

import DecorHero from 'assets/images/decor-intersect-1.svg';
import DecorTextUnderlineHero from 'assets/images/text-decor-hero.svg';
import DecorPlus1 from 'assets/images/decor-plus-style-1.svg';
import DecorSwirl1 from 'assets/images/decor-swirl-style-1.svg';
import DecorEllipse1 from 'assets/images/decor-ellipse-style-1.svg';
import FacebookIco from 'assets/images/facebook.svg';
import InstagramIco from 'assets/images/instagram.svg';
import TwitterIco from 'assets/images/twitter.svg';

const About: NextPage = () => {
  return (
    <>
      <section className="mb-16 flex flex-col items-center justify-center gap-4  text-center">
        <span className="absolute right-0 top-0 bottom-0 h-screen w-5/12 ">
          <DecorHero className="fill-accent-3/30" />
        </span>
        <div>
          {' '}
          <div className=" flex">
            <div className="w-full pt-16 ">
              <h1 className="mb-6 text-sm font-bold uppercase text-accent-2 lg:text-xl">Economy that can save you</h1>
              <h2 className="mb-8 font-serif text-4xl leading-tight tracking-tighter text-gray-900 lg:text-[84px] lg:leading-[89px]">
                <span className="relative">
                  About Us
                  <span className="absolute top-full left-0 -z-10 -mt-3 -ml-4 lg:-mt-8">
                    <DecorTextUnderlineHero className="h-1 w-[100px] fill-accent-4 lg:h-[12px] lg:w-[393px]" />
                  </span>
                </span>
              </h2>
              <p className="mb-8 max-w-lg text-sm leading-6 text-gray-500 lg:text-base lg:leading-8">
                Establishing a society and economy based on Islamic Principles of Justice, Equity and Compassion{' '}
              </p>
              <div className="flex justify-center">
                <Link href="/contact" className="flex items-center">
                  <span className="mr-6 inline-flex items-center justify-center rounded-full bg-accent-4  p-4 text-white shadow-accent-2/30">
                    <span className="material-icons">volunteer_activism</span>
                  </span>
                  <span className="hidden text-gray-500 lg:block">Become Volunteer</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-28">
        <div className="mb-24">
          <h2 className="mb-8 font-serif text-4xl leading-tight tracking-tighter text-gray-900  lg:leading-[89px]">
            Company Overview
          </h2>
          <div className="md:w-10/12">
            <p>
              The Policy Research Institute for Zakat Economy (PRIZE) is dedicated to creating a society grounded in
              Islamic principles of justice, equity, and compassion. We aim to promote and establish a Zakat-based,
              Riba-free economic system as a sustainable alternative to the current interest-based models, ensuring
              fairness and social welfare for all.
            </p>
            <br></br>
            <p>
              Through our mission, we are committed to driving this transformation within three years, focusing on
              public awareness, advocacy, and research. We work closely with professionals, policymakers, academia, and
              civil society to foster an understanding of this equitable system and to push for policy reforms that will
              bring it into practice. Our multimedia content and educational initiatives further support the
              implementation of this system, while our continuous evaluation of these efforts ensures that our
              objectives are being met and progress is made.
            </p>
          </div>
        </div>
        <div className="mb-24">
          <h2 className="mb-8 font-serif text-4xl leading-tight tracking-tighter text-gray-900  lg:leading-[89px]">
            How we Work
          </h2>
          <Link href="https://youtu.be/7kVOghAPfWw?si=HOlBgAZB1HnS-m3X">
            {' '}
            <div className=" group relative h-96 overflow-hidden rounded-3xl  bg-red-500">
              <div className=" relative z-[90]  flex h-full w-full items-center justify-center bg-gray-900/50 ">
                <span className="mr-6 inline-flex items-center justify-center rounded-full bg-white  p-4 text-black shadow-accent-2/30 group-hover:scale-110">
                  <span className="material-icons">play_arrow</span>
                </span>
              </div>
              <Image
                className="cover absolute z-10 h-full w-full object-cover "
                layout="fill"
                src="/images/destination-1.jpg"
                alt="video_thumbnail"
              />
            </div>
          </Link>
        </div>
        <div className="mb-24">
          <h2 className="mb-8 font-serif text-4xl leading-tight tracking-tighter text-gray-900  lg:leading-[89px]">
            Strategic Objectives
          </h2>
          <ul className="flex flex-col gap-y-12">
            <li className="flex items-center gap-x-5">
              <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-accent-1">
                <span className="material-icons text-white">volunteer_activism</span>
              </span>
              <div className="flex flex-col leading-5">
                <h6 className="font-bold text-gray-900">Increase awareness</h6>
                <p className="font-thin text-gray-500">
                  Increase awareness and understanding of Zakat-based, Riba-free economic model among professionals
                </p>
              </div>
            </li>{' '}
            <li className="flex items-center gap-x-5">
              <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-accent-1">
                <span className="material-icons text-white">handshake</span>
              </span>
              <div className="flex flex-col leading-5">
                <h6 className="font-bold text-gray-900">Strenghten partnerships</h6>
                <p className="font-thin text-gray-500">
                  Strengthen partnerships with relevant stakeholders including Think tanks, Policy & research &
                  professional institutions
                </p>
              </div>
            </li>{' '}
            <li className="flex items-center gap-x-5">
              <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-accent-1">
                <span className="material-icons text-white">engineering</span>
              </span>
              <div className="flex flex-col leading-5">
                <h6 className="font-bold text-gray-900">Resources Development</h6>
                <p className="font-thin text-gray-500">
                  Development of multimedia resources and content for supporting Zakat-based & Riba free economic
                  initiatives.
                </p>
              </div>
            </li>{' '}
            <li className="flex items-center gap-x-5">
              <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-accent-1">
                <span className="material-icons text-white">policy</span>
              </span>
              <div className="flex flex-col leading-5">
                <h6 className="font-bold text-gray-900">Policy Reforms</h6>
                <p className="font-thin text-gray-500">
                  Advocate for policy reforms that facilitate the adoption and implementation of Zakat-based & Riba-free
                  economic model.
                </p>
              </div>
            </li>{' '}
          </ul>
        </div>
      </section>
    </>
  );
};

export default About;
