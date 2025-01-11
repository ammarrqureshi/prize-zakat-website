import type { NextPage } from 'next';
import { experts, teamMembers } from 'components/data';
import Head from 'next/head';

import DecorTextUnderlineHero from 'assets/images/text-decor-hero.svg';
const Team: NextPage = () => {
  return (
    <>
      <Head>
        <title>Meet Our Team</title>
        <meta name="description" content="Get to know the dedicated team behind our Zakat Calculator." />
      </Head>

      <div className="min-h-screen  px-4 py-8">
        <h2 className="mb-8 text-center font-serif text-5xl leading-tight tracking-tighter text-gray-900  lg:leading-[89px]">
          <span className="relative">
            Meet our Team
            <span className="absolute bottom-3 left-0 -z-10 -mt-3 -ml-4 lg:-mt-8">
              <DecorTextUnderlineHero className="h-1 w-[100px] fill-accent-4 lg:h-[12px] lg:w-[393px]" />
            </span>
          </span>
        </h2>

        <p className="mb-12 text-center text-lg text-gray-600">
          We are a diverse group of professionals dedicated to helping you calculate and manage your Zakat with ease.
        </p>

        {/* Big Cards Section */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-gray-700">Our Experts</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {experts.map((expert, index) => (
              <div key={index} className="rounded-xl bg-white p-6 shadow-2xl transition-shadow hover:shadow-xl">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="mx-auto mb-4 h-40 w-40 rounded-full object-cover"
                />
                <h3 className="text-xl font-bold text-gray-800">{expert.name}</h3>
                <p className="text-sm text-blue-600">{expert.role}</p>
                <p className="mt-4 text-gray-600">{expert.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Small Cards Section */}
        <section className="relative mb-4 rounded-xl  bg-accent-8 py-8 px-8 text-white">
          <div className="absolute -top-0 right-0  h-60 w-60 rounded-full bg-accent-1/60 blur-3xl"></div>
          <h2 className="mb-6 text-2xl font-semibold ">The Rest of Our Team</h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="z-10 flex flex-col items-center rounded-xl bg-white p-4 shadow-md transition-transform transition-shadow duration-200 hover:scale-105 hover:shadow-[0_4px_15px_rgba(72,103,225,0.5)]"
              >
                <img src={member.image} alt={member.name} className="mb-3 h-24 w-24 rounded-full object-cover" />
                <h3 className="text-lg font-medium text-gray-800">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Team;
