import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

const platforms = [
  { name: 'Avtar I-WIN', focus: 'Women returnees, diversity hiring', model: 'Employer partnerships + events + resume bank', strength: 'Strong offline + enterprise network', weakness: 'Less tech-driven marketplace experience' },
  { name: 'HerKey', focus: 'Women professionals', strength: 'Strong branding & community', weakness: 'Limited to gender-based diversity' },
  { name: 'PowerToFly', focus: 'Remote + diverse tech talent', strength: 'International positioning', weakness: 'India not primary focus' },
  { name: 'Taggd', focus: 'Tech-enabled recruitment', diversity: 'Not pure DEI focused, but HR-tech driven' },
  { name: 'Qween', focus: 'LGBTQ+ hiring', strength: 'Niche positioning', weakness: 'Limited scale' },
];

export default function IndustryAnalysis() {
  return (
    <div className="space-y-12 text-blue-900">
      <section id="dei-hiring-space">
        <h2 className="text-3xl font-bold tracking-tight font-serif mb-4">🔵 TAB 2: Industry Analysis – Diversity & Inclusion Job Portals in India</h2>
        <p>India’s DEI hiring space is still emerging but accelerating due to: ESG compliance pressure, global reporting standards, enterprise diversity mandates, and startup culture evolution.</p>
      </section>

      <section id="major-platforms">
        <h2 className="text-3xl font-bold tracking-tight font-serif mb-4">2.1 Major Diversity-Focused Platforms Operating in India</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map(p => (
            <Card key={p.name}>
              <CardHeader><CardTitle>{p.name}</CardTitle></CardHeader>
              <CardContent>
                <p><span className="font-semibold">Focus:</span> {p.focus}</p>
                {p.model && <p><span className="font-semibold">Model:</span> {p.model}</p>}
                {p.strength && <p><span className="font-semibold">Strength:</span> {p.strength}</p>}
                {p.weakness && <p><span className="font-semibold">Weakness:</span> {p.weakness}</p>}
                {p.diversity && <p><span className="font-semibold">Diversity:</span> {p.diversity}</p>}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="market-gap">
        <h2 className="text-3xl font-bold tracking-tight font-serif mb-4">2.2 Market Gap Analysis</h2>
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-blue-50">
                    <tr>
                        <th className="py-2 px-4 border-b text-left">Segment</th>
                        <th className="py-2 px-4 border-b text-left">Current Coverage</th>
                        <th className="py-2 px-4 border-b text-left">Opportunity for DeiJobs</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td className="py-2 px-4 border-b">Women hiring</td><td className="py-2 px-4 border-b">Covered by HerKey</td><td className="py-2 px-4 border-b">Expand beyond gender</td></tr>
                    <tr><td className="py-2 px-4 border-b">LGBTQ+</td><td className="py-2 px-4 border-b">Qween niche</td><td className="py-2 px-4 border-b">Combine multi-diversity pools</td></tr>
                    <tr><td className="py-2 px-4 border-b">Disability hiring</td><td className="py-2 px-4 border-b">Fragmented NGOs</td><td className="py-2 px-4 border-b">Structured marketplace</td></tr>
                    <tr><td className="py-2 px-4 border-b">Pan-diversity</td><td className="py-2 px-4 border-b">Weak presence</td><td className="py-2 px-4 border-b">Strong opportunity</td></tr>
                </tbody>
            </table>
        </div>
        <Card className="mt-4 bg-yellow-50 border-yellow-200">
            <CardHeader><CardTitle>Strategic Gap</CardTitle></CardHeader>
            <CardContent><p>No strong, scalable, tech-first, multi-diversity marketplace in India with subscription monetisation + candidate amplification.</p></CardContent>
        </Card>
      </section>

      <section id="ads-analysis">
        <h2 className="text-3xl font-bold tracking-tight font-serif mb-4">Ads Analysis</h2>
        <div className="grid md:grid-cols-2 gap-8">
            <Card>
                <CardHeader><CardTitle>1. DeiJobs Ads Analysis</CardTitle></CardHeader>
                <CardContent>
                    <p className="mb-2">The DeiJobs ads focus on diversity as a business advantage, targeting HR professionals with clear CTAs like “See DEI Candidates Now.”</p>
                    <p className="font-semibold">Key Strengths:</p>
                    <ul className="list-disc list-inside pl-4">
                        <li>Strong focus on diversity and inclusion.</li>
                        <li>Clear CTAs for both employers and job seekers.</li>
                        <li>Strong brand proposition backed by diversity statistics.</li>
                        <li>Professional and corporate-centric tone and design.</li>
                    </ul>
                </CardContent>
            </Card>
            <Card>
                <CardHeader><CardTitle>2. Taggd Ads Analysis</CardTitle></CardHeader>
                <CardContent>
                    <p className="mb-2">Taggd’s ads emphasize efficiency in hiring for niche roles, highlighting a 30-day talent sprint and a 15% diversity boost.</p>
                    <p className="font-semibold">Key Strengths:</p>
                    <ul className="list-disc list-inside pl-4">
                        <li>Efficiency messaging that appeals to businesses.</li>
                        <li>Strong case study-driven ads that build trust.</li>
                        <li>Diversity angle tied to efficiency in recruitment.</li>
                        <li>Use of statistics and real-world examples.</li>
                    </ul>
                </CardContent>
            </Card>
        </div>
        <h3 className="text-2xl font-semibold mt-6 mb-4">3. Comparative Insights</h3>
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-blue-50">
                    <tr>
                        <th className="py-2 px-4 border-b text-left">Feature</th>
                        <th className="py-2 px-4 border-b text-left">DeiJobs</th>
                        <th className="py-2 px-4 border-b text-left">Taggd</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td className="py-2 px-4 border-b">Primary Focus</td><td className="py-2 px-4 border-b">Diversity and inclusion hiring platform</td><td className="py-2 px-4 border-b">AI-powered recruitment for niche roles</td></tr>
                    <tr><td className="py-2 px-4 border-b">Target Audience</td><td className="py-2 px-4 border-b">HR Professionals, CHROs, D&I Leads</td><td className="py-2 px-4 border-b">Enterprises, recruitment managers</td></tr>
                    <tr><td className="py-2 px-4 border-b">Key Selling Points</td><td className="py-2 px-4 border-b">Diverse talent pool, verified candidates</td><td className="py-2 px-4 border-b">Speed (30-day TTF), 15% diversity boost</td></tr>
                    <tr><td className="py-2 px-4 border-b">CTA</td><td className="py-2 px-4 border-b">See DEI Candidates Now or Discover DEI Leaders</td><td className="py-2 px-4 border-b">Get access now to AI-powered hiring solutions</td></tr>
                    <tr><td className="py-2 px-4 border-b">Visual Elements</td><td className="py-2 px-4 border-b">Diverse team in corporate settings</td><td className="py-2 px-4 border-b">Case studies and AI-driven solutions</td></tr>
                    <tr><td className="py-2 px-4 border-b">Unique Selling Proposition</td><td className="py-2 px-4 border-b">Diversity as a business advantage</td><td className="py-2 px-4 border-b">Niche role hiring efficiency</td></tr>
                </tbody>
            </table>
        </div>
      </section>
    </div>
  );
}