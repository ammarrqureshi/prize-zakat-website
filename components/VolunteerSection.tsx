import React from 'react';
import Link from 'next/link';

export default function VolunteerSection() {
  return (
    <section className="mb-32">
      <div className="relative mx-auto max-w-full px-4 lg:max-w-7xl">
        <div className="relative w-full bg-white">
          <div className="relative top-8 left-20 z-30 h-16 w-16 -translate-x-1/2 translate-y-0 transform rounded-full bg-gradient-to-b from-accent-2/60 to-accent-1 lg:absolute lg:top-0 lg:right-0 lg:translate-x-1/2 lg:-translate-y-1/2">
            <span className="material-icons flex h-16 w-16 items-center justify-center text-white">waving_hand</span>
          </div>
          <div className="relative z-20 mb-8 rounded-xl rounded-tl-3xl bg-accent-4/20 pt-20 pb-20 md:overflow-hidden lg:rounded-3xl lg:rounded-tl-[120px]">
            <div className="relative z-10 px-6 md:px-16">
              <form action="" className="flex justify-center max-sm:flex-col  max-sm:gap-4 lg:space-x-5">
                <h6 className=" text-sm font-bold leading-normal text-gray-500 max-sm:text-center max-sm:font-normal lg:text-3xl ">
                  Want to become a volunteer in shaping the future with justice and compassion?{' '}
                </h6>
                <Link
                  href="/contact"
                  className="flex items-center justify-between gap-4 rounded-lg bg-accent-2 py-4 px-6 text-white hover:bg-accent-1 lg:rounded-xl"
                >
                  <span className="inline-flex items-center justify-center rounded-full bg-white p-4  text-accent-2 shadow-accent-2/30 md:mr-6">
                    <span className="material-icons">volunteer_activism</span>
                  </span>
                  <span className="block ">Become Volunteer</span>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
