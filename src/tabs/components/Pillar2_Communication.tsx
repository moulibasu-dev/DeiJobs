import { Briefcase, UserCheck, MessageSquare } from 'lucide-react';

export default function Pillar2_Communication() {
  return (
    <section id="pillar2-communication" className="animate-in slide-in-from-bottom-4 duration-700 space-y-8">
      <div className="space-y-2">
        <h3 className="text-3xl font-bold text-blue-900 font-serif">Pillar 2: Communication Strategy</h3>
        <p className="text-lg text-gray-600 max-w-3xl">Persona-Based Messaging tailored to align with the unique journeys of employers and candidates.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-8 rounded-3xl bg-white border border-blue-100 shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
          <div className="relative">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-600 rounded-2xl shadow-lg">
                <Briefcase className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-bold text-blue-900">2.1 For Employers (B2B)</h4>
            </div>
            
            <div className="space-y-6">
              <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
                <p className="text-xs font-bold text-blue-700 uppercase tracking-widest mb-2">Key Persona</p>
                <p className="text-sm font-medium text-blue-900">HR Managers, TA Heads, CHROs, D&I Leads</p>
              </div>

              <div className="space-y-3">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Pain Points</p>
                <ul className="space-y-2">
                  {['Difficulty sourcing diverse talent', 'Meeting diversity quotas', 'High recruitment costs', 'Inclusive branding gaps'].map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-blue-900 rounded-2xl text-white">
                <p className="text-xs font-bold text-blue-300 uppercase tracking-widest mb-2">The Message</p>
                <p className="text-sm italic leading-relaxed">"DeiJobs connects you with a verified pool of diverse talent. Start building an inclusive workforce today."</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-white border border-indigo-100 shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
          <div className="relative">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-indigo-600 rounded-2xl shadow-lg">
                <UserCheck className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-bold text-indigo-900">2.2 For Job Seekers (B2C)</h4>
            </div>
            
            <div className="space-y-6">
              <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
                <p className="text-xs font-bold text-indigo-700 uppercase tracking-widest mb-2">Key Persona</p>
                <p className="text-sm font-medium text-indigo-900">Women, LGBTQ+, PwD, and Mid-career professionals</p>
              </div>

              <div className="space-y-3">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Pain Points</p>
                <ul className="space-y-2">
                  {['Limited access to diverse roles', 'Finding truly inclusive workplaces', 'Career growth visibility', 'Bias in traditional portals'].map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-indigo-900 rounded-2xl text-white">
                <p className="text-xs font-bold text-indigo-300 uppercase tracking-widest mb-2">The Message</p>
                <p className="text-sm italic leading-relaxed">"Find a job in a company that values diversity and inclusivity. Start your journey with DeiJobs."</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 rounded-3xl bg-gray-900 text-white shadow-2xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-sm">
            <MessageSquare className="w-7 h-7 text-white" />
          </div>
          <h4 className="text-2xl font-bold">2.3 Communication Mapping Framework</h4>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-6 py-4 font-bold text-blue-400 uppercase tracking-widest text-[10px]">Persona</th>
                <th className="px-6 py-4 font-bold text-blue-400 uppercase tracking-widest text-[10px]">Key Message</th>
                <th className="px-6 py-4 font-bold text-blue-400 uppercase tracking-widest text-[10px]">Pain Point</th>
                <th className="px-6 py-4 font-bold text-blue-400 uppercase tracking-widest text-[10px]">CTA</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                { p: 'Employer', m: '“Post a job and access a verified talent pool of diverse candidates.”', pp: 'Difficulty finding diverse talent.', cta: 'Post a Job Now' },
                { p: 'Job Seeker (Female)', m: '“Create your profile and access inclusive job opportunities.”', pp: 'Limited access to career advancement.', cta: 'Create Your Profile' },
                { p: 'Job Seeker (LGBTQ+)', m: '“Find inclusive companies committed to diverse hiring practices.”', pp: 'Lack of inclusive workplaces.', cta: 'Get Hired Now' },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 font-bold text-white">{row.p}</td>
                  <td className="px-6 py-4 text-gray-400 italic">{row.m}</td>
                  <td className="px-6 py-4 text-gray-400">{row.pp}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-[10px] font-bold uppercase tracking-widest border border-blue-500/30">
                      {row.cta}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
