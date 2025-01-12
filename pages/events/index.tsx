import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import VolunteerSection from 'components/VolunteerSection';
import DecorHero from 'assets/images/decor-intersect-1.svg';
const Events: NextPage = () => {
  const events = [
    {
      title: 'Full Reserve Banking',
      date: '14 Nov 2024 , 6:30PM',
      location: 'ICAP House Karachi',
      img: '/images/event-1.jpeg',
      rsvp: '#',
    },
    {
title: '8th Int. Conference: Innovation and Stability',
      date: '11 Nov 2024',
      location: 'Center of Islamic Business and Finance ',
      img: '/images/event-2.jpeg',
      rsvp: '#',
    },

    {
      title: 'Eliminate Inflation , Debt Interest Cost and Unemployment',
      date: '08 Oct 2024, 10:30 AM',
      location: 'SOE Seminar Hall',
      img: '/images/event-3.jpeg',
      rsvp: '#',
    },

    {
      title: 'Breaking the Debt Cycle',
      date: '21 Aug 2024, 11:00am',
      location: 'AERC Conference Hall, University of Karachi',
      img: '/images/event-5.jpeg',
      rsvp: '#',
    },

    {
      title: 'An Interest Free Full Reserve Banking',
      date: '08 Aug 2024, 2:30 PM',
      location: 'KACIEF,  Department of Banking and Finance',
      img: '/images/event-6.jpeg',
      rsvp: '#',
    },

    {
      title: 'Move from Fractional Reserve Banking',
      date: '07 Aug 2024 , 5:30pm',
      location: 'First Floor,15-E , Rehmat Center, Blue Area Islamabad, 44000',
      img: '/images/event-7.jpeg',
      rsvp: '#',
    },

    {
      title: 'Interest Free Economy',
      date: '25 Jun 2024, 3:00 PM',
      location: 'Jinnah Auditoriam, Islamabad',
      img: '/images/event-8.jpeg',
      rsvp: '#',
    },

    {
      title: 'The Zakat Based Economy',
      date: '24 Sep 2024, 5:30 PM',
      location: 'ST 3, Block 13, Gulshan e Iqbal, Karachi',
      img: '/images/event-16.jpeg',
      rsvp: '#',
    },

    {
      title: 'Seminar on Full Reserve Banking',
      date: '02 Jan 2025, 12:00pm',
      location: 'PMAS Arid Agriculture University , Rawalpindi',
      img: '/images/event-17.jpeg',
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
      {events.map((event, idx) => (
        <Link key={idx} href={event.rsvp}>
          {' '}
          <div className="relative w-full transition duration-300 hover:shadow-2xl">
            <div className="flex flex-col justify-between overflow-hidden rounded-3xl bg-white shadow-great md:flex-row">
              {/* event thumbnail */}
              <div className=" cover h-28 overflow-hidden bg-red-500 md:w-48 ">
                <Image
                  className="cover w-full object-cover"
                  width={100}
                  height={100}
                  src={event.img}
                  alt="event_thumbnail"
                />
              </div>
              <div className="flex flex-col items-center gap-8 p-4 md:flex-row ">
                {/* event title */}
                <h6 className="text-lg text-black">{event.title}</h6>
                {/* event date */}
                <div className="flex  items-center gap-3 md:justify-between">
                  <span className="mr-6 inline-flex items-center justify-center rounded-full bg-white  p-4 text-black shadow-accent-2/30">
                    <span className="material-icons">calendar_month</span>
                  </span>
                  Date : {event.date}
                </div>
                {/* event location */}
                <div className="flex items-center gap-3 md:justify-between">
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
      <div className="mt-36">
        <VolunteerSection />
      </div>
    </div>
  );
};

export default Events;
