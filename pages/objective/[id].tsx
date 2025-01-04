import { useRouter } from 'next/router';
import Tabs from 'components/Tabs';
import { objectives } from '../data';

import VolunteerSection from 'components/VolunteerSection';
import DecorHero from 'assets/images/decor-intersect-1.svg';
import Image from 'next/image';
import { useState } from 'react';
export default function ObjectivePage() {
  const [activeTab, setActiveTab] = useState('Tab1');
  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    return <p>Loading...</p>; // Render a loading state initially
  }
  //@ts-ignore
  const objective = objectives[id - 1];

  if (!objective) {
    return <h1>objective Not Found</h1>;
  }

  console.log('Router Query:', router.query);
  // components/Tabs.js

  const tabs = [
    { name: 'Tab1', label: 'Islamic Banking' },
    { name: 'Tab2', label: 'Conventional Reserve Banking' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'Tab1':
        return (
          <div className="flex flex-col gap-4 ">
            {objective.islamic.map((pointer, idx) => (
              <div key={idx} className="flex gap-3 ">
                <span className="material-icons text-accent-1">play_arrow</span>
                <p>
                  <span className="font-bold leading-tight">{pointer.heading}: </span>
                  {pointer.desc}
                </p>
              </div>
            ))}
          </div>
        );
      case 'Tab2':
        return (
          <div className="flex flex-col gap-4 ">
            {objective.conventional.map((pointer, idx) => (
              <div key={idx} className="flex gap-3 ">
                <span className="material-icons text-accent-1">play_arrow</span>
                <p>
                  <span className="font-bold leading-tight">{pointer.heading}: </span>
                  {pointer.desc}
                </p>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className=" mb-36 grid grid-cols-2 gap-8 max-[600px]:grid-cols-1">
        <span className="absolute right-0 top-0 bottom-0 -z-10 h-screen w-5/12 ">
          <DecorHero className="fill-accent-3/30" />
        </span>

        <div className="absolute -left-80 -top-10 -z-10 h-[496px] w-[478px] rounded-full bg-accent-4/30 blur-3xl"></div>
        <div>
          <h2 className="mb-8 font-serif text-4xl leading-tight tracking-tighter text-gray-900  lg:leading-[89px]">
            {objective.heading}
          </h2>

          <div className="tabs flex items-center justify-center rounded-2xl shadow-2xl ">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                className={`tab rounded-2xl ${activeTab === tab.name ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.name)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="tab-content">{renderContent()}</div>
        </div>
        <div>
          <Image src="/images/hero-image.png" priority width={600} height={600} alt="zakat hero" />
        </div>
        <style >{`
          .tab {
            width: 100%;
            padding: 0.5rem 1rem;
            cursor: pointer;
            background: none;
            border: none;
            border-bottom: 2px solid transparent;
            font-size: 1rem;
            color: #555;
          }
          .tab.active {
            background: #259ed2;
            border-radius: @apply rounded-2xl;
            color: #fff;
            box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
          }
          @media (max-width: 768px) : {
            .tab:hover {
              background: rgba(29, 78, 216, 0.2);
            }
          }
          .tab-content {
            margin-top: 1rem;
            font-size: 1rem;
            color: #333;
          }
        `}</style>
      </div>
      <VolunteerSection />
    </>
  );
}
