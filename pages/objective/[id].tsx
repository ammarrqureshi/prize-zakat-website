import { useRouter } from 'next/router';
import { useState } from 'react';
import { objectives } from 'components/data';
import VolunteerSection from 'components/VolunteerSection';
import DecorHero from 'assets/images/decor-intersect-1.svg';
export default function ObjectivePage() {
  const [activeTab, setActiveTab] = useState('Tab1');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar toggle state
  const router = useRouter();
  const { id } = router.query;

  if (!id || Array.isArray(id) || isNaN(Number(id))) {
    return <h1>Objective Not Found</h1>;
  }

  const objective = objectives[Number(id) - 1];
  // Handle navigation between objectives
  const handleNavigate = (objectiveId: any) => {
    router.push(`/objective/${objectiveId}`);
    setIsSidebarOpen(false); // Close sidebar on selection (for mobile)
  };

  const tabs = [
    { name: 'Tab1', label: 'Islamic Banking' },
    { name: 'Tab2', label: 'Conventional Reserve Banking' },
  ];
  // @ts-ignore
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
  return (
    <div className="relative flex">
      {/* Main Content */}
      <main className="w-full p-6">
        <h2 className="mb-8 font-serif text-4xl leading-tight tracking-tighter text-gray-900">{objective.heading}</h2>
        <div className="mb-28 flex gap-4">
          {/* Floating Sidebar Navigation */}
          <div className="hidden self-start rounded-lg border border-gray-300 bg-white p-4 shadow-lg lg:block">
            <h3 className="mb-2 text-lg font-semibold">Objectives</h3>
            <ul className="space-y-2 text-gray-400 ">
              {objectives.map((obj, index) => (
                <li key={index}>
                  <button
                    className={`w-full rounded-md p-2 text-left ${
                      obj.id == Number(id) ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'
                    }`}
                    onClick={() => handleNavigate(obj.id)}
                  >
                    {obj.heading}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative mx-auto mb-36 gap-8 rounded-xl bg-white px-6 py-6 shadow-xl md:w-7/12">
            <span className="absolute right-0 top-0 bottom-0 -z-10 h-screen w-5/12">
              <DecorHero className="fill-accent-3/30" />
            </span>

            {/* Tab Navigation */}
            <div className="tabs flex items-center justify-center rounded-2xl shadow-2xl">
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

            {/* Tab Content */}
            <div className="tab-content mt-4">
              {activeTab === 'Tab1' ? (
                <div className="flex flex-col gap-6">
                  {objective.islamic.pointers.map((pointer, idx) => (
                    <div key={idx} className="flex gap-3">
                      <span className="material-icons text-green-400">done</span>
                      <p>
                        <span className="font-bold">{pointer.heading}: </span>
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
              ) : (
                <div className="flex flex-col gap-6">
                  {objective.conventional.pointers.map((pointer, idx) => (
                    <div key={idx} className="flex gap-3">
                      <span className="material-icons text-red-400">close</span>
                      <p>
                        <span className="font-bold">{pointer.heading}: </span>
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
              )}
            </div>
          </div>
        </div>
        <VolunteerSection />
      </main>
      {/* Mobile Sidebar Toggle Button */}
      <button
        className="fixed bottom-6 right-6 z-50 rounded-full bg-blue-500 p-3 text-white shadow-lg lg:hidden"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? '✖ ' : '☰ '}
        {objective.heading}
      </button>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 transform border-l border-gray-300 bg-white shadow-lg ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform md:hidden`}
      >
        <button className="absolute top-4 right-4 text-2xl" onClick={() => setIsSidebarOpen(false)}>
          ✖
        </button>
        <h3 className="p-4 text-lg font-semibold">Objectives</h3>
        <ul className="space-y-2 p-4  text-gray-400 ">
          {objectives.map((obj, index) => (
            <li key={index}>
              <button
                className={`w-full rounded-md p-2 text-left  ${
                  obj.id == Number(id) ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'
                }`}
                onClick={() => handleNavigate(obj.id)}
              >
                {obj.heading}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Sidebar Styles */}
      <style>{`
        .tab {
          width: 100%;
          padding: 0.5rem 1rem;
          cursor: pointer;
          background: none;
          border: none;
          font-size: 1rem;
          color: #555;
        }
        .tab.active {
          background: #259ed2;
          color: #fff;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}
