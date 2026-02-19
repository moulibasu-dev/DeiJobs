import { useState } from 'react';
import Objectives from './tabs/Objectives';
import IndustryAnalysis from './tabs/IndustryAnalysis';
import ICPMapping from './tabs/ICPMapping';
import GrowthStrategy from './tabs/GrowthStrategy';

const TABS = ['Objectives', 'Industry Analysis', 'ICP Mapping', 'Growth Strategy'];

export default function App() {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  const renderContent = () => {
    switch (activeTab) {
      case 'Objectives':
        return <Objectives />;
      case 'Industry Analysis':
        return <IndustryAnalysis />;
      case 'ICP Mapping':
        return <ICPMapping />;
      case 'Growth Strategy':
        return <GrowthStrategy />;
      default:
        return <Objectives />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-blue-900 font-sans">
      <header className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-blue-900 font-serif">DeiJobs Digital Marketing Proposal</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`${activeTab === tab
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
          <div className="mt-8">
            {renderContent()}
          </div>
        </div>
      </main>
    </div>
  );
}
