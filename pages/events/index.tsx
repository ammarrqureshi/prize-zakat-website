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

const Events: NextPage = () => {
  const events = [
    {
      title: 'The Special Guest Lecture',
      date: '15 Nov 2025',
      location: 'Ripah Insitute Of Public Policy, Ground Floor, 7-Evacuee Trust Complex, F-5/1, Islamabad ',
      rsvp: '#',
    },
    {
      title: 'The Special Guest Lecture',
      date: '15 Nov 2025',
      location: 'Ripah Insitute Of Public Policy, Ground Floor, 7-Evacuee Trust Complex, F-5/1, Islamabad ',
      rsvp: '#',
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      <span className="absolute right-0 top-0 bottom-0 h-screen w-5/12 ">
        <DecorHero className="fill-accent-3/30" />
      </span>
      <div className="absolute -left-80 -top-10 -z-10 h-[496px] w-[478px] rounded-full bg-accent-4/30 blur-3xl"></div>
      <h2 className="mb-8 font-serif text-4xl leading-tight tracking-tighter text-gray-900  lg:leading-[89px]">
        Events
      </h2>
      {events.map((event) => (
        <Link href={event.rsvp}>
          {' '}
          <div className="relative z-20 w-full transition duration-300 hover:shadow-2xl">
            <div className="flex justify-between overflow-hidden rounded-3xl bg-white shadow-great">
              {/* event thumbnail */}
              <div className=" cover h-28 w-48 overflow-hidden bg-red-500 ">
                <Image
                  className="cover w-full object-cover"
                  width={100}
                  height={100}
                  src="/images/destination-1.jpg"
                  alt="event_thumbnail"
                />
              </div>
              <div className="flex items-center gap-8 ">
                {/* event title */}
                <h6 className="text-lg text-black ">{event.title}</h6>
                {/* event date */}
                <div className="flex  items-center justify-between gap-3">
                  <span className="mr-6 inline-flex items-center justify-center rounded-full bg-white  p-4 text-black shadow-accent-2/30">
                    <span className="material-icons">calendar_month</span>
                  </span>
                  Date : {event.date}
                </div>
                {/* event location */}
                <div className="flex items-center justify-between gap-3">
                  <span className="mr-6 inline-flex items-center justify-center rounded-full bg-white  p-4 text-black shadow-accent-2/30">
                    <span className="material-icons">location_on</span>
                  </span>
                  <span className="font-regular  max-w-[150px] text-xs">{event.location}</span>
                </div>
              </div>

              {/* rsvp btn */}
              <Link
                href={event.rsvp}
                className="flex items-center justify-center rounded-full bg-accent-4 p-3 text-white hover:bg-accent-3"
              >
                <span className="material-icons">arrow_forward</span>
              </Link>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Events;
