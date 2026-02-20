import { Rocket, Smartphone, LayoutTemplate } from 'lucide-react';

export default function Pillar3_Infrastructure() {
  return (
    <section id="pillar3-infrastructure" className="animate-in slide-in-from-bottom-4 duration-700 space-y-8">
      <div className="space-y-2">
        <h3 className="text-3xl font-bold text-blue-900 font-serif">Pillar 3: Infrastructure Strategy</h3>
        <p className="text-lg text-gray-600 max-w-3xl">Optimizing the digital ecosystem for seamless user experience and high conversion rates.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-8 rounded-3xl bg-white border border-blue-100 shadow-xl space-y-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-600 rounded-2xl shadow-lg">
              <Rocket className="w-7 h-7 text-white" />
            </div>
            <h4 className="text-xl font-bold text-blue-900">3.1 Website Analysis (Technical Audit)</h4>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
              <p className="text-xs font-bold text-blue-700 uppercase tracking-widest mb-2">SEO & Content</p>
              <ul className="space-y-2 text-sm text-blue-900">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                  <span><strong>Homepage Plan:</strong> 1,500+ words focusing on "Diversity Hiring Platform India".</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                  <span><strong>Category Pages:</strong> Targeted keywords for Women, LGBTQ+, and PwD hiring.</span>
                </li>
              </ul>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Technical Performance</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">90+</p>
                  <p className="text-[10px] text-gray-400 uppercase font-bold">PageSpeed Score</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">&lt; 2s</p>
                  <p className="text-[10px] text-gray-400 uppercase font-bold">Load Time</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-white border border-indigo-100 shadow-xl space-y-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-indigo-600 rounded-2xl shadow-lg">
              <Smartphone className="w-7 h-7 text-white" />
            </div>
            <h4 className="text-xl font-bold text-indigo-900">3.2 UX/UI Enhancements</h4>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
              <p className="text-xs font-bold text-indigo-700 uppercase tracking-widest mb-2">User Journey Optimization</p>
              <ul className="space-y-2 text-sm text-indigo-900">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                  <span><strong>Mobile-First Design:</strong> Ensuring seamless job applications on mobile.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                  <span><strong>Trust Signals:</strong> Adding testimonials, security badges, and partner logos.</span>
                </li>
              </ul>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Conversion Elements</p>
              <div className="flex flex-wrap gap-2">
                {['One-Click Apply', 'Smart Filters', 'AI Matching', 'Live Chat Support'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-xs font-medium text-gray-600">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-2xl overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
        <div className="relative">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-sm">
              <LayoutTemplate className="w-7 h-7 text-white" />
            </div>
            <h4 className="text-2xl font-bold">3.3 Landing Page Mock-up</h4>
          </div>
          <p className="text-blue-100 mb-8 max-w-2xl">High-converting landing pages designed for specific ad campaigns, focusing on immediate value and clear CTAs.</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {['Employer Focused', 'Job Seeker Focused', 'DEI Event Specific'].map(type => (
              <div key={type} className="p-4 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-colors cursor-default">
                <p className="text-xs font-bold text-blue-300 uppercase tracking-widest mb-1">Template</p>
                <p className="font-bold">{type}</p>
                <div className="mt-4 h-1 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-400 w-2/3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
