import { useRouter } from 'next/router';
import { objectives } from 'components/data';

import VolunteerSection from 'components/VolunteerSection';
import DecorHero from 'assets/images/decor-intersect-1.svg';
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

  //@ts-ignore
  const KeyMetrics = ({ povertyRate, wealthDistro, economyGrowth }) => {
    return (
      <div className="relative mb-4 rounded-xl  bg-accent-8 py-8 text-white">
        <div className="absolute -top-0 right-0  z-10 h-60 w-60 rounded-full bg-accent-1/60 blur-3xl"></div>
        <div className="relative mx-auto  overflow-hidden px-4">
          <div className="flex w-full flex-col items-center justify-center  pl-0 lg:pl-6">
            <div className="mb-6 flex flex-col text-left">
              <h3 className=" font-serif text-2xl uppercase leading-tight ">Key Metrics</h3>
            </div>
            <ul className="flex flex-col gap-6  md:flex-row md:items-center md:justify-center ">
              <li className="flex items-center gap-x-5">
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-accent-1">
                  <span className="material-icons text-white">co_present</span>
                </span>
                <div className="flex flex-col leading-5">
                  <h6 className=" text-lg font-normal ">{povertyRate} Less Poverty </h6>
                </div>
              </li>
              <li className="flex  items-center gap-x-5">
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-accent-2">
                  <span className="material-icons text-white">hail</span>
                </span>
                <div className="flex flex-col leading-5">
                  <h6 className=" text-lg font-normal ">{wealthDistro} Wealth Distribution</h6>
                </div>
              </li>
              <li className="flex items-center gap-x-5">
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-accent-7">
                  <span className="material-icons text-white">diversity_3</span>
                </span>
                <div className="flex flex-col leading-5">
                  <h6 className=" text-lg font-normal ">{economyGrowth} Economy Growth</h6>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  const renderContent = () => {
    switch (activeTab) {
      case 'Tab1':
        return (
          <div className="flex flex-col gap-6 ">
            {objective.islamic.pointers.map((pointer, idx) => (
              <div key={idx} className="flex gap-3 ">
                <span className="material-icons text-green-400">done</span>
                <p>
                  <span className="font-bold leading-tight">{pointer.heading}: </span>
                  {pointer.desc}
                </p>
              </div>
            ))}
            <KeyMetrics
              povertyRate={objective.islamic.metrics.povertyRate}
              wealthDistro={objective.islamic.metrics.wealthDistro}
              economyGrowth={objective.islamic.metrics.economyGrowth}
            />
          </div>
        );
      case 'Tab2':
        return (
          <div className="flex flex-col gap-6 ">
            {objective.conventional.pointers.map((pointer, idx) => (
              <div key={idx} className="flex gap-3 ">
                <span className="material-icons text-red-400">close</span>
                <p>
                  <span className="font-bold leading-tight">{pointer.heading}: </span>
                  {pointer.desc}
                </p>
              </div>
            ))}
            <KeyMetrics
              povertyRate={objective.conventional.metrics.povertyRate}
              wealthDistro={objective.conventional.metrics.wealthDistro}
              economyGrowth={objective.conventional.metrics.economyGrowth}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <h2 className="mb-8 font-serif text-4xl leading-tight tracking-tighter text-gray-900  lg:leading-[89px]">
        {objective.heading}
      </h2>

      <div className=" mx-auto mb-36 gap-8 rounded-xl bg-white px-6 py-6 shadow-xl md:w-7/12">
        <span className="absolute right-0 top-0 bottom-0 -z-10 h-screen w-5/12 ">
          <DecorHero className="fill-accent-3/30" />
        </span>

        <div className="absolute -left-80 -top-10 -z-10 h-[496px] w-[478px] rounded-full bg-accent-4/30 blur-3xl"></div>
        <div>
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
        <style>{`
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
