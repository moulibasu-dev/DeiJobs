import { Search, Megaphone, Users, MousePointerClick, Facebook, Linkedin, Youtube, Target } from 'lucide-react';

export default function Pillar1_Reach() {
  return (
    <section id="pillar1-reach" className="animate-in slide-in-from-bottom-4 duration-700 space-y-8">
      <div className="space-y-2">
        <h3 className="text-3xl font-bold text-blue-900 font-serif">Pillar 1: Reach Strategy</h3>
        <p className="text-lg text-gray-600 max-w-3xl">Maximizing Visibility and Awareness across the Indian diversity hiring ecosystem.</p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        <div className="group p-8 rounded-3xl bg-gradient-to-br from-white to-blue-50 border border-blue-100 shadow-xl hover:shadow-2xl transition-all duration-300">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-blue-600 rounded-2xl shadow-lg shadow-blue-200">
              <Search className="w-8 h-8 text-white" />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-blue-900">1.1 Google Ads (Search & Display)</h4>
              <p className="text-blue-600 font-medium">High-Intent Capture & Remarketing</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-2xl border border-blue-50">
                <h5 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  Search Ads Strategy
                </h5>
                <p className="text-sm text-gray-600 mb-4">Targeting users actively searching for diversity recruitment solutions.</p>
                <div className="flex flex-wrap gap-2">
                  {['Diversity hiring platform India', 'Jobs for women in leadership', 'Inclusive recruitment', 'LGBTQ+ friendly jobs'].map(kw => (
                    <span key={kw} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-100">
                      {kw}
                    </span>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-blue-900 rounded-xl text-white text-xs">
                  <span className="font-bold block mb-1">Bid Strategy:</span>
                  Optimize for Cost per Acquisition (CPA) to drive registrations.
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-2xl border border-blue-50">
                <h5 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                  <MousePointerClick className="w-4 h-4" />
                  Display Ads & Creative
                </h5>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                    Remarketing to engage past visitors.
                  </li>
                  <li className="flex gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                    Dynamic Ads showing relevant job listings.
                  </li>
                  <li className="flex gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                    Static Ads with "Post a Job" CTAs.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-xl hover:border-blue-200 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-indigo-600 rounded-2xl shadow-lg shadow-indigo-100">
                <Facebook className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">1.2 Meta Ads</h4>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Target Audience</p>
                <p className="text-sm text-gray-600">HR Professionals & D&I Leaders in enterprises; Women, LGBTQ+, and PwD professionals.</p>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Ad Formats</p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2 bg-indigo-50 rounded-lg text-xs font-medium text-indigo-700 text-center">Carousel Ads</div>
                  <div className="p-2 bg-indigo-50 rounded-lg text-xs font-medium text-indigo-700 text-center">Lead Gen Ads</div>
                  <div className="p-2 bg-indigo-50 rounded-lg text-xs font-medium text-indigo-700 text-center col-span-2">Video Testimonials</div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-xl hover:border-blue-200 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-700 rounded-2xl shadow-lg shadow-blue-100">
                <Linkedin className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">1.3 LinkedIn Ads</h4>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-xs font-bold text-blue-700 uppercase tracking-wider">Sponsored Content</p>
                <p className="text-sm text-gray-600 italic">"How this company hired 10+ women leaders using DeiJobs."</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
                <p className="text-xs font-bold text-blue-800 mb-1">Sponsored InMail</p>
                <p className="text-sm text-blue-900">Direct outreach to D&I decision-makers and HR Heads in large enterprises.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-xl hover:border-red-100 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-red-600 rounded-2xl shadow-lg shadow-red-100">
                <Youtube className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">1.4 YouTube Ads</h4>
            </div>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                <span><strong>In-Market Targeting:</strong> Users researching diversity hiring.</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                <span><strong>Skippable Ads:</strong> Highlighting DeiJobs as a trusted partner.</span>
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-900 to-blue-800 shadow-xl text-white">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-sm">
                <Megaphone className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-bold">1.5 GDN & Custom Audiences</h4>
            </div>
            <div className="space-y-4">
              <p className="text-sm text-blue-100">Leveraging look-alike audiences based on existing high-value employers and job seekers.</p>
              <div className="flex flex-wrap gap-2">
                {['Diversity', 'Inclusion', 'Women Leadership', 'LGBTQ+ Rights'].map(tag => (
                  <span key={tag} className="px-2 py-1 bg-white/10 rounded-lg text-[10px] font-bold uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
