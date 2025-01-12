import type { NextPage } from 'next';
import { resources, articles } from 'components/data';
import Head from 'next/head';

import Image from 'next/image';
import Link from 'next/link';
import DecorSwirl1 from 'assets/images/decor-swirl-style-1.svg';
import DecorTextUnderlineHero from 'assets/images/text-decor-hero.svg';
const Resources: NextPage = () => {
  return (
    <>
      <Head>
        <title>Resources</title>
        <meta name="description" content="Get to know the dedicated team behind our Zakat Calculator." />
      </Head>

      <h2 className="mb-8 text-center font-serif text-5xl leading-tight tracking-tighter text-gray-900  lg:leading-[89px]">
        <span className="relative">
          Resources
          <span className="absolute bottom-3 left-0 -z-10 -mt-3 -ml-4 lg:-mt-8">
            <DecorTextUnderlineHero className="h-1 w-[100px] fill-accent-4 lg:h-[12px] lg:w-[393px]" />
          </span>
        </span>
      </h2>

      <p className="mb-12 text-center text-lg text-gray-600">
        We are a diverse group of professionals dedicated to helping you calculate and manage your Zakat with ease.
      </p>

      {/* Big Cards Section */}
      <section id="resources" className="mb-28">
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="mb-16 flex flex-col ">
            <h3 className="font-serif text-4xl uppercase leading-tight text-gray-900  lg:leading-snug">Videos</h3>
          </div>

          <div className="relative flex flex-wrap items-center  justify-center gap-12  pr-0   lg:pr-8">
            <div className="absolute bottom-10 right-0 h-[252px] w-full md:w-[96px] ">
              <DecorSwirl1 className="stroke-gray-600" />
            </div>
            {resources.map((resource, idx) => (
              <Link key={idx} href={resource.link}>
                {' '}
                <div
                  suppressHydrationWarning
                  className="relative z-20 w-full  transition duration-300 hover:scale-110 md:w-[350px]  "
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
        </div>

        {/* Articles section */}
        <div className="relative mx-auto px-2">
          <div className="mb-16 flex md:flex-col ">
            <h3 className="font-serif text-4xl uppercase leading-tight text-gray-900  lg:leading-snug">Articles</h3>
          </div>

          <div className="relative flex flex-wrap gap-4 pr-0 md:flex-col  ">
            {articles.map((article, idx) => (
              <Link key={idx} href={article.link}>
                {' '}
                <div
                  suppressHydrationWarning
                  className="relative z-20 w-full transition duration-300 hover:scale-110  "
                >
                  <div className="flex flex-col content-center  items-center justify-between rounded-3xl bg-white  p-2 shadow-great md:flex-row md:p-6">
                    <Image
                      className=" z-10 w-16  "
                      width={100}
                      height={100}
                      src={article.thumbnail}
                      alt="video_thumbnail"
                    />
                    <div className="w-full text-gray-500">
                      <div className="flex flex-col justify-between gap-4 px-5  md:flex-row ">
                        <div className="flex flex-col justify-center gap-1  md:flex-col">
                          <h6 className="text-sm text-black md:text-lg ">{article.title} </h6>
                          <span className="text-sm"> {article.site}</span>
                        </div>
                        <div>
                          <Link
                            href={article.link}
                            className="flex items-center justify-center self-start rounded-full bg-accent-4 p-3 text-white hover:bg-accent-3"
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
    </>
  );
};

export default Resources;
