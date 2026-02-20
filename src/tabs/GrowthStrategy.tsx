import { useState } from 'react';
import Pillar1_Reach from './components/Pillar1_Reach';
import Pillar2_Communication from './components/Pillar2_Communication';
import Pillar3_Infrastructure from './components/Pillar3_Infrastructure';
import Pillar4_KPIs from './components/Pillar4_KPIs';
import ICP_ABM from './components/ICP_ABM';
import { Presentation, Target, Share2, Layout, BarChart, Info, Users } from 'lucide-react';

export default function GrowthStrategy() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Info },
    { id: 'icp-abm', label: 'ICP and ABM for B2B', icon: Users },
    { id: 'reach', label: 'Reach', icon: Share2 },
    { id: 'communication', label: 'Communication', icon: Target },
    { id: 'infrastructure', label: 'Infrastructure', icon: Layout },
    { id: 'kpis', label: 'KPIs', icon: BarChart },
  ];

  return (
    <div className="space-y-8 text-blue-900">
      <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-t-lg font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-blue-100 text-blue-700 border-b-2 border-blue-500'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="min-h-[400px]">
        {activeTab === 'overview' && (
          <section className="space-y-8 animate-in fade-in duration-500">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight font-serif text-blue-900">The 4-Pillar Growth Strategy</h2>
              <p className="text-xl leading-relaxed text-gray-700 max-w-4xl">
                This 4-Pillar Strategy is designed to help DeiJobs (a diversity-focused recruitment platform) drive awareness, engagement, and conversions from both employers and job seekers within the Indian market.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-blue-100 bg-gray-100 group">
                <iframe 
                  src="https://docs.google.com/presentation/d/e/2PACX-1vS7_GFgNTv6dGCjh9Fb4wCEuqF9tlh2l5S0kIbdxxZogI8sO61-gsNmDgsu7bJAh1dprDGj1s5iJesh/pubembed?start=true&loop=true&delayms=10000" 
                  frameBorder="0" 
                  width="100%" 
                  height="100%" 
                  allowFullScreen={true}
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between p-6 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl text-white shadow-lg">
                <div className="mb-4 sm:mb-0">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Presentation className="w-5 h-5" />
                    Interactive Strategy Deck
                  </h3>
                  <p className="text-blue-100 text-sm">Access the full presentation in a new tab for a better experience.</p>
                </div>
                <a 
                  href="https://docs.google.com/presentation/d/e/2PACX-1vS7_GFgNTv6dGCjh9Fb4wCEuqF9tlh2l5S0kIbdxxZogI8sO61-gsNmDgsu7bJAh1dprDGj1s5iJesh/pub?start=true&loop=true&delayms=10000" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-700 font-bold rounded-xl shadow-md hover:bg-blue-50 transition-all transform hover:scale-105 active:scale-95"
                >
                  Open Full Screen
                </a>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'icp-abm' && <ICP_ABM />}
        {activeTab === 'reach' && <Pillar1_Reach />}
        {activeTab === 'communication' && <Pillar2_Communication />}
        {activeTab === 'infrastructure' && <Pillar3_Infrastructure />}
        {activeTab === 'kpis' && <Pillar4_KPIs />}
      </div>

      <section id="conclusion" className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-2xl font-semibold mb-4">Conclusion</h3>
        <p>
          With this expanded 4-Pillar Strategy, DeiJobs will be well-equipped to dominate the diversity hiring space in India. By leveraging multi-channel marketing, crafting personalized messaging, optimizing the website and user experience, and focusing on data-driven KPIs, DeiJobs will provide immense value to both employers and job seekers. The insights derived from this comprehensive strategy will guide the platform towards becoming the go-to resource for inclusive hiring in India.
        </p>
      </section>
    </div>
  );
}