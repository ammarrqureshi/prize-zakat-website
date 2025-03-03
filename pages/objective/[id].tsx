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

  if (!id) return <p>Loading...</p>;

  const objective = objectives[id - 1];

  if (!objective) return <h1>Objective Not Found</h1>;

  // Handle navigation between objectives
  const handleNavigate = (objectiveId) => {
    router.push(`/objective/${objectiveId}`);
    setIsSidebarOpen(false); // Close sidebar on selection (for mobile)
  };

  const tabs = [
    { name: 'Tab1', label: 'Islamic Banking' },
    { name: 'Tab2', label: 'Conventional Reserve Banking' },
  ];

  return (
    <div className="relative flex">
      {/* Main Content */}
      <main className="w-full p-6">
        <h2 className="mb-8 font-serif text-4xl leading-tight tracking-tighter text-gray-900">{objective.heading}</h2>

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
              </div>
            )}
          </div>
        </div>
        <VolunteerSection />
      </main>

      {/* Floating Sidebar Navigation */}
      <div className="fixed top-1/4 right-4 z-50 hidden rounded-lg border border-gray-300 bg-white p-4 shadow-lg md:block">
        <h3 className="mb-2 text-lg font-semibold">Objectives</h3>
        <ul className="space-y-2 text-gray-400 ">
          {objectives.map((obj, index) => (
            <li key={index}>
              <button
                className={`w-full rounded-md p-2 text-left ${
                  obj.id == id ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'
                }`}
                onClick={() => handleNavigate(obj.id)}
              >
                {obj.heading}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Sidebar Toggle Button */}
      <button
        className="fixed bottom-6 right-6 z-50 rounded-full bg-blue-500 p-3 text-white shadow-lg md:hidden"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? '✖' : '☰'}
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
                  obj.id == id ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'
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
