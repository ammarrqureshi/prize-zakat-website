// components/Tabs.js
import { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Tab1');

  const tabs = [
    { name: 'Tab1', label: 'Tab 1' },
    { name: 'Tab2', label: 'Tab 2' },
    { name: 'Tab3', label: 'Tab 3' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'Tab1':
        return <div>This is the content of Tab 1</div>;
      case 'Tab2':
        return <div>This is the content of Tab 2</div>;
      case 'Tab3':
        return <div>This is the content of Tab 3</div>;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`tab ${activeTab === tab.name ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">{renderContent()}</div>

      <style >{`
        .tabs {
          display: flex;
          gap: 1rem;
          border-bottom: 2px solid #ccc;
        }
        .tab {
          padding: 0.5rem 1rem;
          cursor: pointer;
          background: none;
          border: none;
          border-bottom: 2px solid transparent;
          font-size: 1rem;
          color: #555;
        }
        .tab.active {
          border-bottom: 2px solid #0070f3;
          color: #0070f3;
        }
        .tab:hover {
          color: #0056b3;
        }
        .tab-content {
          margin-top: 1rem;
          font-size: 1rem;
          color: #333;
        }
      `}</style>
    </div>
  );
};

export default Tabs;
