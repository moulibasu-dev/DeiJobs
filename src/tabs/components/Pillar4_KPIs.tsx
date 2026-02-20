import { Target, DollarSign, Repeat, TrendingUp } from 'lucide-react';

export default function Pillar4_KPIs() {
  return (
    <section id="pillar4-kpis" className="animate-in slide-in-from-bottom-4 duration-700 space-y-8">
      <div className="space-y-2">
        <h3 className="text-3xl font-bold text-blue-900 font-serif">Pillar 4: KPIs & Success Metrics</h3>
        <p className="text-lg text-gray-600 max-w-3xl">Data-driven measurement to track growth, efficiency, and marketplace health.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: Target, title: 'Growth KPIs', items: ['Total Employer Registrations', 'Total Job Seeker Profiles', 'Active Job Listings', 'Traffic Growth (MoM)'] },
          { icon: DollarSign, title: 'Efficiency KPIs', items: ['Cost per Lead (CPL)', 'Cost per Acquisition (CPA)', 'Customer Acquisition Cost (CAC)', 'Return on Ad Spend (ROAS)'] },
          { icon: Repeat, title: 'Marketplace Health', items: ['Job Application Rate', 'Employer Retention Rate', 'Profile Completion Rate', 'Time to Fill (TTF)'] },
        ].map((group, idx) => (
          <div key={idx} className="p-6 rounded-3xl bg-white border border-gray-100 shadow-xl hover:border-blue-200 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-50 rounded-xl">
                <group.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-blue-900">{group.title}</h4>
            </div>
            <ul className="space-y-3">
              {group.items.map(item => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-1 h-1 rounded-full bg-blue-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="p-8 rounded-3xl bg-blue-900 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full -mb-32 -mr-32 blur-3xl" />
        <div className="relative">
          <h4 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <TrendingUp className="w-7 h-7 text-blue-300" />
            CAC-LTV Calculation (Example)
          </h4>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <p className="text-blue-200 text-sm leading-relaxed">Understanding the relationship between acquisition cost and long-term value is crucial for sustainable scaling.</p>
              <div className="p-4 bg-white/10 rounded-2xl border border-white/10">
                <p className="text-xs font-bold text-blue-300 uppercase tracking-widest mb-1">Target Ratio</p>
                <p className="text-3xl font-bold">3:1 <span className="text-sm font-normal text-blue-300">LTV/CAC</span></p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 border-b border-white/10">
                <span className="text-sm text-blue-200">Avg. Subscription Value</span>
                <span className="font-bold">₹25,000/yr</span>
              </div>
              <div className="flex justify-between items-center p-3 border-b border-white/10">
                <span className="text-sm text-blue-200">Target CAC</span>
                <span className="font-bold">₹8,000</span>
              </div>
              <div className="flex justify-between items-center p-3">
                <span className="text-sm text-blue-200">Payback Period</span>
                <span className="font-bold text-green-400">&lt; 4 Months</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
