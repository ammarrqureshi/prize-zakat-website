'use client';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Testimonials from 'components/Testimonials';
import ExpertsSlider from 'components/ExpertsSlider';
import ZakatCalculator from 'components/ZakatCalculator';
import Header from 'components/Header';
import VolunteerSection from 'components/VolunteerSection';
import DecorHero from 'assets/images/decor-intersect-1.svg';
import DecorTextUnderlineHero from 'assets/images/text-decor-hero.svg';
import DecorPlus1 from 'assets/images/decor-plus-style-1.svg';
import DecorSwirl1 from 'assets/images/decor-swirl-style-1.svg';
import { objectives, resources } from 'components/data';
import ProblemsWeSolve from 'components/ProblemsWeSolve';
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>PRIZE Zakat Economy</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        {/* Meta Tag */}
        <meta property="og:url" content="https://prize-zakat-website.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="PRIZE , Zakat Economy" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />
      </Head>
      {/* Header */}
      <div className="absolute z-20 w-full py-6 lg:z-10 lg:py-12">
        <Header />
      </div>
      {/* Section Hero */}
      <section className="relative mb-28">
        <span className="absolute right-0 top-0 bottom-0 h-screen w-5/12 ">
          <DecorHero className="fill-accent-2/10" />
        </span>
        <div className="absolute -left-80 -top-10 -z-10 h-[496px] w-[478px] rounded-full bg-accent-4/30 blur-3xl"></div>
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex">
            <div className="w-full max-sm:pt-44 md:pt-52 lg:w-6/12">
              <h1 className="mb-6 text-sm font-bold uppercase text-accent-2 lg:text-xl">
                Policy and Research Institute for
              </h1>
              <h2 className="mb-8 font-serif text-4xl leading-tight tracking-tighter text-gray-900 lg:text-[84px] lg:leading-[89px]">
                Zakat And{' '}
                <span className="relative">
                  Ribba{' '}
                  <span className="absolute top-full left-0 -z-10 -mt-3 -ml-4 lg:-mt-8">
                    <DecorTextUnderlineHero className="h-1 w-[100px] fill-accent-4 lg:h-[12px] lg:w-[393px]" />
                  </span>
                </span>
                <p>Free Economy</p>
              </h2>
              <p className="mb-8 max-w-lg text-sm leading-6 text-gray-500 lg:text-base lg:leading-8">
                Establishing a society and economy based on Islamic Principles of Justice, Equity and Compassion{' '}
              </p>
              <div className="flex items-center justify-between ">
                <Link href="/about">
                  <p className="rounded-xl bg-accent-1 px-4 py-2 text-white shadow-[0-25-35px] md:mr-11 md:px-6  md:py-4">
                    Find Out More
                  </p>
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

      <ProblemsWeSolve />
      {/* Section Category */}
      <section className="mb-32">
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="absolute -top-10 h-36 w-36 lg:-right-10">
            <DecorPlus1 className="decor-plus-style-1" />
          </div>
          <div className="mb-16 flex flex-col text-center">
            <h3 className="font-serif text-4xl leading-tight text-gray-900 lg:text-5xl lg:leading-snug">
              Here{"'"}s Ribba Free <span className="text-accent-2">Zakat Economy!</span>{' '}
            </h3>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-16 text-gray-900">
            {/* block 1 */}
            {objectives.map((objective, idx) => (
              <div key={idx} className=" h-[350px] w-full px-4  md:min-w-[350px]  lg:w-3/12">
                <Link href={`/objective/${objective.id}`}>
                  <div
                    suppressHydrationWarning
                    className="group relative flex h-full w-full flex-col  justify-center rounded-[36px] bg-white py-4 px-6 text-center shadow-none shadow-great transition-all duration-300"
                  >
                    <div className="absolute bottom-8 left-8 -z-10 h-28 w-28 -translate-x-1/2 translate-y-1/2 transform rounded-tl-3xl rounded-br-lg bg-accent-3 transition-all duration-300 group-hover:left-6 group-hover:bottom-6 group-hover:-z-10"></div>
                    <div className="flex flex-col items-center justify-center gap-8">
                      <div className="group-hover:scale-110">
                        <Image width={60} height={60} src={objective.icon} alt="satellite" />
                      </div>
                      <div>
                        <h4 className="mb-3 text-xl font-semibold text-accent-8">{objective.heading}</h4>
                        <h5 className="font-regular mb-8 px-0 text-sm text-gray-500 lg:px-8">{objective.text}</h5>

                        <span className="material-icons rounded-full bg-accent-1 p-2 text-white hover:scale-110">
                          chevron_right
                        </span>
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

      <VolunteerSection />
      {/* Resources Section */}
      <section id="resources" className="mb-28">
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="mb-16 flex flex-col text-center">
            <h3 className="font-serif text-4xl uppercase leading-tight text-gray-900 lg:text-5xl lg:leading-snug">
              Resources
            </h3>
          </div>
          <div className="relative flex flex-wrap items-center justify-center gap-14  pr-0   lg:pr-8">
            <div className="absolute bottom-10 right-0 h-[252px] w-full md:w-[96px] ">
              <DecorSwirl1 className="stroke-gray-600" />
            </div>
            {resources.slice(0, 3).map((resource, idx) => (
              <Link key={idx} href={resource.link}>
                {' '}
                <div
                  suppressHydrationWarning
                  className="relative z-20 w-full  transition duration-300 hover:scale-110 md:w-[365px]  "
                >
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
          <div className="mt-8 flex items-center justify-center text-center">
            <Link href="/team">
              <div className=" flex items-center justify-center gap-4 rounded-xl  px-4 py-2 text-accent-1 shadow-[0-25-35px] md:mr-11 md:px-6  md:py-4 ">
                <span className="flex items-center justify-center rounded-full bg-accent-1 p-6 text-white">
                  <span className="material-icons">arrow_forward</span>
                </span>
                Go to Resources
              </div>
            </Link>
          </div>
        </div>
      </section>
      {/* Section Easy in Fast */}
      <div className="relative mb-28 grid gap-4  bg-accent-8 py-16 text-white md:grid-cols-2">
        <div className="absolute -top-0 right-0  z-10 h-60 w-60 rounded-full bg-accent-1/60 blur-3xl"></div>
        <div className="relative mx-auto  overflow-hidden px-4">
          <div className="flex flex-wrap ">
            <div className="w-full pl-0 lg:pl-6">
              <div className="mb-3 flex flex-col text-left lg:mb-8">
                <h3 className="mb-2 text-lg uppercase text-gray-200">Shaping the Future </h3>
                <h3 className="mb-4 font-serif text-4xl uppercase leading-tight">Our Mission & Vision</h3>
                <p>
                  We commend PRIZE for its dedication to establishing a Zakat-based economy and eliminating Riba
                  (interest). By promoting a fair and ethical economy, PRIZE is paving the way for a more prosperous and
                  spiritually sound society.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center px-4">
          <ul className=" flex flex-wrap content-center gap-12">
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
                <span className="material-icons text-white">interpreter_mode</span>
              </span>
              <div className="flex flex-col leading-5">
                <h6 className=" text-xl font-bold ">10+ Podcasts</h6>
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
      </div>
      <ExpertsSlider />
      {/* Section Testimonial */}
      <Testimonials />
      {/* Section Clients */}
      <section className="mb-28">
        <ZakatCalculator />
      </section>

      <VolunteerSection />
    </div>
  );
};

export default Home;
