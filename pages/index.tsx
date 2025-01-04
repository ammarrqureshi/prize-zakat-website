import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Logo from 'assets/images/logo.png';
import Testimonials from 'components/Testimonials';

import Header from 'components/Header';
import Footer from 'components/Footer';
import VolunteerSection from 'components/VolunteerSection';
import DecorHero from 'assets/images/decor-intersect-1.svg';
import DecorTextUnderlineHero from 'assets/images/text-decor-hero.svg';
import DecorPlus1 from 'assets/images/decor-plus-style-1.svg';
import DecorSwirl1 from 'assets/images/decor-swirl-style-1.svg';
import DecorEllipse1 from 'assets/images/decor-ellipse-style-1.svg';
import FacebookIco from 'assets/images/facebook.svg';
import InstagramIco from 'assets/images/instagram.svg';
import TwitterIco from 'assets/images/twitter.svg';
import {objectives} from './data'
const Home: NextPage = () => {
  const Clients = [
    { image: 'client-1.png', alt: 'axon' },
    { image: 'client-2.png', alt: 'jet start' },
    { image: 'client-3.png', alt: 'expedia' },
    { image: 'client-4.png', alt: 'qantas' },
    { image: 'client-5.png', alt: 'alitalia' },
  ];

  const resources = [
    {
      title: 'Building a Sustainable Future',
      thumbnail: '/images/resource-thumbnail-1.jpg',
      icon: '/images/resource-1.png',
      link: 'https://youtu.be/7kVOghAPfWw?si=HOlBgAZB1HnS-m3X',
    },
    {
      title: 'The Dangers of Interest (Riba)',
      thumbnail: '/images/resource-thumbnail-2.jpg',
      icon: '/images/resource-2.png',
      link: 'https://youtu.be/KB7j1um5dE8?si=To20RzvJUpmIyfVh',
    },
    {
      title: 'The Power of Zakat',
      thumbnail: '/images/resource-thumbnail-3.jpg',
      icon: '/images/resource-3.png',
      link: 'https://youtu.be/1fjhIw6KxZQ?si=l7l0GWZF6ewmUIpb',
    },
  ];

  return (
    <div>
      <Head>
        <title>PRIZE Zakat Economy</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        {/* Meta Tag */}
        <meta property="og:url" content="https://next-travel-agency.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Jadoo Travel Agency" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="https://next-travel-agency.vercel.app/jadoo-travel-agency.jpg" />
      </Head>
      {/* Header */}
      <div className="absolute z-20 w-full py-6 lg:z-10 lg:py-12">
        <Header />
      </div>
      {/* Section Hero */}
      <section className="relative mb-28">
        <span className="absolute right-0 top-0 bottom-0 h-screen w-5/12 ">
          <DecorHero className="fill-accent-3/30" />
        </span>
        <div className="absolute -left-80 -top-10 -z-10 h-[496px] w-[478px] rounded-full bg-accent-4/30 blur-3xl"></div>
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex">
            <div className="w-full pt-52 lg:w-6/12">
              <h1 className="mb-6 text-sm font-bold uppercase text-accent-2 lg:text-xl">Economy that can save you</h1>
              <h2 className="mb-8 font-serif text-4xl leading-tight tracking-tighter text-gray-900 lg:text-[84px] lg:leading-[89px]">
                Zakat,{' '}
                <span className="relative">
                  economy
                  <span className="absolute top-full left-0 -z-10 -mt-3 -ml-4 lg:-mt-8">
                    <DecorTextUnderlineHero className="h-1 w-[100px] fill-accent-4 lg:h-[12px] lg:w-[393px]" />
                  </span>
                </span>
                <p>for the society</p>
              </h2>
              <p className="mb-8 max-w-lg text-sm leading-6 text-gray-500 lg:text-base lg:leading-8">
                Establishing a society and economy based on Islamic Principles of Justice, Equity and Compassion{' '}
              </p>
              <div className="flex justify-between items-center ">
                <Link href="/">
                  <p className="md:mr-11 rounded-xl bg-accent-1 px-4 py-2 md:px-6 md:py-4 text-white max-sm:text-xs shadow-[0-25-35px]">Find Out More</p>
                </Link>
                <Link href="/contact" className="flex items-center">
                  <span className="mr-6 inline-flex items-center justify-center rounded-full bg-accent-4  p-4 text-white shadow-accent-2/30">
                    <span className="material-icons">volunteer_activism</span>
                  </span>
                  <span className="hidden text-gray-500 lg:block">Become Volunteer</span>
                </Link>
              </div>
            </div>
            <div className="jusitfy-center relative hidden h-[764px] w-[783px] items-center pt-24 lg:flex">
              <div className="relative z-[999]  flex w-full transform items-center justify-center   overflow-hidden">
                <Image src="/images/hero-image.png" priority width={600} height={600} alt="zakat hero" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Category */}
      <section className="mb-32">
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="absolute -top-10 h-36 w-36 lg:-right-10">
            <DecorPlus1 className="decor-plus-style-1" />
          </div>
          <div className="mb-16 flex flex-col text-center">
            <h3 className="font-serif text-4xl uppercase leading-tight text-gray-900 lg:text-5xl lg:leading-snug">
              Our Focus
            </h3>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-16 text-gray-900">
            {/* block 1 */}
            {objectives.map((objective, idx) => (
              <div key={idx} className=" h-[350px] w-full md:min-w-[350px]  px-4  lg:w-3/12">
                <Link href={`/objective/${objective.id}`}>
                  <div className="group relative flex h-full w-full flex-col  justify-center rounded-[36px] bg-white py-4 px-6 text-center shadow-none shadow-great transition-all duration-300">
                    <div className="absolute bottom-8 left-8 -z-10 h-28 w-28 -translate-x-1/2 translate-y-1/2 transform rounded-tl-3xl rounded-br-lg bg-accent-3 transition-all duration-300 group-hover:left-6 group-hover:bottom-6 group-hover:-z-10"></div>
                    <div className="flex flex-col items-center justify-center gap-8">
                      <div className="group-hover:scale-110">
                        <Image width={60} height={60} src={objective.icon} alt="satellite" />
                      </div>
                      <div>
                        <h4 className="mb-3 text-xl font-semibold text-accent-8">{objective.heading}</h4>
                        <h5 className="font-regular mb-8 px-0 text-sm text-gray-500 lg:px-8">{objective.text}</h5>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
            {/* block 1 ends */}
          </div>
        </div>
      </section>
      {/* Top Destinations Section */}
      <section id="resources" className="mb-28">
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="mb-16 flex flex-col text-center">
            <h3 className="font-serif text-4xl uppercase leading-tight text-gray-900 lg:text-5xl lg:leading-snug">
              Resources
            </h3>
          </div>
          <div className="relative flex flex-wrap justify-center items-center gap-14  pr-0   lg:pr-8">
            <div className="absolute bottom-10 right-0 h-[252px] w-full md:w-[96px] ">
              <DecorSwirl1 className="stroke-gray-600" />
            </div>
            {resources.map((resource) => (
              <Link href={resource.link}>
                {' '}
                <div className="relative z-20 w-full  md:w-[365px] transition duration-300 hover:scale-110  ">
                  <div className="flex flex-col rounded-3xl bg-white pb-10 shadow-great">
                    <div className="relative h-96 overflow-hidden rounded-tr-3xl rounded-tl-3xl">
                      <div className=" relative z-[90] flex h-full w-full items-center justify-center bg-gray-900/50 ">
                        <span className="mr-6 inline-flex items-center justify-center rounded-full bg-white  p-4 text-black shadow-accent-2/30">
                          <span className="material-icons">play_arrow</span>
                        </span>
                      </div>
                      <Image
                        className="cover absolute z-10 h-full w-full object-cover "
                        layout="fill"
                        src={resource.thumbnail}
                        alt="video_thumbnail"
                      />
                    </div>
                    <div className="text-gray-500">
                      <div className="flex justify-between gap-4 px-5 pt-7">
                        <div className="flex items-center  justify-center gap-4">
                          <div className="flex items-center justify-center ">
                            <Image
                              className="min-w-[40px]"
                              layout="fixed"
                              width={30}
                              height={30}
                              src={resource.icon}
                              alt="satellite"
                            />
                          </div>
                          <h6 className="text-lg text-black ">{resource.title} </h6>
                        </div>
                        <div>
                          <Link
                            href={resource.link}
                            className="flex items-center justify-center rounded-full bg-accent-4 p-3 text-white hover:bg-accent-3"
                          >
                            <span className="material-icons">arrow_forward</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <VolunteerSection />
      {/* Section Easy in Fast */}
      <div className="relative mb-28 bg-accent-8  py-16 text-white">
        <div className="absolute -top-0 right-0  z-10 h-60 w-60 rounded-full bg-accent-1/60 blur-3xl"></div>
        <div className="relative mx-auto max-w-7xl overflow-hidden px-4">
          <div className="flex flex-wrap space-x-4 space-y-4 lg:space-y-0 lg:space-x-0">
            <div className="w-full pl-0 lg:w-6/12 lg:pl-6">
              <div className="mb-3 flex flex-col text-left lg:mb-8">
                <h3 className="mb-2 text-lg uppercase text-gray-200">Shaping the Future </h3>
                <h3 className="mb-4 font-serif text-4xl uppercase leading-tight  lg:text-5xl lg:leading-snug">
                  Doing the right thing at right time
                </h3>
              </div>
              <ul className="flex flex-col gap-y-6 lg:gap-y-6">
                <li className="flex items-center gap-x-5">
                  <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-accent-1">
                    <span className="material-icons text-white">co_present</span>
                  </span>
                  <div className="flex flex-col leading-5">
                    <h6 className=" text-xl font-bold ">50+ Seminars</h6>
                  </div>
                </li>
                <li className="flex items-center gap-x-5">
                  <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-accent-2">
                    <span className="material-icons text-white">hail</span>
                  </span>
                  <div className="flex flex-col leading-5">
                    <h6 className=" text-xl font-bold ">30+ Interviews</h6>
                  </div>
                </li>
                <li className="flex items-center gap-x-5">
                  <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-accent-7">
                    <span className="material-icons text-white">diversity_3</span>
                  </span>
                  <div className="flex flex-col leading-5">
                    <h6 className=" text-xl font-bold ">100000+ Audience Reach</h6>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex w-full items-center justify-center lg:w-6/12">
              <div className="relative w-[370px]">
                {/* <div className="absolute bottom-16 -right-1 z-30 w-[263px] translate-x-0 transform rounded-2xl bg-white p-4 pr-7 shadow-great lg:right-0 lg:translate-x-1/2"> */}
                {/*   <div className="flex"> */}
                {/*     <span className="mr-3 h-12 w-12 flex-none overflow-hidden rounded-full"> */}
                {/*       <Image */}
                {/*         src="/images/metrics-section.jpg" */}
                {/*         layout="responsive" */}
                {/*         width="100" */}
                {/*         height="100" */}
                {/*         alt="city of greece" */}
                {/*       /> */}
                {/*     </span> */}
                {/*     <div className="mb-2 flex w-full flex-col"> */}
                {/*       <span className="text-sm text-gray-500">Ongoing</span> */}
                {/*       <span className="mb-2 text-sm text-gray-900">Trip to Rome</span> */}
                {/*       <span className="mb-1 text-xs"> */}
                {/*         <span className="mr-1 text-accent-6">40%</span> */}
                {/*         <span className="text-gray-900">Completed</span> */}
                {/*       </span> */}
                {/*       <span className="flex h-1 w-full rounded-full bg-gray-200"> */}
                {/*         <span className="h-full w-20 rounded-full bg-accent-6" /> */}
                {/*       </span> */}
                {/*     </div> */}
                {/*   </div> */}
                {/* </div> */}
                <div className="relative z-20 rounded-xl bg-white px-4 pt-4 pb-4 shadow-great">
                  <div className="relative mb-6 h-96 overflow-hidden rounded-3xl">
                    <Image layout="fill" className="object-cover" src="/images/metric-section.jpg" alt="greece" />
                  </div>
                  {/*   <h6 className="mb-2 text-lg font-bold text-gray-900">Trip to Greece</h6> */}
                  {/*   <div className="mb-4 flex text-gray-500"> */}
                  {/*     <h6>14-29 June</h6> */}
                  {/*     <span className="mx-2">|</span> */}
                  {/*     <h6>by Robbin joseph</h6> */}
                  {/*   </div> */}
                  {/*   <div className="mb-6 flex gap-x-3"> */}
                  {/*     <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-300 text-gray-600"> */}
                  {/*       <span className="material-icons text-base">spa</span> */}
                  {/*     </span> */}
                  {/*     <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-300 text-gray-600"> */}
                  {/*       <span className="material-icons text-base">map</span> */}
                  {/*     </span> */}
                  {/*     <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-300 text-gray-600"> */}
                  {/*       <span className="material-icons text-base">near_me</span> */}
                  {/*     </span> */}
                  {/*   </div> */}
                  {/*   <div className="flex items-center justify-between"> */}
                  {/*     <div className="flex space-x-3 text-gray-500"> */}
                  {/*       <span className="material-icons text-base">apartment</span> */}
                  {/*       <span>24 people going</span> */}
                  {/*     </div> */}
                  {/*     <span className="material-icons text-2xl text-accent-6">favorite_border</span> */}
                  {/*   </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section Testimonial */}
      <Testimonials />
      {/* Section Clients */}
      <section className="mb-28">
        <div className="relative mx-auto max-w-full lg:max-w-7xl">
          <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-5 lg:gap-y-0 lg:gap-x-4">
            {Clients.map((item, idx) => (
              <div
                key={idx}
                className="relative h-20 transform rounded-2xl bg-white p-4 grayscale transition-all duration-300 hover:-translate-y-1 hover:shadow-great hover:grayscale-0"
              >
                <Image
                  src={`/images/${item.image}`}
                  alt={item.alt}
                  className="object-contain lg:object-none"
                  layout="fill"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <VolunteerSection />
    </div>
  );
};

export default Home;
