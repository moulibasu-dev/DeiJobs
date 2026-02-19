import { Search, Megaphone, Users, MousePointerClick, Facebook, Linkedin, Youtube } from 'lucide-react';

export default function Pillar1_Reach() {
  return (
    <section id="pillar1-reach">
      <h3 className="text-2xl font-semibold mb-4">Pillar 1: Reach Strategy (Maximizing Visibility and Awareness)</h3>
      <p className="mb-4">The Reach Pillar serves as the initial step in attracting the right audience to DeiJobs, which involves targeting the most relevant traffic through diverse marketing channels. The goal is to cast a wide net to increase awareness, attracting employers looking to build diverse teams and job seekers seeking inclusive opportunities.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 rounded-lg bg-gray-50 border">
          <div className="flex items-center gap-4 mb-4">
            <Search className="w-8 h-8 text-blue-500" />
            <h4 className="text-xl font-semibold">Google Ads</h4>
          </div>
          <p className="font-semibold text-sm mb-2">High-Intent Keywords:</p>
          <ul className="list-disc list-inside pl-4 text-sm mb-2">
            <li>“Inclusive recruitment India”</li>
            <li>“Women leadership roles”</li>
          </ul>
          <p className="font-semibold text-sm mb-2">Bid Strategy:</p>
          <ul className="list-disc list-inside pl-4 text-sm">
            <li>Focus on CPA bidding</li>
          </ul>
        </div>

        <div className="p-6 rounded-lg bg-gray-50 border">
          <div className="flex items-center gap-4 mb-4">
            <Facebook className="w-8 h-8 text-blue-500" />
            <h4 className="text-xl font-semibold">Meta Ads</h4>
          </div>
          <p className="font-semibold text-sm mb-2">Target Audience:</p>
          <ul className="list-disc list-inside pl-4 text-sm mb-2">
            <li>HR professionals & recruiters</li>
            <li>Underrepresented job seekers</li>
          </ul>
          <p className="font-semibold text-sm mb-2">Ad Formats:</p>
          <ul className="list-disc list-inside pl-4 text-sm">
            <li>Carousel & Video Ads</li>
          </ul>
        </div>

        <div className="p-6 rounded-lg bg-gray-50 border">
          <div className="flex items-center gap-4 mb-4">
            <Linkedin className="w-8 h-8 text-blue-500" />
            <h4 className="text-xl font-semibold">LinkedIn Ads</h4>
          </div>
          <p className="font-semibold text-sm mb-2">Sponsored Content:</p>
          <ul className="list-disc list-inside pl-4 text-sm mb-2">
            <li>Share case studies & success stories</li>
          </ul>
          <p className="font-semibold text-sm mb-2">Sponsored InMail:</p>
          <ul className="list-disc list-inside pl-4 text-sm">
            <li>Target HR professionals</li>
          </ul>
        </div>

        <div className="p-6 rounded-lg bg-gray-50 border">
          <div className="flex items-center gap-4 mb-4">
            <Youtube className="w-8 h-8 text-red-500" />
            <h4 className="text-xl font-semibold">YouTube Ads</h4>
          </div>
          <p className="font-semibold text-sm mb-2">Targeting:</p>
          <ul className="list-disc list-inside pl-4 text-sm mb-2">
            <li>In-Market & Affinity Audiences</li>
          </ul>
          <p className="font-semibold text-sm mb-2">Ad Formats:</p>
          <ul className="list-disc list-inside pl-4 text-sm">
            <li>Skippable & Bumper Ads</li>
          </ul>
        </div>

        <div className="p-6 rounded-lg bg-gray-50 border">
          <div className="flex items-center gap-4 mb-4">
            <Megaphone className="w-8 h-8 text-blue-500" />
            <h4 className="text-xl font-semibold">Display Network</h4>
          </div>
          <p className="font-semibold text-sm mb-2">Targeting:</p>
          <ul className="list-disc list-inside pl-4 text-sm mb-2">
            <li>In-Market & Affinity Audiences</li>
          </ul>
          <p className="font-semibold text-sm mb-2">Audiences:</p>
          <ul className="list-disc list-inside pl-4 text-sm">
            <li>Look-alike audiences</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
